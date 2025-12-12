import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import heroImage from "@assets/Yuny-Main_1764502456223.png";
import { useLocation } from "wouter";

export default function Home() {
  const { t } = useLanguage();
  const [_, setLocation] = useLocation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <SEO 
        title="YUNY Beauty Salon | Bristol, TN" 
        description="Professional hair salon in Bristol, TN offering cutting, coloring, balayage, and luxury hair treatments. Book your appointment today."
        image={heroImage}
      />
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
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] mb-4"
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
          onClick={() =>
            window.open(
              "https://square.site/book/LDS7Z0YYKSKAZ/qdhoqrnshqclrg",
              "_blank",
            )
          }
          className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold cursor-pointer"
        >
          {t.heroBookButton}
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href="https://www.instagram.com/yuny_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
            <span className="sr-only">Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
