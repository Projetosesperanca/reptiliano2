import { motion } from "framer-motion";
import { Network, Phone, Wifi, Server, ExternalLink, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import networksImg from "../../../attached_assets/generated_images/telecommunications_and_computer_networks_futuristic_visualization.png";

export default function Networks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={networksImg} alt="Networks and Telecom" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Conectividade <span className="text-teal-500">Corporativa</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              O mundo não para, e sua empresa também não pode parar. Infraestrutura de redes de alta performance, segura e sempre disponível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-teal-500/50 transition-colors">
              <Network className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Cabeamento Estruturado Certificado</h3>
              <p className="text-gray-400 mb-4">
                A base de tudo. Projetos de cabeamento Cat6/6A e Fibra Óptica executados com rigor técnico, organização impecável e certificação Fluke para garantir velocidade real.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-teal-500/50 transition-colors">
              <Phone className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Comunicação Unificada (VoIP)</h3>
              <p className="text-gray-400 mb-4">
                Mais que telefone, comunicação. PABX em nuvem integrado ao Teams/CRM, ramais no celular e redução drástica de custos com telefonia tradicional.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-teal-500/50 transition-colors">
              <Wifi className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Wi-Fi Corporativo de Alta Densidade</h3>
              <p className="text-gray-400 mb-4">
                Conexão estável em qualquer lugar. Redes Wi-Fi 6 inteligentes com roaming transparente, ideais para escritórios cheios, galpões logísticos e eventos.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-teal-500/50 transition-colors">
              <Globe className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">SD-WAN & Interconexão</h3>
              <p className="text-gray-400 mb-4">
                Suas filiais operando como uma só. Gerenciamento inteligente de links de internet, priorização de tráfego crítico e VPNs seguras site-to-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Banner */}
      <section className="py-16 bg-teal-900/10 border-y border-teal-500/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center animate-pulse">
                <Server className="w-10 h-10 text-teal-500" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-white">Infraestrutura Crítica</h3>
               <p className="text-gray-400">Garantia de uptime e redundância para operações que não podem parar.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
         <h2 className="text-3xl font-bold text-white mb-8">Conecte sua empresa ao mundo</h2>
         <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 h-12"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Falar com Engenheiro de Redes <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
      </section>
    </Layout>
  );
}
