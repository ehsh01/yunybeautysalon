import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import colorImage from "@assets/Color-sharper_1764508389206.png";
import { useLocation } from "wouter";

export default function Color() {
  const { t } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;
  const [_, setLocation] = useLocation();

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col items-center">
      <SEO
        title="Hair Color Services | YUNY Beauty Salon"
        description="Expert hair coloring services in Bristol, TN. Balayage, highlights, color correction, and more."
        image={colorImage}
      />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={colorImage}
          alt="Color Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-white mb-8"
        >
          {translations.colorTitle || "Color"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white space-y-2 mb-12"
        >
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorBase}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorFull}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorBalayage}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorPartialHighlights}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorFullHighlights}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorLowlights}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorGloss}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorPlatinum}
          </p>
          <p className="text-lg font-light tracking-wider">
            {translations.colorBlondes}
          </p>
          <p className="text-lg font-light tracking-wider">
            {translations.colorBrunette}
          </p>
          <p className="text-lg font-light tracking-wider">
            {translations.colorReds}
          </p>

          <p className="text-sm font-light italic mt-6 opacity-90 max-w-md">
            {translations.colorDisclaimer1}
          </p>

          <div className="h-px bg-white/30 w-full max-w-md my-8"></div>

          <p className="text-xl font-medium uppercase tracking-widest">
            {translations.colorCorrection}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.colorConsultation}
          </p>

          <p className="text-sm font-light italic mt-2 opacity-90 max-w-md">
            {translations.colorDisclaimer2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={() => setLocation("/book")}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-none hover:shadow-lg"
          >
            {t.bookButtonMain}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
