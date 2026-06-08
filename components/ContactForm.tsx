'use client';

import { useState } from 'react';

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'company', label: 'Company Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="border border-border bg-white/70 p-6 shadow-forge backdrop-blur md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label className="block" key={field.name}>
            <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.16em] text-navy/60">
              {field.label}
            </span>
            <input
              className="mt-2 h-11 w-full border border-border bg-paper px-3 font-outfit text-sm font-light text-navy outline-none transition-colors focus:border-orange"
              name={field.name}
              required
              type={field.type}
            />
          </label>
        ))}
      </div>

      <label className="mt-5 block">
        <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.16em] text-navy/60">
          Message
        </span>
        <textarea
          className="mt-2 min-h-[150px] w-full resize-y border border-border bg-paper px-3 py-3 font-outfit text-sm font-light leading-[1.7] text-navy outline-none transition-colors focus:border-orange"
          name="message"
          required
        />
      </label>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button className="forge-button forge-button-primary px-9" type="submit">
          Submit
        </button>
        {sent ? (
          <p className="font-outfit text-[13px] font-light text-muted">
            Thanks. For the local preview, this shows the success state without sending email.
          </p>
        ) : (
          <p className="font-outfit text-[11px] font-light text-navy/35">
            We will respond with a practical next step, not a canned pitch.
          </p>
        )}
      </div>
    </form>
  );
}
