const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Tech Pioneer Grant 2026',
  description:
    'A grant call for clean tech, agri tech, and fintech ventures — three categories matched to where your startup stands today.',
};

export default function TechPioneerGrantPage() {
  return (
    <iframe
      src={`${PREFIX}/tpg/form.html`}
      title="Tech Pioneer Grant 2026 application"
      className="fixed inset-0 z-[100] h-[100dvh] w-screen border-0 bg-[#F7F8F4]"
    />
  );
}
