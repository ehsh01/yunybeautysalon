import { useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import heroImage from "@assets/image_1764436423928.png";
import aboutImage from "@assets/image_1764436473880.png";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className={`text-2xl font-bold tracking-widest uppercase cursor-pointer ${
              !isScrolled && "text-white drop-shadow-md"
            } ${isScrolled && "text-primary"}`}
            onClick={() => scrollToSection("home")}
          >
            RIK RAK
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "book"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors ${
                  !isScrolled ? "text-white drop-shadow-sm" : "text-foreground"
                }`}
              >
                {item === "home" && t.navHome}
                {item === "about" && t.navAbout}
                {item === "services" && t.navServices}
                {item === "book" && t.navBook}
              </button>
            ))}
            
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 text-sm font-medium uppercase border px-3 py-1 rounded-full transition-colors ${
                !isScrolled 
                  ? "text-white border-white/50 hover:bg-white/10" 
                  : "text-foreground border-foreground/20 hover:border-accent hover:text-accent"
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>{lang === "en" ? "ES" : "EN"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className={`text-sm font-bold uppercase ${
                !isScrolled ? "text-white" : "text-foreground"
              }`}
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={!isScrolled ? "text-white" : "text-foreground"}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {["home", "about", "services", "book"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-lg font-medium uppercase tracking-wider text-foreground hover:text-accent"
                  >
                    {item === "home" && t.navHome}
                    {item === "about" && t.navAbout}
                    {item === "services" && t.navServices}
                    {item === "book" && t.navBook}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] mb-4"
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
            onClick={() => window.open("https://squareup.com/appointments/book/YOUR_SQUARE_LINK", "_blank")}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm uppercase tracking-widest font-semibold"
          >
            {t.heroBookButton}
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={aboutImage}
                  alt="About Us"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-1/2 bg-muted -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-widest text-primary">
                {t.aboutTitle}
              </h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              <p className="text-muted-foreground leading-loose text-lg font-light">
                {t.aboutText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-accent/20 group"
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

      {/* Book Section */}
      <section id="book" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-bold tracking-widest mb-4">RIK RAK</h4>
              <p className="text-white/60 font-light text-sm uppercase tracking-wider">Salon | Boutique</p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm font-light text-white/80">
              <p>{t.footerAddress}</p>
              <p>{t.footerHours}</p>
            </div>

            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-widest">
            {t.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}