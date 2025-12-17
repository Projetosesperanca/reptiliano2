import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5511987475687"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 z-[100] flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] shadow-lg cursor-pointer"
      style={{
        boxShadow: "0 0 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.4), 0 0 60px rgba(37, 211, 102, 0.2)"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.4), 0 0 60px rgba(37, 211, 102, 0.2)",
          "0 0 30px rgba(37, 211, 102, 0.8), 0 0 60px rgba(37, 211, 102, 0.6), 0 0 90px rgba(37, 211, 102, 0.4)",
          "0 0 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.4), 0 0 60px rgba(37, 211, 102, 0.2)",
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      data-testid="whatsapp-float-button"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
      <span className="text-white font-semibold text-sm whitespace-nowrap" style={{ textShadow: "1px 1px 0 #166534, -1px -1px 0 #166534, 1px -1px 0 #166534, -1px 1px 0 #166534" }}>Fale pelo WhatsApp</span>
    </motion.a>
  );
}
