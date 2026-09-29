'use client';

import { useEffect, useRef, useState } from 'react';

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

let pdfjsPromise;

function assetUrl(base, file) {
  return new URL(`${base}/pdfjs/${file}`, window.location.origin).href;
}

async function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = (async () => {
      const bases = [...new Set([PREFIX, ''])];
      let lastErr;
      for (const base of bases) {
        try {
          const libUrl = assetUrl(base, 'pdf.min.js');
          const workerUrl = assetUrl(base, 'pdf.worker.min.js');
          const pdfjs = await import(/* webpackIgnore: true */ libUrl);
          pdfjs.GlobalWorkerOptions.workerPort = new Worker(workerUrl, { type: 'module' });
          return pdfjs;
        } catch (err) {
          lastErr = err;
        }
      }
      throw lastErr || new Error('pdf.js missing');
    })();
  }
  return pdfjsPromise;
}

async function loadPdfData(src) {
  const paths = [...new Set([
    src,
    `${PREFIX}/docs/THESIS_SPECIMEN_COPY.pdf`,
    '/docs/THESIS_SPECIMEN_COPY.pdf',
  ].filter(Boolean))];

  let lastErr;
  for (const path of paths) {
    try {
      const res = await fetch(path, { cache: 'force-cache' });
      if (res.ok) return await res.arrayBuffer();
      lastErr = new Error(`${path} ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('PDF missing');
}

export default function PdfViewer({ src, title }) {
  const hostRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let pdfDoc = null;
    let debounce = null;
    let lastWidth = 0;

    async function getPdf() {
      if (pdfDoc) return pdfDoc;
      const pdfjs = await loadPdfjs();
      pdfDoc = await pdfjs.getDocument({
        data: await loadPdfData(src),
        disableRange: true,
        disableStream: true,
      }).promise;
      return pdfDoc;
    }

    async function draw(width) {
      if (cancelled || width < 40) return;
      const doc = await getPdf();
      if (cancelled) return;

      host.replaceChildren();
      const dpr = window.devicePixelRatio || 1;

      for (let n = 1; n <= doc.numPages; n += 1) {
        const page = await doc.getPage(n);
        if (cancelled) return;
        const unscaled = page.getViewport({ scale: 1 });
        const scale = (width / unscaled.width) * dpr;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
        canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
        canvas.className = 'mb-3 w-full last:mb-0';
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', `${title}, page ${n}`);
        host.appendChild(canvas);
        await page.render({
          canvasContext: canvas.getContext('2d', { alpha: false }),
          viewport,
        }).promise;
      }

      if (!cancelled) setStatus('ready');
    }

    const observer = new ResizeObserver((entries) => {
      const width = Math.floor(entries[0].contentRect.width);
      if (width === lastWidth) return;
      lastWidth = width;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setStatus((s) => (s === 'ready' ? s : 'loading'));
        draw(width).catch(() => {
          if (!cancelled) setStatus('error');
        });
      }, 120);
    });

    observer.observe(host);

    return () => {
      cancelled = true;
      clearTimeout(debounce);
      observer.disconnect();
      pdfDoc?.destroy();
      host.replaceChildren();
    };
  }, [src, title]);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-navy/10 bg-navy/[0.03] shadow-sm"
      onContextMenu={(e) => e.preventDefault()}
    >
      {status === 'loading' && (
        <p className="pointer-events-none absolute inset-x-0 top-0 z-10 px-6 py-16 text-center text-sm text-ink/60">
          Loading sample thesis…
        </p>
      )}
      {status === 'error' && (
        <p className="px-6 py-16 text-center text-sm text-ink/60">Unable to display the document.</p>
      )}
      <div
        ref={hostRef}
        className={`select-none p-2 sm:p-4 ${status === 'ready' ? '' : 'min-h-[16rem]'}`}
      />
    </div>
  );
}
