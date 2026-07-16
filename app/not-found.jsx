import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="kicker">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">This page pivoted.</h1>
        <p className="mt-4 max-w-md text-ink/70">
          The page you're looking for doesn't exist — possibly it found product-market fit elsewhere.
        </p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </div>
  );
}
