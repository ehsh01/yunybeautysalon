import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import bookingImage from "@assets/Booking-page_1764446093034.png";

export default function Book() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bookingImage}
          alt="Booking Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-widest text-primary"
        >
          {t.bookTitle}
        </motion.h2>
        <p className="text-primary text-lg mb-10 font-light">
          {t.bookText}
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open("https://squareup.com/appointments/book/YOUR_SQUARE_LINK", "_blank")}
          className="bg-primary text-white hover:bg-accent transition-colors px-10 py-5 text-sm uppercase tracking-widest font-bold shadow-lg"
        >
          {t.bookButtonMain}
        </motion.button>
        <p className="mt-6 text-xs text-primary uppercase tracking-wider opacity-60">
          Secure booking via Square
        </p>
      </div>
    </section>
  );
}
