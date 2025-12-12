import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import cuttingImage from "@assets/Cutting_1764503911117.png";
import { useLocation } from "wouter";

export default function Cutting() {
  const { t } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;
  const [_, setLocation] = useLocation();

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col items-center">
      <SEO
        title="Hair Cutting & Styling | YUNY Beauty Salon"
        description="Precision haircuts for women and men in Bristol, TN. Includes wash, blow-dry, and styling options."
        image={cuttingImage}
      />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cuttingImage}
          alt="Cutting Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-left w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-primary mb-8"
        >
          {translations.cuttingTitle || "Cutting"}
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
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-primary font-light italic mb-8">
            {translations.cuttingSubtitle ||
              "All cuts include wash and blow-dry."}
          </p>

          <div className="space-y-4 mb-12">
            {[
              translations.cutWomen || "Women’s Cut",
              translations.cutBangTrim || "Bang Trim",
              translations.cutMen || "Men’s Cut",
              translations.cutButterfly || "Butterfly Cut",
              translations.cutBob || "Bob Cut",
              translations.cutLayered || "Layered Cut",
              translations.cutBlowDry || "Blow-Dry",
            ].map((item, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-primary font-medium tracking-wide"
              >
                {item}
              </p>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-light tracking-widest text-primary mb-4">
            {translations.cuttingExtras || "Extras"}
          </h3>
          <p className="text-lg md:text-xl text-primary font-medium tracking-wide">
            {translations.cutFlatIron || "Flat Iron | Curls"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={() =>
              window.open(
                "https://square.site/book/LDS7Z0YYKSKAZ/qdhoqrnshqclrg",
                "_blank",
              )
            }
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-none hover:shadow-lg"
          >
            {t.bookButtonMain}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
