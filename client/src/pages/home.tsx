import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import heroImage from "@assets/Redheadmodel-main_1764440271238.png";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Salon Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] mb-4"
        >
          {t.heroTitle}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light tracking-[0.3em] mb-12 uppercase"
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onClick={() => window.location.href = "/book"}
          className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold cursor-pointer"
        >
          {t.heroBookButton}
        </motion.button>
      </div>
    </section>
  );
}
