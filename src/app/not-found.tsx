import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
        404
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand-900">
        We couldn't find that page.
      </h1>
      <p className="mt-4 text-ink-600 max-w-xl mx-auto">
        The page may have moved or no longer exists. Try the homepage or one of
        the popular sections below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-brand-800 hover:bg-brand-900 text-white px-5 py-2.5 text-sm font-semibold"
        >
          Home
        </Link>
        <Link
          href="/programs"
          className="rounded-full bg-white ring-1 ring-ink-200 text-ink-800 px-5 py-2.5 text-sm font-semibold"
        >
          Programs
        </Link>
        <Link
          href="/donate"
          className="rounded-full bg-gold-400 hover:bg-gold-300 text-brand-900 px-5 py-2.5 text-sm font-semibold"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
