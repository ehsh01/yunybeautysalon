import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleLang = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const navItems = [
    { href: "/", label: t.navHome },
    { href: "/about", label: t.navAbout },
    { href: "/book", label: t.navBook },
    { href: "/services", label: t.navServices },
  ];

  // Determine if we are on a page that needs transparent/white header
  const isTransparentPage = location === "/";

  const headerBgClass = "absolute bg-transparent py-6";

  const textColorClass = isTransparentPage
    ? "text-white drop-shadow-md"
    : "text-black";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav
        className={`top-0 w-full z-50 transition-all duration-300 ${headerBgClass} py-4 md:py-6`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <div
              className={`text-2xl font-light tracking-widest uppercase cursor-pointer ${
                isTransparentPage ? "text-white drop-shadow-md" : "text-black"
              }`}
            >
              {/* Logo removed */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors ${
                  isTransparentPage
                    ? "text-white drop-shadow-sm"
                    : "text-black font-bold"
                } ${location === item.href ? "text-accent underline underline-offset-4" : ""}`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 text-sm font-medium uppercase border px-3 py-1 rounded-full transition-colors ${
                isTransparentPage
                  ? "text-white border-white/50 hover:bg-white/10"
                  : "text-black border-black/20 hover:border-accent hover:text-accent font-bold"
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>{language === "en" ? "Español" : "English"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className={`text-sm font-bold uppercase ${textColorClass}`}
            >
              {language === "en" ? "Español" : "English"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={textColorClass}
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
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="text-left text-lg font-medium uppercase tracking-wider text-foreground hover:text-accent block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-white text-foreground py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-2xl font-light tracking-widest mb-2 text-primary">
                  YUNY
                </h4>
                <p className="text-black font-medium text-sm uppercase tracking-wider">
                  Beauty Salon
                </p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                {/* Social placeholders */}
                <a
                  href="https://www.instagram.com/yuny_beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer"
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
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer">
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
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium text-primary">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1042+Old+Jonesboro+Rd,+Bristol,+TN+37620" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {t.footerAddress}
              </a>
              <a href="tel:7864368830" className="hover:text-accent transition-colors">
                {(t as any).footerPhone || "786-436-8830"}
              </a>
              <p>{t.footerHours}</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-primary uppercase tracking-widest font-medium">
            {t.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
