import { businessTypesData } from "../data/landingData";

export default function BusinessTypesSection() {
  return (
    <section className="py-24 max-sm:py-16 bg-[#202824]" id="para-quem">
      <div className="w-full px-16 max-sm:px-6">
        <div className="reveal max-w-160 mb-12">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.02em]">
            Serve para o seu tipo de negócio
          </h2>
          <p className="mt-3 text-[1.05rem] text-[#A7B3AC]">
            Cada configuração é pensada para a rotina real do seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-5 max-sm:flex max-sm:flex-nowrap max-sm:gap-4 max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:-mx-6 max-sm:px-6 max-sm:pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {businessTypesData.map((item) => (
            <div
              key={item.id}
              className="reveal flex flex-col bg-[#242C29] border border-[#2D3733] rounded-2xl p-6.5 max-sm:p-[32px_24px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(76,219,147,0.28)] hover:bg-[#2C3631] max-sm:w-[82vw] max-sm:flex-none max-sm:snap-center max-sm:min-h-70"
            >
              <div
                className="w-10.5 h-10.5 rounded-xl bg-[rgba(76,219,147,0.12)] text-[#4CDB93] flex items-center justify-center mb-4.5 max-sm:mb-6 [&>svg]:w-5.5 [&>svg]:h-5.5"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[1.05rem] max-sm:text-[1.15rem] leading-[1.15] tracking-[-0.02em] mb-2">
                {item.title}
              </h3>
              <p className="text-[0.92rem] max-sm:text-[0.95rem] text-[#A7B3AC] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
