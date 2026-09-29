import Link from 'next/link';
import PdfViewer from '../../../../components/PdfViewer';
import { PageHero, Section } from '../../../../components/Section';

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Sample thesis format',
  description: 'IIT Madras M.S. thesis specimen for the MS (Entrepreneurship) programme.',
};

export default function ThesisFormatPage() {
  return (
    <>
      <PageHero
        kicker="MS (Entrepreneurship)"
        title="Sample thesis format"
        lead="IIT Madras M.S. thesis specimen. Read it here on the page."
      >
        <Link href="/programs/ms/" className="btn-ghost mt-8">Back to the MS programme</Link>
      </PageHero>
      <Section>
        <div className="max-h-[min(90vh,1100px)] overflow-y-auto">
          <PdfViewer
            title="Sample thesis format"
            src={`${PREFIX}/docs/THESIS_SPECIMEN_COPY.pdf`}
          />
        </div>
      </Section>
    </>
  );
}
