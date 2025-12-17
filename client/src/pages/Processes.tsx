import { motion } from "framer-motion";
import { Workflow, Settings, Zap, BarChart, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import processImg from "../../../attached_assets/generated_images/business_process_automation_flowchart_futuristic.png";

export default function Processes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={processImg} alt="Process Optimization" className="w-full h-full object-cover opacity-50" />
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
              Excelência <span className="text-green-500">Operacional</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Elimine o caos. Mapeamos, padronizamos e automatizamos seus fluxos de trabalho para que sua empresa funcione como um relógio suíço.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-green-500/50 transition-colors">
              <Workflow className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Mapeamento de Processos</h3>
              <p className="text-gray-400 mb-4">
                Entendemos como sua empresa funciona. Documentamos o "AS-IS" (como é) e desenhamos o "TO-BE" (como deve ser) para máxima fluidez e clareza de responsabilidades.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-green-500/50 transition-colors">
              <Settings className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Lean & Six Sigma</h3>
              <p className="text-gray-400 mb-4">
                Caça aos desperdícios. Aplicamos metodologias consagradas para reduzir variabilidade, eliminar retrabalho e garantir qualidade consistente.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-green-500/50 transition-colors">
              <Zap className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Automação Inteligente (RPA)</h3>
              <p className="text-gray-400 mb-4">
                Deixe os robôs trabalharem. Automatizamos tarefas repetitivas (cadastro, emissão de notas, conciliação) para liberar seu time para pensar estrategicamente.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-green-500/50 transition-colors">
              <RefreshCw className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Digitalização de Workflows</h3>
              <p className="text-gray-400 mb-4">
                Adeus papel e planilhas soltas. Implementamos plataformas de BPMS e Low-Code para orquestrar suas aprovações e solicitações em um único lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-900/10 border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Impacto nos Negócios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">-30%</div>
              <p className="text-gray-400">Custos Operacionais</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">+45%</div>
              <p className="text-gray-400">Produtividade da Equipe</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">Zero</div>
              <p className="text-gray-400">Erros em Tarefas Repetitivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
         <h2 className="text-3xl font-bold text-white mb-8">Otimize sua operação hoje</h2>
         <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Falar com Consultor de Processos <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
      </section>
    </Layout>
  );
}
