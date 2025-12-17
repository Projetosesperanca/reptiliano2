import { motion } from "framer-motion";
import { Brain, Database, LineChart, Network, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import biImg from "../../../attached_assets/generated_images/business_intelligence_ai_neural_network.png";

export default function BI() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={biImg} alt="Business Intelligence" className="w-full h-full object-cover opacity-50" />
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
              Inteligência de <span className="text-lime-500">Dados</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Chega de achismos. Transformamos terabytes de dados brutos em estratégias claras. Preveja o futuro, entenda o presente e corrija o passado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                O poder dos dados na sua mão
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Nossas soluções de BI integram dados de todas as áreas da sua empresa para criar uma visão 360º do seu negócio. Preveja tendências, identifique gargalos e otimize processos.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/20 flex items-center justify-center shrink-0">
                    <Database className="text-lime-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Engenharia de Dados</h3>
                    <p className="text-gray-500 text-sm">Construção de Data Lakes e Pipelines de ETL robustos para centralizar a verdade da sua empresa.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/20 flex items-center justify-center shrink-0">
                    <LineChart className="text-lime-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Visualização Estratégica</h3>
                    <p className="text-gray-500 text-sm">Dashboards em Power BI/Tableau que respondem perguntas de negócio em segundos, não dias.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/20 flex items-center justify-center shrink-0">
                    <Brain className="text-lime-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">IA e Predição</h3>
                    <p className="text-gray-500 text-sm">Modelos de Machine Learning para prever churn, demanda de estoque e tendências de mercado.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
               {/* Abstract Visualization Component */}
               <div className="aspect-square rounded-full border border-lime-500/20 relative animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full border border-lime-500/40"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-lime-500/10 blur-xl"></div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">98%</div>
                    <div className="text-lime-500 text-sm uppercase tracking-widest">Precisão</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-secondary/10">
         <h2 className="text-3xl font-bold text-white mb-8">Comece a usar dados a seu favor</h2>
         <Button 
            size="lg" 
            className="bg-lime-500 hover:bg-lime-600 text-background font-bold rounded-full px-8 h-12"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Consultoria de Dados <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
      </section>
    </Layout>
  );
}
