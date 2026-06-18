import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-brand-900">Settings</h1>

      <section>
        <h2 className="text-lg font-bold text-brand-900">Organization</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Input label="Organization name" defaultValue="World Impact Initiative" />
          <Input label="Public email" defaultValue="info@worldimpactinitiative.org" />
          <Input label="Public website" defaultValue="https://worldimpactinitiative.org" />
          <Input label="Country" defaultValue="Canada" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-brand-900">Branding</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <Input label="Primary color" defaultValue="#0F4C81" />
          <Input label="Accent color" defaultValue="#F4B400" />
          <Input label="Background" defaultValue="#F7F9FC" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-brand-900">Donation platform</h2>
        <Input label="CharitableImpact URL" defaultValue="https://charitableimpact.com/" />
      </section>

      <div className="flex justify-end">
        <button className="rounded-full bg-brand-800 hover:bg-brand-900 text-white px-6 py-2.5 text-sm font-semibold">
          Save changes
        </button>
      </div>
    </div>
  );
}

function Input({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-700">{label}</span>
      <input
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
      />
    </label>
  );
}
