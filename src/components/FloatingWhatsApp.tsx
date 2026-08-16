import { getWhatsAppUrl } from "../config/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-[22px] bottom-[22px] max-sm:right-4 max-sm:bottom-4 w-[54px] h-[54px] max-sm:w-[50px] max-sm:h-[50px] rounded-full bg-[#4CDB93] text-[#0F1B15] flex items-center justify-center shadow-[0_10px_26px_rgba(76,219,147,0.22)] z-[60] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-[0_14px_32px_rgba(76,219,147,0.22)] focus-visible:outline-2 focus-visible:outline-[#4CDB93] focus-visible:outline-offset-3"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M17.3 14.5c-.3-.15-1.7-.85-2-.95-.27-.1-.46-.15-.66.15-.2.3-.75.95-.92 1.14-.17.2-.34.22-.63.08-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.38-.26.3-1 1-1 2.42 0 1.43 1.04 2.8 1.18 3 .15.2 2.03 3.1 4.94 4.35.69.3 1.23.48 1.65.61.7.22 1.33.19 1.83.12.56-.08 1.7-.7 1.94-1.36.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.56-.35z"
          fill="currentColor"
        />
        <path
          d="M12.02 2C6.5 2 2 6.48 2 12c0 1.86.5 3.6 1.4 5.1L2 22l5.05-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.63 0-3.15-.44-4.46-1.22l-.32-.19-3 .8.8-2.92-.2-.3A8.1 8.1 0 0 1 3.9 12c0-4.48 3.65-8.1 8.12-8.1 4.47 0 8.1 3.63 8.1 8.1s-3.63 8.1-8.1 8.1Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
