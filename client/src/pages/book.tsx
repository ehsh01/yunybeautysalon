import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import bookingImage from "@assets/Booking-page-last_1764446873576.png";

export default function Book() {
  const { t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script is already there to prevent duplicates
    if (document.querySelector('script[src="https://square.site/appointments/buyer/widget/qdhoqrnshqclrg/LDS7Z0YYKSKAZ.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://square.site/appointments/buyer/widget/qdhoqrnshqclrg/LDS7Z0YYKSKAZ.js";
    script.async = true;
    
    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      // Cleanup: remove the script and potentially the iframe if the script added one globally
      // Note: Square widget might inject elements outside our ref. 
      // We try to remove the script we added.
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-24 min-h-screen flex items-start justify-center relative overflow-hidden">
      <SEO
        title="Book Appointment | YUNY Beauty Salon"
        description="Book your appointment at YUNY Beauty Salon in Bristol, TN. Call 786-436-8830 or book online."
        image={bookingImage}
      />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bookingImage}
          alt="Booking Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 tracking-widest text-black whitespace-normal md:whitespace-nowrap"
        >
          {t.bookTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <a 
            href="tel:7864368830"
            className="text-lg md:text-xl text-black font-medium tracking-wide hover:text-accent transition-colors"
          >
            {(t as any).callAction || "Call 786-436-8830"}
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="bg-white p-4 rounded-lg shadow-xl min-h-[600px]"
        >
           {/* Container for Square Widget */}
           <div ref={widgetRef} className="w-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
