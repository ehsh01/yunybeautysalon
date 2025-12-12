import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import treatmentsImage from "@assets/Treatments_1764509494529.png";
import { useLocation } from "wouter";

export default function Treatments() {
  const { t } = useLanguage();
  // Cast t to any to access new properties
  const translations = t as any;
  const [_, setLocation] = useLocation();

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col items-center">
      <SEO
        title="Hair Treatments | YUNY Beauty Salon"
        description="Revitalize your hair with our luxury treatments including Kerastase, Brazilian Blowout, Olaplex, and more."
        image={treatmentsImage}
      />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={treatmentsImage}
          alt="Treatments Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-primary mb-8"
        >
          {/* Replaced "Hair Treatments" with "Treatments" and removed text below as requested */}
          {translations.serviceTreatments || "Treatments"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent mb-12"
        />

        {/* Text paragraph removed as requested */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-primary space-y-4 mb-12"
        >
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentFusio}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentChronologiste}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentBrazilian}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentOlaplex}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentDeep}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentKeratin}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentSurgery}
          </p>
          <p className="text-lg font-light uppercase tracking-wider">
            {translations.treatmentBotox}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
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
