// Bildirim taşıyıcısı — şu an sadece sunucu loguna yazıyor.
// Resend / SendGrid / SMTP entegrasyonunu sadece bu fonksiyon içinde değiştirin.
//
// Örnek (Resend) bağlantı:
//   const { Resend } = await import("resend");
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "no-reply@gulerahsapyapi.com.tr",
//     to: "info@gulerahsapyapi.com.tr",
//     subject: `Yeni iletişim mesajı — ${payload.data.name}`,
//     text: JSON.stringify(payload.data, null, 2),
//   });

export type NotificationPayload = {
  kind: "contact-form";
  data: Record<string, string>;
  receivedAt: string;
};

export async function sendNotification(payload: NotificationPayload) {
  // eslint-disable-next-line no-console
  console.log("[notify]", JSON.stringify(payload, null, 2));
}
