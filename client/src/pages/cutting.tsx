import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import cuttingImage from "@assets/Cutting_1764452336239.png";

export default function Cutting() {
  const { t } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cuttingImage}
          alt="Cutting Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-primary mb-8"
        >
          {translations.cuttingTitle || "Cutting Services"}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto mb-12" 
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-primary/80 leading-relaxed font-light"
        >
          {translations.cuttingText || "Precision cuts tailored to your face shape and lifestyle."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
             <button
            onClick={() => window.location.href = "/book"}
            className="bg-primary text-white hover:bg-accent transition-colors px-8 py-4 text-sm uppercase tracking-widest font-bold shadow-lg"
          >
            {t.bookButtonMain}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
