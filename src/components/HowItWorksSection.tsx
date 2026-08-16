import { stepsData } from "../data/landingData";

export default function HowItWorksSection() {
  return (
    <section className="py-24 max-sm:py-16" id="como-funciona">
      <div className="w-full px-16 max-lg:px-8 max-sm:px-5">

        <div className="reveal max-w-160 mb-12 max-sm:mb-8">

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3vw,2.3rem)] max-sm:text-[1.8rem] leading-[1.15] tracking-[-0.02em]">
            Como funciona
          </h2>

        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6 max-sm:gap-4">

          {stepsData.map((step) => (
            <div
              key={step.number}
              className="reveal bg-[#242C29] border border-[#2D3733] rounded-2xl p-[28px_26px] max-sm:p-[24px_20px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(76,219,147,0.28)]"
            >
              <span className="inline-block font-['Manrope',sans-serif] font-extrabold text-[0.85rem] text-[#4CDB93] bg-[rgba(76,219,147,0.12)] px-2.5 py-1 rounded-full mb-4 max-sm:mb-3">
                {step.number}
              </span>
              <h3 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[1.15rem] max-sm:text-[1.1rem] leading-[1.15] tracking-[-0.02em] mb-2">
                {step.title}
              </h3>
              <p className="text-[0.95rem] max-sm:text-[0.9rem] text-[#A7B3AC] leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
