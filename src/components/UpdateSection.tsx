import { updatePanelData } from "../data/landingData";

export default function UpdateSection() {
  return (
    <section className="py-24 max-sm:py-16 bg-[#202824]" id="atualizacao">
      <div className="w-full max-w-[1160px] mx-auto px-6 grid grid-cols-2 max-[880px]:grid-cols-1 gap-14 items-center">
        <div className="reveal">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.02em] mb-[18px]">
            Seu negócio muda.
            <br />
            O atendimento também.
          </h2>
          <p className="text-[1.02rem] text-[#A7B3AC] mb-[22px] leading-[1.6]">
            Novos produtos, alteração de preços, promoções, horários, serviços ou cardápio: as informações podem ser atualizadas sempre que precisar.
          </p>
          <p className="text-[0.98rem] text-[#F4F7F5] bg-[#242C29] border-l-[3px] border-[#4CDB93] p-[16px_18px] rounded-r-[10px] leading-[1.6]">
            "Você me passa as informações ou atualiza o conteúdo combinado, e o agente passa a utilizar essas informações no atendimento."
          </p>
        </div>
        <div className="reveal max-[880px]:-order-1" aria-hidden="true">
          <div className="bg-[#242C29] border border-[#2D3733] rounded-[16px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between p-[16px_20px] bg-[#2C3631] text-[0.85rem] font-semibold text-[#F4F7F5] border-b border-[#2D3733]">
              <span>Informações do negócio</span>
              <span className="text-[0.68rem] font-semibold text-[#74807A] bg-white/[0.05] px-[9px] py-[3px] rounded-full uppercase tracking-[0.04em]">
                exemplo
              </span>
            </div>
            {updatePanelData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1.4fr_1fr_auto] gap-[10px] items-center p-[16px_20px] border-b border-[#2D3733] last:border-b-0 text-[0.88rem]"
              >
                <span className="text-[#F4F7F5] font-medium">{item.title}</span>
                <span className="text-[#A7B3AC]">{item.detail}</span>
                <span
                  className={`justify-self-end text-[0.72rem] font-semibold px-[10px] py-1 rounded-full whitespace-nowrap ${
                    item.isPending
                      ? "text-[#74807A] bg-white/[0.05]"
                      : "bg-[rgba(76,219,147,0.12)] text-[#4CDB93]"
                  }`}
                >
                  {item.statusText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
