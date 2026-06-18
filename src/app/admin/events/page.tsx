import type { Metadata } from "next";
import { events } from "@/lib/events";
import { formatDate } from "@/lib/utils";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Events Admin",
  robots: { index: false, follow: false },
};

export default function AdminEventsPage() {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-900">Events</h1>
        <button className="inline-flex items-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-2.5">
          <Plus className="h-4 w-4" aria-hidden="true" /> Create Event
        </button>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-ink-500 border-b border-ink-100">
              <th className="py-3 pr-4">Title</th>
              <th className="py-3 pr-4">Date</th>
              <th className="py-3 pr-4">Format</th>
              <th className="py-3 pr-4">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {events.map((e) => (
              <tr key={e.slug}>
                <td className="py-3 pr-4 font-semibold text-brand-900">{e.title}</td>
                <td className="py-3 pr-4 text-ink-700">{formatDate(e.date)}</td>
                <td className="py-3 pr-4 text-ink-700">{e.format}</td>
                <td className="py-3 pr-4 text-ink-700">{e.category}</td>
                <td className="py-3 pr-4 text-right">
                  <button className="text-brand-700 font-semibold hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
