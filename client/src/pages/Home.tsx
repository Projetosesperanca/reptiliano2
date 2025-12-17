import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import { Link } from "wouter";

// Assets
import heroBg from "../../../attached_assets/generated_images/futuristic_tech_abstract_background_with_neon_trails.png";
import devImg from "../../../attached_assets/generated_images/software_development_holographic_code_concept.png";
import mktImg from "../../../attached_assets/generated_images/digital_marketing_network_visualization.png";
import infraImg from "../../../attached_assets/generated_images/server_room_infrastructure_with_blue_leds.png";
import biImg from "../../../attached_assets/generated_images/business_intelligence_ai_neural_network.png";
import processImg from "../../../attached_assets/generated_images/business_process_automation_flowchart_futuristic.png";
import networksImg from "../../../attached_assets/generated_images/telecommunications_and_computer_networks_futuristic_visualization.png";

const services = [
  {
    id: "dev",
    title: "Desenvolvimento de Sistemas",
    desc: "Software sob medida, aplicativos móveis e sistemas web de alta performance.",
    image: devImg,
    href: "/desenvolvimento",
    color: "border-primary/50"
  },
  {
    id: "mkt",
    title: "Marketing Digital",
    desc: "Estratégias baseadas em dados para escalar sua presença digital.",
    image: mktImg,
    href: "/marketing",
    color: "border-accent/50"
  },
  {
    id: "infra",
    title: "Infraestrutura Cloud",
    desc: "Arquiteturas escaláveis, seguras e otimizadas para o seu negócio.",
    image: infraImg,
    href: "/infraestrutura",
    color: "border-emerald-500/50"
  },
  {
    id: "bi",
    title: "Business Intelligence",
    desc: "Transforme dados em decisões estratégicas com IA e Analytics.",
    image: biImg,
    href: "/bi",
    color: "border-lime-500/50"
  },
  {
    id: "bpm",
    title: "Gestão de Processos",
    desc: "Análise, melhoria e automação para máxima eficiência operacional.",
    image: processImg,
    href: "/processos",
    color: "border-green-500/50"
  },
  {
    id: "networks",
    title: "Redes e Telefonia",
    desc: "Conectividade, telefonia IP e infraestrutura de rede corporativa.",
    image: networksImg,
    href: "/redes",
    color: "border-teal-500/50"
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-mono mb-4 tracking-widest text-xs sm:text-sm uppercase">Inovação Estratégica</h2>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight px-2">
              Tecnologia que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-accent">
                Impulsiona Resultados
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Não somos apenas uma empresa de tecnologia. Somos seu parceiro estratégico na jornada de transformação digital, entregando soluções que geram valor real e mensurável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ecossistema de Soluções</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Uma abordagem holística para cobrir todas as necessidades tecnológicas do seu negócio, da infraestrutura à inteligência de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={service.id} href={service.href} className="block group h-full">
                <motion.div 
                  className={`h-full bg-card border ${service.color} rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 flex flex-col`}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{service.desc}</p>
                    <div className="flex items-center text-primary text-sm font-medium mt-auto">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Por que escolher a <span className="text-primary">Innova Iusti</span>?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expertise Técnica Comprovada</h3>
                    <p className="text-gray-400">Nossa equipe é formada por especialistas seniores com vivência em projetos críticos e tecnologias de ponta.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-xl">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visão de Negócio 360º</h3>
                    <p className="text-gray-400">Não entregamos apenas código ou configurações. Entendemos seu modelo de negócio para propor soluções que impactam o bottom line.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 font-bold text-xl">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compromisso com a Entrega</h3>
                    <p className="text-gray-400">Metodologias ágeis e comunicação transparente garantem que seus projetos sejam entregues no prazo e com a qualidade esperada.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative z-10">
                <img src={heroBg} alt="Technology" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-accent/5 rounded-2xl -z-0 border border-white/5"></div>
              <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-primary/5 rounded-2xl -z-0 border border-white/5"></div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
