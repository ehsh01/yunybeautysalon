import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import servicesImage from "@assets/Services-1_1764449487513.png";

export default function Services() {
  const { t } = useLanguage();

  // Cast t to any to access the new properties until TypeScript picks them up or if they are dynamic
  const translations = t as any;

  const services = [
    translations.serviceCutting || "Cutting",
    translations.serviceColor || "Color",
    translations.serviceTreatments || "Treatments"
  ];

  return (
    <section className="pt-24 pb-24 min-h-screen relative overflow-hidden flex flex-col">
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section - Moved left and bigger */}
        <div className="mb-12 text-left max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold tracking-widest text-primary mb-4 pl-4 md:pl-12">
            {t.servicesTitle}
          </h2>
        </div>
        
        {/* Services List - Centered and underlined */}
        <div className="flex flex-col items-center space-y-12 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <span className="text-3xl md:text-5xl font-light uppercase tracking-[0.2em] text-primary cursor-default pb-4 block border-b-2 border-primary/20 hover:border-accent transition-all duration-300">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
