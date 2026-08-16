import { getWhatsAppUrl, INSTAGRAM_URL } from "../config/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-[#2D3733]">
      <div className="w-full max-w-[1160px] mx-auto px-6 flex items-center justify-between max-sm:justify-center max-sm:text-center flex-wrap gap-4">
        <div className="flex items-center gap-[10px] font-['Manrope',sans-serif] font-bold text-[#F4F7F5]">
          <span className="w-[26px] h-[26px] rounded-[8px] bg-gradient-to-br from-[#4CDB93] to-[#38C27C] shadow-[0_4px_14px_rgba(76,219,147,0.22)] shrink-0" aria-hidden="true"></span>
          <span>
            Atende<span className="text-[#4CDB93]">IA</span>
          </span>
        </div>
        <div className="flex gap-[22px] text-[0.9rem] text-[#A7B3AC]">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4CDB93] transition-colors focus-visible:outline-2 focus-visible:outline-[#4CDB93] focus-visible:outline-offset-3"
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4CDB93] transition-colors focus-visible:outline-2 focus-visible:outline-[#4CDB93] focus-visible:outline-offset-3"
          >
            Instagram
          </a>
        </div>
        <p className="text-[0.82rem] text-[#74807A] w-full text-center order-3 pt-5 border-t border-[#2D3733] mt-2">
          © {currentYear} AtendeIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
