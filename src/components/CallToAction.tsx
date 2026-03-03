import { Github, Linkedin } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative z-10 py-32 px-6 flex flex-col items-center justify-center">
      <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">
        Inspecionar Operações Militares
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="katana-slash group relative bg-[#0A1128] border border-[#16A9C7]/50 px-8 py-4 rounded-sm flex items-center gap-3 hover:bg-[#16A9C7]/10 transition-colors"
        >
          <Github className="w-6 h-6 text-[#16A9C7] group-hover:text-white transition-colors" />
          <span className="font-sans text-white font-semibold uppercase tracking-wider text-sm">
            Investigar Código de Repositório - GitHub
          </span>
        </a>
        <a
          href="https://linkedin.com/in/gabriel-mesquita"
          target="_blank"
          rel="noopener noreferrer"
          className="katana-slash group relative bg-[#0A1128] border border-[#F6287D]/50 px-8 py-4 rounded-sm flex items-center gap-3 hover:bg-[#F6287D]/10 transition-colors"
        >
          <Linkedin className="w-6 h-6 text-[#F6287D] group-hover:text-white transition-colors" />
          <span className="font-sans text-white font-semibold uppercase tracking-wider text-sm">
            Currículo Integral no portal Linkedin
          </span>
        </a>
      </div>
    </section>
  );
}
