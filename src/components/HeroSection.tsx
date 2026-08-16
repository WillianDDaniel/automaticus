import { getWhatsAppUrl } from "../config/constants";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="pt-22 pb-24 max-sm:pt-14 max-sm:pb-16 overflow-hidden">
      <div className="w-full px-16 max-lg:px-8 max-sm:px-5 flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-12">

        <div className="reveal flex flex-col items-start max-lg:items-center max-lg:text-center max-lg:w-full">
          <span className="inline-flex items-center gap-2 px-3.5 pl-2.5 py-1.75 rounded-full bg-[rgba(76,219,147,0.12)] border border-[rgba(76,219,147,0.28)] text-[#4CDB93] text-[0.85rem] font-semibold mb-5.5">
            <span className="w-2 h-2 rounded-full bg-[#4CDB93] pulse-dot" aria-hidden="true"></span>
            Atendimento sob medida
          </span>

          <h1 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] leading-[1.15] tracking-[-0.02em] text-[clamp(2.2rem,4.4vw,3.4rem)] max-sm:text-[2.1rem] mb-5.5">
            Seu WhatsApp atendendo seus clientes, mesmo quando você está ocupado.
          </h1>

          <p className="text-[1.15rem] text-[#A7B3AC] max-w-130 mb-8.5 leading-[1.6]">
            Eu configuro um agente de IA personalizado para o seu negócio responder dúvidas, pedidos, horários, preços, agendamentos e outras mensagens pelo WhatsApp.
          </p>

          <div className="flex flex-col items-start max-lg:items-center gap-4 max-sm:w-full">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-semibold rounded-full border border-transparent cursor-pointer whitespace-nowrap bg-[#4CDB93] text-[#0F1B15] px-7.5 py-4 text-[1.02rem] shadow-[0_8px_24px_rgba(76,219,147,0.22)] hover:bg-[#38C27C] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(76,219,147,0.22)] active:translate-y-0 transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-[#4CDB93] focus-visible:outline-offset-3 max-sm:w-full"
            >
              Quero conhecer a solução
            </a>
            <span className="inline-flex items-center gap-2 text-[0.9rem] text-[#74807A]">
              <svg className="w-4 h-4 text-[#4CDB93]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10.5 8 14l8-8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Feito sob medida para o seu negócio
            </span>
          </div>
        </div>

        <div className="reveal flex justify-center max-lg:w-full" aria-hidden="true">
          <PhoneMockup />
        </div>

      </div>
    </section>
  );
}