import { motion } from "framer-motion";
import { Target, Leaf, Users, Lightbulb, Globe } from "lucide-react";
import Layout from "../components/layout/Layout";
import aboutBg from "../../../attached_assets/generated_images/abstract_geometric_vision_background.png";
import logo from "../../../attached_assets/Logo_1765408032428.png";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={aboutBg} alt="About Background" className="w-full h-full object-cover opacity-30" />
           <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Innova Iusti Logo" 
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto aspect-square object-contain rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_rgba(34,197,94,0.8)] transition-all duration-300" 
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
          >
            Sua Bússola na <span className="text-primary">Transformação Digital</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Assim como uma bússola orienta o navegante em mares desconhecidos, a Innova Iusti guia empresas pelo complexo universo tecnológico, sempre apontando para o norte verdadeiro: seus objetivos de negócio.
          </p>
        </div>
      </section>

      {/* Filosofia da Bússola */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              A Filosofia da Bússola
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nossa logo não é apenas um símbolo — é nossa filosofia. Uma bússola representa orientação, direção e propósito. Em um mercado saturado de soluções genéricas, nós oferecemos algo diferente: <span className="text-primary font-semibold">direcionamento estratégico personalizado</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Norte</h3>
              <p className="text-gray-400 text-sm">Seus objetivos de negócio são nosso destino final</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sul</h3>
              <p className="text-gray-400 text-sm">Inovação como base sólida para cada decisão</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Leste</h3>
              <p className="text-gray-400 text-sm">Sustentabilidade e respeito ao meio ambiente</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Oeste</h3>
              <p className="text-gray-400 text-sm">Pessoas no centro de toda transformação</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVV Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-10 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-display font-bold text-primary mb-6">Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser a bússola tecnológica que orienta empresas em sua jornada digital, conectando inovação aos objetivos de negócio de forma sustentável, ética e alinhada com o futuro do planeta.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-10 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
              <h3 className="text-3xl font-display font-bold text-accent mb-6">Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como a principal referência em consultoria tecnológica sustentável, provando que é possível impulsionar negócios enquanto cuidamos do meio ambiente e das próximas gerações.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-card border border-white/10 p-10 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-display font-bold text-emerald-400 mb-6">Valores</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Orientação Estratégica</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Sustentabilidade Ambiental</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Inovação Responsável</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Transparência e Ética</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Compromisso com Resultados</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="py-20 bg-gradient-to-b from-background to-emerald-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-10 h-10 text-emerald-500" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Tecnologia Verde
                </h2>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Acreditamos que a inovação tecnológica e a preservação ambiental não são forças opostas — são aliadas. Cada solução que desenvolvemos é pensada para minimizar o impacto ambiental e maximizar a eficiência.
                </p>
                <p>
                  Desde a otimização de infraestruturas cloud para reduzir o consumo energético até a implementação de processos paperless e a escolha de parceiros comprometidos com práticas ESG, a sustentabilidade está no DNA de tudo que fazemos.
                </p>
                <p className="text-emerald-400 font-semibold">
                  "Não herdamos a Terra de nossos pais, tomamos emprestado de nossos filhos."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-emerald-500/30 p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-emerald-500 mb-2">100%</div>
                <p className="text-gray-400 text-sm">Operações em Cloud Sustentável</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-emerald-500/30 p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-emerald-500 mb-2">Zero</div>
                <p className="text-gray-400 text-sm">Papel em Processos Internos</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-emerald-500/30 p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-emerald-500 mb-2">-40%</div>
                <p className="text-gray-400 text-sm">Redução de Pegada de Carbono</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-emerald-500/30 p-6 rounded-xl text-center"
              >
                <Globe className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Parceiros com Certificação ESG</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Manifesto Innova Iusti</h2>
           <div className="max-w-4xl mx-auto text-gray-400 space-y-6 text-lg leading-relaxed">
             <p>
               <span className="text-primary font-semibold">Iusti</span> vem do latim e significa "justos". Acreditamos em uma tecnologia justa: que serve ao negócio, respeita as pessoas e protege o planeta.
             </p>
             <p>
               Em um oceano de incertezas digitais, somos a bússola que aponta o caminho certo. Não vendemos tecnologia pela tecnologia — entregamos <span className="text-white font-semibold">direção, propósito e resultados sustentáveis</span>.
             </p>
             <p>
               Nosso compromisso é com a excelência técnica aliada à responsabilidade ambiental. Porque o futuro que construímos hoje é o mundo que deixaremos amanhã.
             </p>
           </div>
        </div>
      </section>
    </Layout>
  );
}
