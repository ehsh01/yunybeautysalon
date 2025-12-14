import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import colorImage from "@assets/hair-coloring-services.webp";
import { useLocation } from "wouter";

export default function Color() {
  const { t, language } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;
  const [_, setLocation] = useLocation();

  const getPath = (path: string) => {
    return language === 'es' ? `/es${path}` : path;
  };

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
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full text-left bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-5xl mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-primary mb-4"
        >
          {translations.colorH1 || translations.colorTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-light text-primary/80 mb-8 max-w-3xl leading-relaxed"
        >
          {translations.colorDesc}
        </motion.p>

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
          className="text-primary space-y-2 mb-12"
        >
          <h2 className="sr-only">Color Services List</h2>
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

          <div className="h-px bg-primary/30 w-full max-w-md my-8"></div>

          <h3 className="text-xl font-medium uppercase tracking-widest">
            {translations.colorCorrection}
          </h3>
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
            onClick={() => setLocation(getPath("/book"))}
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-none hover:shadow-lg"
          >
            {t.bookButtonMain}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
