import { useState, useEffect } from "react";
import { chatMessagesData } from "../data/landingData";

export default function PhoneMockup() {
  const [visibleCount, setVisibleCount] = useState<number>(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return chatMessagesData.length;
    }
    return 3;
  });

  const [isTyping, setIsTyping] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(chatMessagesData.length);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-[320px] max-sm:w-full max-sm:max-w-[340px] bg-gradient-to-b from-[#0F1613] to-[#0B100E] rounded-[34px] p-[14px_10px] shadow-[0_12px_32px_rgba(0,0,0,0.28)] ring-1 ring-[#2D3733] phone-mockup-float">
      <div className="w-[90px] h-[6px] rounded-full bg-white/12 mx-auto mb-[10px]"></div>
      <div className="bg-[#242C29] rounded-[22px] overflow-hidden border border-[#2D3733]">
        <div className="flex items-center gap-[10px] px-4 py-[14px] bg-[#2C3631] border-b border-[#2D3733]">
          <div className="w-[34px] h-[34px] rounded-full bg-[rgba(76,219,147,0.12)] text-[#4CDB93] flex items-center justify-center font-bold font-['Manrope',sans-serif] text-[0.9rem]">
            B
          </div>
          <div className="flex flex-col">
            <strong className="text-[0.88rem] text-[#F4F7F5] font-bold">Barbearia Vintage</strong>
            <span className="text-[0.72rem] text-[#4CDB93]">online</span>
          </div>
        </div>
        <div className="p-[18px_14px] flex flex-col gap-[10px] min-h-[300px]">
          <div className="self-center text-[0.68rem] text-[#74807A] bg-white/[0.04] px-[10px] py-[3px] rounded-full mb-[6px]">
            Hoje
          </div>
          {chatMessagesData.slice(0, visibleCount).map((message) => (
            <div
              key={message.id}
              className={`max-w-[82%] px-[13px] py-[9px] rounded-[14px] text-[0.85rem] leading-[1.4] bubble-anim ${
                message.type === "in"
                  ? "self-start bg-[#2C3631] text-[#F4F7F5] rounded-bl-[4px]"
                  : "self-end bg-[rgba(76,219,147,0.12)] border border-[rgba(76,219,147,0.28)] text-[#F4F7F5] rounded-br-[4px]"
              }`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="max-w-[82%] px-[14px] py-3 rounded-[14px] self-end bg-[rgba(76,219,147,0.12)] border border-[rgba(76,219,147,0.28)] text-[#F4F7F5] rounded-br-[4px] bubble-anim">
              <span className="inline-flex gap-1 items-center">
                <span className="w-[6px] h-[6px] rounded-full bg-[#4CDB93] typing-dot"></span>
                <span
                  className="w-[6px] h-[6px] rounded-full bg-[#4CDB93] typing-dot"
                  style={{ animationDelay: "0.15s" }}
                ></span>
                <span
                  className="w-[6px] h-[6px] rounded-full bg-[#4CDB93] typing-dot"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
