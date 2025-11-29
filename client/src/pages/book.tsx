import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

export default function Book() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-widest text-primary"
        >
          {t.bookTitle}
        </motion.h2>
        <p className="text-muted-foreground text-lg mb-10 font-light">
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
        <p className="mt-6 text-xs text-muted-foreground uppercase tracking-wider opacity-60">
          Secure booking via Square
        </p>
      </div>
    </section>
  );
}
