import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import servicesImage from "@assets/Services-1_1764449487513.png";

export default function Services() {
  const { t } = useLanguage();

  // Cast t to any to access the new properties until TypeScript picks them up or if they are dynamic
  // In a real scenario, we'd update the type definition, but for this quick iteration:
  const translations = t as any;

  const services = [
    translations.serviceCutting || "Cutting",
    translations.serviceColor || "Color",
    translations.serviceTreatments || "Treatments"
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesImage}
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-primary mb-4">
            {t.servicesTitle}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl md:text-4xl font-light uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors cursor-default"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
