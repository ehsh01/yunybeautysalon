import React from "react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import bookingImage from "@assets/Booking-page-last_1764446873576.png";
import { Link } from "wouter";

export default function Book() {
  const { t } = useLanguage();
  const translations = t as any;

  return (
    <section className="pt-32 pb-24 min-h-screen flex flex-col items-center relative overflow-hidden">
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
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 tracking-widest text-black whitespace-normal md:whitespace-nowrap"
        >
          {t.bookTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <p className="text-lg text-black/80 font-light leading-relaxed mb-6">
            {translations.bookIntro}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-widest mb-8">
             <span className="text-black/60">{translations.bookServicesTitle}:</span>
             <Link href="/services/cutting" className="text-black border-b border-black/30 hover:border-black transition-colors">{translations.bookServiceCut}</Link>
             <span className="text-black/30">|</span>
             <Link href="/services/color" className="text-black border-b border-black/30 hover:border-black transition-colors">{translations.bookServiceColor}</Link>
             <span className="text-black/30">|</span>
             <Link href="/services/treatments" className="text-black border-b border-black/30 hover:border-black transition-colors">{translations.bookServiceTreatments}</Link>
          </div>
        </motion.div>

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
           className="bg-white p-4 rounded-lg shadow-xl min-h-[600px] flex justify-center mb-16"
        >
           {/* Direct Iframe Embed to prevent redirect breakouts */}
           <iframe 
             src="https://app.squareup.com/appointments/buyer/widget/qdhoqrnshqclrg/LDS7Z0YYKSKAZ"
             style={{ width: '100%', height: '800px', border: 'none', minHeight: '500px' }}
             allow="payment app.squareup.com"
             sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
             title="Square Booking Widget"
           />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-12 text-left max-w-3xl mx-auto border-t border-black/10 pt-12"
        >
          <div>
            <h3 className="text-xl font-medium tracking-widest uppercase mb-4 text-black">{translations.bookPolicyTitle}</h3>
            <p className="text-black/70 font-light leading-relaxed">
              {translations.bookPolicyText}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-widest uppercase mb-4 text-black">{translations.bookLocationTitle}</h3>
            <p className="text-black/70 font-light leading-relaxed">
              {translations.bookLocationText}
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=1042+Old+Jonesboro+Rd,+Bristol,+TN+37620" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest border-b border-black/30 hover:border-black inline-block mt-4 transition-colors text-black"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
