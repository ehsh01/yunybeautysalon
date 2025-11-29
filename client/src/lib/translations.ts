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
    aboutText: "Our mission is to make every person who walks through our doors feel confident, cared for, and beautifully transformed. We blend skill, attention to detail, and artistry to create looks that celebrate your unique style.",
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
    aboutText: "Nuestra misión es que cada persona que entra por nuestras puertas se sienta segura, cuidada y bellamente transformada. Combinamos habilidad, atención al detalle y arte para crear looks que celebran tu estilo único.",
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
