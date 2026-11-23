'use client';

import SvaasaFrame from '../../../components/SvaasaFrame';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SvaasaPartnerPage() {
  return <SvaasaFrame title="Partner with SVAASA" file={`${prefix}/svaasa/partner-registration.html`} />;
}
