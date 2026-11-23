'use client';

import SvaasaFrame from '../../components/SvaasaFrame';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SvaasaPage() {
  return <SvaasaFrame title="SVAASA" file={`${prefix}/svaasa/svaasa.html`} />;
}
