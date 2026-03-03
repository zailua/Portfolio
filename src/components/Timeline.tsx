import { motion } from "motion/react";

const experiences = [
  {
    company: "Sul Inteligência para Impacto",
    role: "Desenvolvedor Principal de I.A",
    period: "Dez 2025 - Atual",
    description: "Modelagem pragmática dos grandes modelos de raciocínio. Encadeamento complexo de soluções semânticas RAG/LLMs com injeções em Python puro. Desenvolvimento das vias de transporte destas lógicas para painéis modernos responsivos criados dentro de estruturas lógicas do ReactJS acoplados integralmente às malhas de APIs da Inteligência Artificial em tempo presente. Manutenção do roteamento e dos contêineres hospedados por implantações GCP estruturadas com Terraform na linha de base."
  },
  {
    company: "RECODE",
    role: "Tech Lead Liderança Sistêmica",
    period: "Nov 2025 - Atual",
    description: "Mentoria ativa para a consolidação de excelência no time dos desenvolvedores subordinados. Parametrização dos fundamentos da segurança das transações do Moodle escalado de PHP. Balanceamento geográfico e arquitetura espalhada de bases em instâncias pesadas da Equinix e do domínio GCP."
  },
  {
    company: "RECODE",
    role: "Analista Mestre de Dados",
    period: "Jun 2024 - Nov 2025",
    description: "Explorações de bases brutas isoladas integradas numa história visível e palatável pelos executivos de vendas com fluxos gráficos construídos sob o Power BI. Desenvolvimento exaustivo dos motores em Python na biblioteca Pandas para limpezas brutais baseadas na metodologia ETL contínua. Estruturações dos parâmetros vitais chaves (os chamados KPIs)."
  },
  {
    company: "ESX Enterprise",
    role: "Dev Full-Stack Integrador",
    period: "Jan 2024 - Nov 2024",
    description: "Lógicas focadas no ecossistema ECMAScript lidando através de TS integrado fortemente no par React-NestJS. O rigoroso processo testável das qualidades através de ecossistemas com Cypress integrado a contêineres isolados Docker na infraestrutura orquestrada via GitLab pipeline."
  },
  {
    company: "CIGAM",
    role: "Desenvolvedor Escalável .NET Avançado",
    period: "Nov 2021 - Jan 2024",
    description: "Customizações críticas modulares da regra pesada engessada dos sistemas legados de ERP ativados por C# na plataforma dotNet. Transações críticas procedurais executadas isoladamente através de lógicas profundas nas query views processadas em instâncias do SQL Server."
  }
];

export function Timeline() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 border-l-4 border-[#16A9C7] pl-4">
        A Rota do Drift
      </h2>
      <div className="relative border-l-2 border-[#16A9C7]/30 ml-4 md:ml-0">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 10, delay: idx * 0.1 }}
            className="mb-12 ml-8 relative group"
          >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#F6287D] group-hover:bg-[#F6287D] group-hover:shadow-[0_0_10px_#F6287D] transition-all duration-300" />
            <div className="bg-[#0A1128]/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-[#16A9C7]/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-serif text-2xl text-white font-bold">{exp.company}</h3>
                <span className="font-mono text-sm text-[#16A9C7] mt-2 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="font-sans text-lg text-[#F6287D] font-semibold mb-3">{exp.role}</h4>
              <p className="font-sans text-white/70 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
