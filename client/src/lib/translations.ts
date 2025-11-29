export const translations = {
  en: {
    navHome: "YUNY",
    navAbout: "About Us",
    navServices: "Services",
    navBook: "Book Appointment",
    heroTitle: "YUNY",
    heroSubtitle: "BEAUTY SALON",
    heroBookButton: "Book",
    aboutTitle: "About Us",
    aboutText: "We are a modern beauty salon offering personalized hair, beauty, and wellness services. Our mission is to provide a relaxing oasis where you can escape the city and focus on yourself.",
    servicesTitle: "Services",
    serviceCutting: "Cutting",
    serviceColor: "Color",
    serviceTreatments: "Treatments",
    bookTitle: "Book Your Appointment",
    bookText: "Reserve your visit quickly and securely through our online booking system.",
    bookButtonMain: "Book Online",
    footerAddress: "5048 Old Jonesboro Rd, Bristol, TN 37620",
    footerHours: "Open Friday and Saturday | 9AM - 6PM",
    footerCopyright: "© 2025 YUNY BEAUTY SALON. All rights reserved."
  },
  es: {
    navHome: "YUNY",
    navAbout: "Sobre nosotros",
    navServices: "Servicios",
    navBook: "Reservar cita",
    heroTitle: "YUNY",
    heroSubtitle: "BEAUTY SALON",
    heroBookButton: "Reservar",
    aboutTitle: "Sobre nosotros",
    aboutText: "Somos un salón de belleza moderno que ofrece servicios personalizados de cabello, belleza y bienestar. Nuestra misión es proporcionar un oasis relajante donde puedas escapar de la ciudad y concentrarte en ti mismo.",
    servicesTitle: "Servicios",
    serviceCutting: "Corte",
    serviceColor: "Color",
    serviceTreatments: "Tratamientos",
    bookTitle: "Reserva tu cita",
    bookText: "Reserva tu visita rápida y de forma segura a través de nuestro sistema de reservas en línea.",
    bookButtonMain: "Reservar en línea",
    footerAddress: "5048 Old Jonesboro Rd, Bristol, TN 37620",
    footerHours: "Abierto viernes y sábado | 9AM - 6PM",
    footerCopyright: "© 2025 YUNY BEAUTY SALON. Todos los derechos reservados."
  }
};

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;
