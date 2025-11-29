import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import colorImage from "@assets/Colors_1764454734787.png";

export default function Color() {
  const { t } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={colorImage}
          alt="Color Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full text-right">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-primary mb-8"
        >
          {translations.colorTitle || "Color"}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent ml-auto mb-12" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
            <button
            onClick={() => window.location.href = "/book"}
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-none hover:shadow-lg"
          >
            {t.bookButtonMain}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
