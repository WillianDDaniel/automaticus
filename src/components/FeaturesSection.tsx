import { featuresData } from "../data/landingData";

export default function FeaturesSection() {
  return (
    <section className="py-24 max-sm:py-16" id="funcionalidades">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="reveal max-w-[640px] mb-12">
          <h2 className="font-['Manrope',sans-serif] font-extrabold text-[#F4F7F5] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.02em]">
            O que ele pode fazer
          </h2>
        </div>
        <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-[14px] mb-7 list-none p-0">
          {featuresData.map((feature, index) => (
            <li
              key={index}
              className="reveal flex items-center gap-[10px] text-[0.98rem] text-[#F4F7F5] py-3 border-b border-[#2D3733]"
            >
              <svg className="w-[18px] h-[18px] text-[#4CDB93] shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10.5 8 14l8-8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <p className="reveal text-[0.92rem] text-[#74807A] pt-1 border-t border-dashed border-[#37423C]">
          As informações são configuradas de acordo com o seu negócio.
        </p>
      </div>
    </section>
  );
}
