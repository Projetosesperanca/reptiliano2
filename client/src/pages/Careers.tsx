import { motion } from "framer-motion";
import { MapPin, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import careersBg from "../../../attached_assets/generated_images/modern_futuristic_workspace.png";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    dept: "Engenharia",
    location: "Remoto / São Paulo",
    salary: "R$ 12.000 - R$ 16.000",
    desc: "Buscamos um desenvolvedor experiente em React, Node.js e arquitetura de microsserviços para liderar projetos críticos.",
    reqs: ["5+ anos de experiência", "React & Node.js", "AWS/Cloud", "Inglês Avançado"]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    dept: "Design",
    location: "Remoto",
    salary: "R$ 8.000 - R$ 11.000",
    desc: "Crie interfaces disruptivas e experiências de usuário memoráveis para nossos produtos globais.",
    reqs: ["Portfólio forte", "Figma Mastery", "Design Systems", "Prototipagem"]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    dept: "Infraestrutura",
    location: "Remoto",
    salary: "R$ 10.000 - R$ 14.000",
    desc: "Automatize pipelines, gerencie clusters Kubernetes e garanta a estabilidade da nossa infraestrutura.",
    reqs: ["Docker & K8s", "CI/CD Pipelines", "Terraform", "Monitoring Tools"]
  },
  {
    id: 4,
    title: "Growth Hacker",
    dept: "Marketing",
    location: "Híbrido / SP",
    salary: "R$ 7.000 - R$ 10.000",
    desc: "Analise dados, crie experimentos e otimize funis de conversão para acelerar nosso crescimento.",
    reqs: ["Data Analytics", "SEO/SEM", "A/B Testing", "Copywriting"]
  },
  {
    id: 5,
    title: "Analista de Redes Sênior",
    dept: "Redes e Telefonia",
    location: "Remoto / São Paulo",
    salary: "R$ 10.000 - R$ 14.000",
    desc: "Gerencie e otimize a infraestrutura de redes corporativas, implemente soluções de telefonia IP e garanta a conectividade segura dos clientes.",
    reqs: ["5+ anos em Redes", "Cisco CCNP", "Telefonia IP/VoIP", "Firewalls e VPNs"]
  },
  {
    id: 6,
    title: "Engenheiro de Telefonia Sênior",
    dept: "Redes e Telefonia",
    location: "Remoto",
    salary: "R$ 11.000 - R$ 15.000",
    desc: "Projete e implemente soluções de telefonia corporativa, PBX em nuvem e integrações com sistemas de comunicação unificada.",
    reqs: ["Asterisk/FreePBX", "SIP/VoIP", "Cloud PBX", "Integrações UC"]
  }
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={careersBg} alt="Office" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Junte-se à Revolução
          </motion.h1>
          <p className="text-xl text-gray-300 mb-8">
            Construa o futuro conosco. Desafios reais, impacto global.
          </p>
          <Button className="bg-primary text-white rounded-full px-8">Ver Vagas Abertas</Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/10 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <div className="p-4">
               <div className="text-3xl mb-2">🚀</div>
               <h3 className="font-bold text-white">Crescimento Acelerado</h3>
             </div>
             <div className="p-4">
               <div className="text-3xl mb-2">🏠</div>
               <h3 className="font-bold text-white">Trabalho Remoto</h3>
             </div>
             <div className="p-4">
               <div className="text-3xl mb-2">🏥</div>
               <h3 className="font-bold text-white">Saúde Completa</h3>
             </div>
             <div className="p-4">
               <div className="text-3xl mb-2">💻</div>
               <h3 className="font-bold text-white">Setup de Ponta</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Vagas Disponíveis</h2>
          
          <div className="space-y-6">
            {jobs.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/10 p-8 rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1 text-green-400"><DollarSign size={14} /> {job.salary}</span>
                    </div>
                  </div>
                  <Button className="shrink-0 bg-white/10 hover:bg-white/20 text-white">
                    Candidatar-se
                  </Button>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{job.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.reqs.map((req, idx) => (
                    <span key={idx} className="px-3 py-1 bg-background border border-white/10 rounded-full text-xs text-gray-400">
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
