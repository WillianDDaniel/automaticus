import { benefitsData } from "../data/landingData";

export default function BenefitsSection() {
  return (
    <section className="py-24 max-sm:py-16" id="por-que">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="reveal max-w-[640px] mb-12">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.02em]">
            Por que contratar uma solução sob medida?
          </h2>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 max-[380px]:grid-cols-1 gap-5 max-sm:gap-4">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="reveal py-6 px-1 border-t-2 border-[#4CDB93]">
              <h3 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[1.05rem] leading-[1.15] tracking-[-0.02em] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[0.92rem] text-[#A7B3AC] leading-[1.6]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
