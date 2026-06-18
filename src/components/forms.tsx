"use client";

import { Send } from "lucide-react";
import { useActionState } from "react";

type State = {
  ok: boolean;
  message: string;
};

const initialState: State = { ok: false, message: "" };

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
};

export function ActionForm({
  action,
  fields,
  submitLabel,
  hiddenFields = {}
}: {
  action: (state: State, formData: FormData) => Promise<State>;
  fields: Field[];
  submitLabel: string;
  hiddenFields?: Record<string, string>;
}) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-xl shadow-blue-900/10">
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-bold text-slate-700">
          {field.label}
          {field.textarea ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={5}
              placeholder={field.placeholder}
              className="form-field resize-y"
            />
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              className="form-field"
            />
          )}
        </label>
      ))}
      {state.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-bold ${
            state.ok ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
      <button className="btn btn-blue w-full justify-center" type="submit" disabled={pending}>
        <Send size={18} aria-hidden />
        {pending ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
