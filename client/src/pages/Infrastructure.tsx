import { motion } from "framer-motion";
import { Server, Shield, Cloud, Cpu, ExternalLink, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import infraImg from "../../../attached_assets/generated_images/server_room_infrastructure_with_blue_leds.png";

export default function Infrastructure() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={infraImg} alt="Infrastructure" className="w-full h-full object-cover opacity-50" />
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
              Infraestrutura <span className="text-emerald-500">Crítica</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Base sólida para operação contínua. Projetamos ambientes Cloud e On-Premise focados em resiliência, segurança e otimização de custos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-emerald-500/50 transition-colors">
              <Cloud className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Cloud & FinOps</h3>
              <p className="text-gray-400 mb-4">
                Migração inteligente e gestão de multicloud (AWS, Azure, GCP). Foco total em elasticidade e controle de custos (FinOps) para maximizar o investimento.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Arquitetura Serverless</li>
                <li>• Redução de Custos Cloud</li>
                <li>• Alta Disponibilidade</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-emerald-500/50 transition-colors">
              <Shield className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Segurança Ofensiva & Defensiva</h3>
              <p className="text-gray-400 mb-4">
                Blindagem completa dos seus dados. Atuamos com Pentests recorrentes, implementação de SOC e adequação total à LGPD/GDPR.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Testes de Intrusão</li>
                <li>• Monitoramento de Ameaças</li>
                <li>• Conformidade Legal</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-emerald-500/50 transition-colors">
              <Server className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">DevOps & Automação</h3>
              <p className="text-gray-400 mb-4">
                Acelere seus deploys. Implementamos pipelines de CI/CD robustos e Infraestrutura como Código (IaC) para garantir entregas rápidas e sem falhas.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Terraform & Ansible</li>
                <li>• Kubernetes & Docker</li>
                <li>• Observabilidade (Grafana/ELK)</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-emerald-500/50 transition-colors">
              <Cpu className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">NOC 24/7</h3>
              <p className="text-gray-400 mb-4">
                Sua operação não para. Monitoramento proativo de incidentes e suporte técnico especializado para garantir SLA de 99.9%.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Resposta a Incidentes</li>
                <li>• Monitoramento Full-Stack</li>
                <li>• Planos de Disaster Recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-16 bg-emerald-900/10 border-y border-emerald-500/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                <Lock className="w-10 h-10 text-emerald-500" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-white">Segurança em Primeiro Lugar</h3>
               <p className="text-gray-400">Seus dados protegidos com criptografia de ponta a ponta.</p>
             </div>
          </div>
          <Button 
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Agendar Diagnóstico de Segurança
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
         <h2 className="text-3xl font-bold text-white mb-8">Construa uma base sólida</h2>
         <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Falar com Especialista Cloud <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
      </section>
    </Layout>
  );
}
