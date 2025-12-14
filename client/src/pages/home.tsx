import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import { Helmet } from "react-helmet-async";
import heroImage from "@assets/Yuny-Main_1764502456223.png";
import { useLocation, Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();
  const [_, setLocation] = useLocation();
  const translations = t as any;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "YUNY Beauty Salon",
    "image": "https://yunybeautysalon.com/attached_assets/Yuny-Main_1764502456223.png",
    "url": "https://yunybeautysalon.com",
    "telephone": "+1-786-436-8830",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1042 Old Jonesboro Rd",
      "addressLocality": "Bristol",
      "addressRegion": "TN",
      "postalCode": "37620",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.5663,
      "longitude": -82.1966
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/yuny_beauty",
      "https://www.facebook.com/profile.php?id=61585203983413&mibextid=wwXIfr&rdid=jpJQnWpNRNYbd9Bx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CD3oHk1nu%2F%3Fmibextid%3DwwXIfr#"
    ],
    "priceRange": "$$"
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="YUNY Beauty Salon | Bristol, TN" 
        description="Professional hair salon in Bristol, TN offering cutting, coloring, balayage, and luxury hair treatments. Book your appointment today."
        image={heroImage}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            {translations.heroH1 || t.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-light tracking-[0.3em] mb-12 uppercase"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg font-light tracking-wide mb-8 max-w-2xl mx-auto opacity-90 hidden md:block"
          >
            {translations.homeIntro}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            onClick={() => setLocation("/book")}
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
            <a 
              href="https://www.facebook.com/profile.php?id=61585203983413&mibextid=wwXIfr&rdid=jpJQnWpNRNYbd9Bx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CD3oHk1nu%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-8 uppercase">
            {t.aboutTitle}
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-12 opacity-80">
            {t.aboutText}
          </p>
          <Link href="/about">
            <span className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest cursor-pointer hover:opacity-50 transition-opacity">
              {translations.navAbout}
            </span>
          </Link>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-24 bg-neutral-50 text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-16 text-center uppercase">
            {t.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Cutting */}
            <div className="flex flex-col items-center group">
              <Link href="/services/cutting">
                <div className="w-full aspect-[3/4] bg-neutral-200 mb-6 overflow-hidden relative cursor-pointer">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  {/* Ideally we would put an image here, but for now just a placeholder or color block if no specific image available for thumbnail */}
                  <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-400 font-light">
                    CUTTING
                  </div>
                </div>
              </Link>
              <h3 className="text-xl font-medium tracking-widest uppercase mb-2">
                {translations.serviceCutting}
              </h3>
              <Link href="/services/cutting">
                <span className="text-xs tracking-widest border-b border-transparent group-hover:border-black transition-all cursor-pointer">
                  VIEW DETAILS
                </span>
              </Link>
            </div>

            {/* Color */}
            <div className="flex flex-col items-center group">
              <Link href="/services/color">
                <div className="w-full aspect-[3/4] bg-neutral-200 mb-6 overflow-hidden relative cursor-pointer">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-400 font-light">
                    COLOR
                  </div>
                </div>
              </Link>
              <h3 className="text-xl font-medium tracking-widest uppercase mb-2">
                {translations.serviceColor}
              </h3>
              <Link href="/services/color">
                <span className="text-xs tracking-widest border-b border-transparent group-hover:border-black transition-all cursor-pointer">
                  VIEW DETAILS
                </span>
              </Link>
            </div>

            {/* Treatments */}
            <div className="flex flex-col items-center group">
              <Link href="/services/treatments">
                <div className="w-full aspect-[3/4] bg-neutral-200 mb-6 overflow-hidden relative cursor-pointer">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-400 font-light">
                    TREATMENTS
                  </div>
                </div>
              </Link>
              <h3 className="text-xl font-medium tracking-widest uppercase mb-2">
                {translations.serviceTreatments}
              </h3>
              <Link href="/services/treatments">
                <span className="text-xs tracking-widest border-b border-transparent group-hover:border-black transition-all cursor-pointer">
                  VIEW DETAILS
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-100 text-black">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-12 text-center uppercase">
            {translations.faqTitle || "Frequently Asked Questions"}
           </h2>
           <div className="space-y-6">
             <div className="bg-white p-6 shadow-sm">
               <h3 className="text-lg font-medium mb-2">{translations.faqQ1 || "How do I book?"}</h3>
               <p className="font-light opacity-80">{translations.faqA1}</p>
             </div>
             <div className="bg-white p-6 shadow-sm">
               <h3 className="text-lg font-medium mb-2">{translations.faqQ2 || "Where are you located?"}</h3>
               <p className="font-light opacity-80">{translations.faqA2}</p>
             </div>
             <div className="bg-white p-6 shadow-sm">
               <h3 className="text-lg font-medium mb-2">{translations.faqQ3 || "Opening Hours?"}</h3>
               <p className="font-light opacity-80">{translations.faqA3}</p>
             </div>
             <div className="bg-white p-6 shadow-sm">
               <h3 className="text-lg font-medium mb-2">{translations.faqQ4 || "Walk-ins?"}</h3>
               <p className="font-light opacity-80">{translations.faqA4}</p>
             </div>
             <div className="bg-white p-6 shadow-sm">
               <h3 className="text-lg font-medium mb-2">{translations.faqQ5 || "Pricing?"}</h3>
               <p className="font-light opacity-80">{translations.faqA5}</p>
             </div>
           </div>
        </div>
      </section>

      {/* Location/Contact Summary */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-12 uppercase">
            Visit Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium tracking-widest uppercase text-white/60">Location</h3>
              <p className="text-xl font-light tracking-wider">
                1042 Old Jonesboro Rd<br/>Bristol, TN 37620
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1042+Old+Jonesboro+Rd,+Bristol,+TN+37620" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest border-b border-white/30 hover:border-white inline-block w-max mx-auto pb-1 mt-2 transition-colors"
              >
                Get Directions
              </a>
            </div>

            <div className="w-px h-24 bg-white/20 hidden md:block" />

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium tracking-widest uppercase text-white/60">Hours</h3>
              <p className="text-xl font-light tracking-wider">
                Friday & Saturday<br/>9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="w-px h-24 bg-white/20 hidden md:block" />

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium tracking-widest uppercase text-white/60">Contact</h3>
              <p className="text-xl font-light tracking-wider">
                786-436-8830
              </p>
              <a href="tel:7864368830" className="text-xs uppercase tracking-widest border-b border-white/30 hover:border-white inline-block w-max mx-auto pb-1 mt-2 transition-colors">
                Call Now
              </a>
            </div>
          </div>
          
          <div className="mt-20">
             <button
              onClick={() => setLocation("/book")}
              className="bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
            >
              {t.heroBookButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
