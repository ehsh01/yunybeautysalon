import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { Link } from "wouter";
import servicesImage from "@assets/Services-1_1764449487513.png";

export default function Services() {
  const { t } = useLanguage();

  // Cast t to any to access the new properties until TypeScript picks them up or if they are dynamic
  const translations = t as any;

  const services = [
    { name: translations.serviceCutting || "Cutting", href: "/services/cutting" },
    { name: translations.serviceColor || "Color", href: "/services/color" },
    { name: translations.serviceTreatments || "Treatments", href: "/services/treatments" }
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesImage}
          alt="Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section - Centered */}
        <div className="mb-12 text-center w-full mt-12">
          <h2 className="text-5xl md:text-7xl font-light tracking-widest text-white mb-4">
            {t.servicesTitle}
          </h2>
        </div>
        
        {/* Services List - Centered and underlined, moved further down */}
        <div className="flex flex-col items-center space-y-12 mt-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link href={service.href}>
                <span className="text-2xl md:text-4xl font-light uppercase tracking-[0.2em] text-white cursor-pointer pb-3 block border-b border-white/40 hover:border-white transition-all duration-300 drop-shadow-md">
                  {service.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
