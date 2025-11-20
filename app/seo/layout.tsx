import Link from "next/link";

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10 lg:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="text-brand-teal hover:text-brand-teal-light transition text-sm font-medium inline-flex items-center gap-2"
          >
            ← Back to main site
          </Link>
        </div>
        <main className="space-y-8">{children}</main>
      </div>
    </div>
  );
}

