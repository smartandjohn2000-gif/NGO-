import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell py-24 text-center">
      <h1 className="text-4xl font-bold text-[#0F4C81]">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you requested could not be found.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white"
      >
        Return home
      </Link>
    </section>
  );
}
