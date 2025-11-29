import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import servicesImage from "@assets/Services-1_1764449487513.png";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-primary mb-4">
            {t.servicesTitle}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: t.servicesHair, desc: t.servicesHairDesc },
            { title: t.servicesColor, desc: t.servicesColorDesc },
            { title: t.servicesNails, desc: t.servicesNailsDesc },
            { title: t.servicesMakeup, desc: t.servicesMakeupDesc },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow border border-white hover:border-accent/20 group"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
