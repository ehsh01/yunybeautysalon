import React from "react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import bookingImage from "@assets/Booking-page-last_1764446873576.png";

export default function Book() {
  const { t } = useLanguage();

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
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 tracking-widest text-black whitespace-normal md:whitespace-nowrap"
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

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            window.open(
              "https://square.site/book/LDS7Z0YYKSKAZ/qdhoqrnshqclrg",
              "_blank",
            )
          }
          className="bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-10 py-5 text-sm uppercase tracking-widest font-semibold shadow-none hover:shadow-lg"
        >
          {t.bookButtonMain}
        </motion.button>
      </div>
    </section>
  );
}
