import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="World Impact Initiative home">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0F4C81] text-lg font-black text-white shadow-lg shadow-blue-900/20">
        W
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black uppercase tracking-[0.22em] text-[#0F4C81]">
          World Impact
        </span>
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Initiative
        </span>
      </span>
    </Link>
  );
}
