'use client';

import { useState } from 'react';

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last Name', type: 'text', autoComplete: 'family-name' },
  { name: 'company', label: 'Company Name', type: 'text', autoComplete: 'organization' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  return (
    <form
      className="border border-border bg-white/70 p-6 shadow-forge backdrop-blur md:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setError('');

        const form = event.currentTarget;
        const formData = new FormData(form);
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        });

        if (!response.ok) {
          setSent(false);
          setError('Something went wrong. Please try again.');
          return;
        }

        form.reset();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label className="block" htmlFor={field.name} key={field.name}>
            <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.16em] text-navy/60">
              {field.label}
            </span>
            <input
              autoComplete={field.autoComplete}
              className="mt-2 h-11 w-full border border-border bg-paper px-3 font-outfit text-sm font-light text-navy outline-none transition-colors focus:border-orange"
              id={field.name}
              name={field.name}
              required
              type={field.type}
            />
          </label>
        ))}
      </div>

      <label className="mt-5 block" htmlFor="message">
        <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.16em] text-navy/60">
          Message
        </span>
        <textarea
          autoComplete="off"
          className="mt-2 min-h-[150px] w-full resize-y border border-border bg-paper px-3 py-3 font-outfit text-sm font-light leading-[1.7] text-navy outline-none transition-colors focus:border-orange"
          id="message"
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
            Thanks. Your message has been sent.
          </p>
        ) : error ? (
          <p className="font-outfit text-[13px] font-light text-muted">
            {error}
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
