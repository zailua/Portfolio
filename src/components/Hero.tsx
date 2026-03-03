import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Architecture | AI Specialist | Full Stack Tech Lead";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#16A9C7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="20%" cy="30%" r="2" fill="#F6287D" className="animate-pulse" />
          <circle cx="80%" cy="60%" r="2" fill="#16A9C7" className="animate-pulse" />
          <circle cx="50%" cy="80%" r="2" fill="#F6287D" className="animate-pulse" />
          <path d="M 20% 30% L 50% 80% L 80% 60%" fill="none" stroke="#16A9C7" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="font-serif text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#16A9C7] via-white to-[#F6287D] drop-shadow-[0_0_15px_rgba(246,40,125,0.5)]">
          Gabriel Mesquita
        </h1>
        <h2 className="font-sans text-xl md:text-2xl text-white/80 h-8 tracking-widest uppercase">
          {text}
          <span className="animate-pulse text-[#F6287D]">_</span>
        </h2>
      </motion.div>
    </section>
  );
}
