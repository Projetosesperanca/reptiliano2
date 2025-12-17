import { motion } from "framer-motion";
import { CheckCircle, Code, Database, Globe, Smartphone, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import devImg from "../../../attached_assets/generated_images/software_development_holographic_code_concept.png";

export default function Development() {
  return (
    <Layout>
      {/* SEO Meta Tags would go here with Helmet */}
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={devImg} alt="Software Development" className="w-full h-full object-cover opacity-50" />
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
              Engenharia de <span className="text-primary">Software</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transformamos ideias complexas em ativos digitais de alta performance. Sistemas robustos, escaláveis e seguros, desenhados para sustentar o crescimento do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Sistemas Web Corporativos</h3>
                <p className="text-gray-400">
                  Dashboards administrativos, portais de autoatendimento e plataformas SaaS desenvolvidas com arquiteturas modernas (Microservices/Serverless) para garantir alta disponibilidade.
                </p>
              </div>
              <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Mobilidade Corporativa</h3>
                <p className="text-gray-400">
                  Apps nativos e cross-platform (React Native/Flutter) que aumentam a produtividade da equipe de campo e engajam seus clientes, com foco total em UX/UI.
                </p>
              </div>
            </div>
            <div className="space-y-8 mt-0 md:mt-12">
              <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">APIs & Integrações</h3>
                <p className="text-gray-400">
                  Conecte seu ecossistema. Desenvolvemos APIs RESTful e GraphQL seguras para integrar ERPs, CRMs, Gateways de Pagamento e serviços de terceiros.
                </p>
              </div>
              <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Modernização de Legado</h3>
                <p className="text-gray-400">
                  Reduza riscos e custos operacionais. Refatoramos e migramos sistemas antigos para tecnologias atuais, melhorando a segurança e a manutenibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Nossa Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Flutter"].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-background border border-white/10 rounded-full text-gray-300 font-mono text-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-emerald-900/20 border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tem um projeto em mente?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos transformar sua ideia em realidade com tecnologia de ponta.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 neon-glow"
                onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
              >
                Solicitar Orçamento <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
