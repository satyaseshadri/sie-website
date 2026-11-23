'use client';

import { useEffect, useState } from 'react';

function rewriteRelativeUrls(html, file) {
  const absolute = new URL(file, window.location.origin).href;
  const fix = (url) => {
    if (!url || /^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(url)) return url;
    if (url.startsWith('/')) return url;
    const resolved = new URL(url, absolute);
    return `${resolved.pathname}${resolved.search}${resolved.hash}`;
  };

  return html
    .replace(/(\s(?:src|href)=["'])([^"']+)(["'])/gi, (match, start, url, end) => `${start}${fix(url)}${end}`)
    .replace(/url\((['"]?)(?!https?:|\/|data:)([^)'"]+)\1\)/gi, (match, quote, url) => `url(${quote}${fix(url)}${quote})`);
}

export default function SvaasaFrame({ title, file }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setHtml(rewriteRelativeUrls(text, file));
      })
      .catch(() => {
        window.location.replace(file);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  if (!html) return <div className="fixed inset-0 z-[60] bg-white" />;

  return (
    <iframe
      title={title}
      srcDoc={html}
      className="fixed inset-0 z-[60] h-screen w-screen border-0 bg-white"
    />
  );
}
