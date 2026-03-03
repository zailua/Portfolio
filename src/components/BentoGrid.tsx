import { motion } from "motion/react";

const stackData = [
  {
    title: "Engine do Backend & Cloud",
    description: "Microsserviços assíncronos, infraestrutura provisionada GCP, AWS, Terraform, clusterização via Docker. C#, Java, PHP.",
    items: ["Node.js", "NestJS", "Python", "C# .NET", "Java", "PHP", "GCP", "AWS", "Terraform", "Docker"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Frontend e Ferramentas",
    description: "ReactJS maduro, ecossistemas com NextJS/NestJS, framework Angular. TypeScript avançado.",
    items: ["ReactJS", "TypeScript", "Tailwind CSS", "Framer Motion", "Angular", "NextJS"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Núcleo de Inteligências, Modelagens RAG & Dados",
    description: "Manipulação preditiva na Vertex AI, estruturas de retentividade LangChain, lógicas em RAG, bibliotecas de matrizes Pandas e NumPy. Sistemas complexos analíticos visuais em Power BI. Gestões transacionais rigorosas sobre SQL Server corporativo e clusters espelhados em MySQL.",
    items: ["Vertex AI", "LangChain", "RAG", "LLMs", "Pandas", "NumPy", "SQL Server", "MySQL", "Power BI"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Governança CI/CD & Deploy Ágil",
    description: "Práticas integradas de CI/CD (Gitlab runner pipeline), filosofias amplas de DevOps estruturado. Scrum/Kanban.",
    items: ["GitLab CI", "DevOps", "Scrum", "Kanban", "Jest", "Cypress"],
    colSpan: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 border-l-4 border-[#F6287D] pl-4">
        Arsenal Tecnológico
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stackData.map((block, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`bg-[#0A1128]/60 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-[#16A9C7]/50 transition-colors duration-300 group ${block.colSpan}`}
          >
            <h3 className="font-serif text-2xl text-[#16A9C7] mb-4 group-hover:text-[#F6287D] transition-colors">
              {block.title}
            </h3>
            <p className="font-sans text-sm text-white/60 mb-6 leading-relaxed">
              {block.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {block.items.map((item, i) => (
                <span
                  key={i}
                  className="font-sans text-xs text-white/80 bg-[#050505]/80 px-3 py-1.5 rounded-sm border border-[#16A9C7]/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
