import { motion } from "framer-motion";
import { BarChart, Target, Share2, Search, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/layout/Layout";
import mktImg from "../../../attached_assets/generated_images/digital_marketing_network_visualization.png";

export default function Marketing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={mktImg} alt="Digital Marketing" className="w-full h-full object-cover opacity-50" />
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
              Marketing de <span className="text-accent">Performance</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Não buscamos apenas likes, buscamos receita. Estratégias de Growth Hacking e Marketing Digital focadas em ROI positivo e aquisição de clientes qualificados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-accent/50 transition-colors group">
              <Search className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Tráfego Pago & SEO</h3>
              <p className="text-gray-400 leading-relaxed">
                Domine o Google e as Redes Sociais. Campanhas de alta performance (Google Ads, Meta Ads) e otimização orgânica para atrair quem realmente quer comprar.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-accent/50 transition-colors group">
              <Share2 className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Branding & Social</h3>
              <p className="text-gray-400 leading-relaxed">
                Construção de autoridade digital. Posicionamento de marca estratégico e gestão de comunidades para transformar seguidores em defensores da marca.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-xl hover:border-accent/50 transition-colors group">
              <Target className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Inbound & CRM</h3>
              <p className="text-gray-400 leading-relaxed">
                Máquina de vendas automática. Nutrição de leads, email marketing e automação de fluxos para aumentar a taxa de conversão do seu time comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Foco Total em <span className="text-accent">ROI</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Não fazemos apenas "posts bonitos". Criamos ecossistemas de vendas que geram resultados mensuráveis.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><TrendingUp size={14} className="text-accent" /></div>
                  Aumento de tráfego qualificado
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><TrendingUp size={14} className="text-accent" /></div>
                  Otimização de Taxa de Conversão (CRO)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><TrendingUp size={14} className="text-accent" /></div>
                  Dashboards em tempo real
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
               <div className="relative z-10 bg-card border border-white/10 rounded-xl p-6 shadow-2xl">
                 <div className="flex justify-between items-center mb-8">
                   <div>
                     <p className="text-sm text-gray-400">Total Receita</p>
                     <p className="text-3xl font-bold text-white">R$ 1.2M</p>
                   </div>
                   <div className="text-accent text-sm font-bold bg-accent/10 px-3 py-1 rounded-full">+128%</div>
                 </div>
                 <div className="h-40 flex items-end gap-2">
                    {[40, 65, 45, 80, 95, 75, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-accent/20 to-accent rounded-t-sm hover:opacity-80 transition-opacity" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
               </div>
               <div className="absolute top-10 -right-10 w-full h-full bg-accent/5 rounded-xl -z-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Quer escalar suas vendas?</h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-background font-bold rounded-full px-8 h-12"
            onClick={() => window.open("https://wa.me/5511987475687", "_blank")}
          >
            Fale com um Consultor <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
