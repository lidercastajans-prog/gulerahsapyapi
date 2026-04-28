"use client";

import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="group fixed bottom-7 right-7 z-50 hidden lg:inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all"
    >
      <span className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="relative w-7 h-7 lg:w-8 lg:h-8 fill-white"
        >
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Zm-5.43 7.42h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.88-9.88a9.81 9.81 0 0 1 6.99 2.9 9.81 9.81 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88Zm8.41-18.29A11.81 11.81 0 0 0 13.68 2.8C7.13 2.8 1.8 8.13 1.8 14.68c0 2.09.55 4.13 1.59 5.94L1.7 26.2l5.71-1.5a11.86 11.86 0 0 0 5.67 1.44h.01c6.55 0 11.88-5.33 11.88-11.88a11.81 11.81 0 0 0-3.48-8.42Z" />
        </svg>
      </span>
      <span className="hidden lg:inline pr-5 pl-1 text-sm font-medium">
        WhatsApp
      </span>
    </a>
  );
}
