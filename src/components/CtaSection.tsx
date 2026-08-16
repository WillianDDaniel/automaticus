import { getWhatsAppUrl } from "../config/constants";

export default function CtaSection() {
  return (
    <section className="pt-[110px] pb-[120px]" id="contato">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="reveal max-w-[620px] mx-auto text-center bg-[#242C29] border border-[#2D3733] rounded-[24px] p-[60px_44px] max-sm:p-[44px_24px] relative overflow-hidden before:content-[''] before:absolute before:-top-[40%] before:-right-[40%] before:w-[260px] before:h-[260px] before:bg-[radial-gradient(circle,rgba(76,219,147,0.22),transparent_70%)] before:pointer-events-none">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3.4vw,2.2rem)] leading-[1.15] tracking-[-0.02em] mb-[14px]">
            Quer colocar seu WhatsApp para trabalhar por você?
          </h2>
          <p className="text-[1.02rem] text-[#A7B3AC] mb-[30px] leading-[1.6]">
            Me conte como funciona o seu negócio e eu explico como podemos montar uma solução simples para o seu atendimento.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-semibold rounded-full border border-transparent cursor-pointer whitespace-nowrap bg-[#4CDB93] text-[#0F1B15] px-[30px] py-4 text-[1.02rem] shadow-[0_8px_24px_rgba(76,219,147,0.22)] hover:bg-[#38C27C] hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(76,219,147,0.22)] active:translate-y-0 transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-[#4CDB93] focus-visible:outline-offset-3"
          >
            Falar comigo no WhatsApp
          </a>
          <span className="block mt-[18px] text-[0.85rem] text-[#74807A]">
            Atendimento personalizado • Solução sob medida
          </span>
        </div>
      </div>
    </section>
  );
}
