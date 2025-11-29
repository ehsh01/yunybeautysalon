import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import aboutImage from "@assets/Yuny-3_1764442795806.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Column (Moved to Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-widest text-primary">
              {t.aboutTitle}
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-primary leading-loose text-lg font-light">
              {t.aboutText}
            </p>
          </motion.div>

          {/* Image Column (Moved to Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 h-1/2 bg-muted -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
