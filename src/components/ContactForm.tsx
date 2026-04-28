"use client";

import { useActionState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { ok: false };

type ModelOption = { slug: string; name: string; area: string; layout: string };

export default function ContactForm({
  modelOptions,
}: {
  modelOptions: ModelOption[];
}) {
  const [state, action, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-10"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-xl">
          ✓
        </div>
        <h3 className="mt-5 font-serif text-2xl md:text-3xl font-medium tracking-tight">
          Mesajınız ulaştı, teşekkürler.
        </h3>
        <p className="mt-3 text-foreground/80 leading-relaxed">
          Genellikle aynı gün içinde geri dönüyoruz. Acil durumlar için
          aşağıdaki telefon ya da WhatsApp bağlantısı en hızlı yol.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 lg:p-8 space-y-5"
    >
      <div>
        <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
          Bize yazın
        </h3>
        <p className="mt-2 text-sm text-muted">
          Projenizi anlatın — aynı gün içinde geri dönelim.
        </p>
      </div>

      {/* Honeypot — kullanıcılara görünmez, botlar doldurabilir */}
      <div aria-hidden className="hidden">
        <label>
          Web sitenizi yazmayın
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <Field
        label="Ad Soyad"
        name="name"
        type="text"
        required
        autoComplete="name"
        error={state.fieldErrors?.name}
      />
      <Field
        label="Telefon"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        placeholder="0532 ..."
        error={state.fieldErrors?.phone}
      />
      <Field
        label="E-posta (opsiyonel)"
        name="email"
        type="email"
        autoComplete="email"
        error={state.fieldErrors?.email}
      />

      <div>
        <label
          htmlFor="contact-model"
          className="block text-xs uppercase tracking-[0.15em] text-muted mb-1.5"
        >
          İlgilendiğiniz model (opsiyonel)
        </label>
        <select
          id="contact-model"
          name="model"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none transition-colors"
          defaultValue=""
        >
          <option value="">Henüz karar vermedim</option>
          {modelOptions.map((m) => (
            <option key={m.slug} value={m.name}>
              {m.name} — {m.area} {m.layout}
            </option>
          ))}
        </select>
      </div>

      <Field
        label="Mesajınız"
        name="message"
        as="textarea"
        rows={5}
        required
        placeholder="Arazi konumu, planladığınız kullanım, varsa kafanızdaki tarih..."
        error={state.fieldErrors?.message}
      />

      {state.error && !state.fieldErrors && (
        <p
          role="alert"
          className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? "Gönderiliyor..." : "Mesajı Gönder"}
      </button>

      <p className="text-xs text-muted leading-relaxed">
        Bilgileriniz yalnızca size geri dönüş için kullanılır, üçüncü taraflarla
        paylaşılmaz.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  rows?: number;
  as?: "input" | "textarea";
  error?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  rows,
  as = "input",
  error,
}: FieldProps) {
  const id = `contact-${name}`;
  const errorId = error ? `${id}-error` : undefined;
  const baseClass =
    "w-full rounded-lg border bg-background px-4 py-3 text-base text-foreground focus:outline-none transition-colors";
  const stateClass = error
    ? "border-red-300 focus:border-red-500"
    : "border-border focus:border-accent";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.15em] text-muted mb-1.5"
      >
        {label}
        {required && <span aria-hidden className="text-accent ml-1">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`${baseClass} ${stateClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`${baseClass} ${stateClass}`}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
