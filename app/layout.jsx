import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://sie.iitm.ac.in'),
  title: {
    default: 'School of Innovation & Entrepreneurship | IIT Madras',
    template: '%s | SIE, IIT Madras',
  },
  description:
    'The School of Innovation & Entrepreneurship (SIE) at IIT Madras turns research into deep-tech ventures — through CFI, Nirmaan, the MS & PhD programmes, founder fellowships and seed support.',
  openGraph: {
    siteName: 'SIE, IIT Madras',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'School of Innovation & Entrepreneurship, IIT Madras',
    url: 'https://sie.iitm.ac.in',
    parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology Madras' },
    address: { '@type': 'PostalAddress', addressLocality: 'Chennai', postalCode: '600036', addressCountry: 'IN' },
    telephone: '+91-44-2257-8514',
    email: 'support@sieiitm.org',
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
