"use server";

import { sendNotification } from "@/lib/notify";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string>>;
};

type ContactInput = {
  name: string;
  phone: string;
  email: string;
  model: string;
  message: string;
};

const trim = (v: FormDataEntryValue | null) =>
  typeof v === "string" ? v.trim() : "";

// E.164 / yerel TR formatları için yumuşak doğrulama
const PHONE_RE = /^[\d\s+()-]{7,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — bot doldurursa sessizce başarı dön
  const honey = trim(formData.get("company_website"));
  if (honey) {
    return { ok: true };
  }

  const input: ContactInput = {
    name: trim(formData.get("name")),
    phone: trim(formData.get("phone")),
    email: trim(formData.get("email")),
    model: trim(formData.get("model")),
    message: trim(formData.get("message")),
  };

  const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};

  if (input.name.length < 2) {
    fieldErrors.name = "Lütfen adınızı girin.";
  }
  if (!PHONE_RE.test(input.phone)) {
    fieldErrors.phone = "Geçerli bir telefon numarası girin.";
  }
  if (input.email && !EMAIL_RE.test(input.email)) {
    fieldErrors.email = "E-posta formatı geçersiz görünüyor.";
  }
  if (input.message.length < 10) {
    fieldErrors.message = "Mesaj en az 10 karakter olmalı.";
  }
  if (input.message.length > 4000) {
    fieldErrors.message = "Mesaj çok uzun (en fazla 4000 karakter).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, error: "Bazı alanlar eksik ya da hatalı." };
  }

  try {
    await sendNotification({
      kind: "contact-form",
      data: input,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true };
  } catch (err) {
    console.error("contact form notify error:", err);
    return {
      ok: false,
      error:
        "Mesaj gönderilemedi. Lütfen telefonla ya da WhatsApp üzerinden ulaşın.",
    };
  }
}
