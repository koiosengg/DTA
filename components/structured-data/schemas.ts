// ============================================
// JSON-LD SCHEMA DEFINITIONS FOR DTA
// Schema.org Structured Data for SEO
// ============================================

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dtaindia.com";
export const COMPANY_NAME = "Deccan Taekwondo Academy";
export const ALTERNATE_NAME = "DTA India";
export const LOGO_URL = `${BASE_URL}/assets/Footer/logo1.png`;

// ============================================
// 1. ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${BASE_URL}/#organization`,
  name: COMPANY_NAME,
  alternateName: ALTERNATE_NAME,
  url: BASE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "Deccan Taekwondo Academy (DTA) has been shaping lives through Korean martial arts for over 18 years in Bangalore, under Grand Master H.L. Muthappa Huderi.",
  foundingDate: "2008",
  founder: {
    "@type": "Person",
    name: "Grand Master H.L. Muthappa Huderi",
    jobTitle: "Founder & Grand Master (7th Dan Black Belt)",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony, Sudhama Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560027",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-91084-14481",
    contactType: "Customer Support",
    email: "dta.for.teakwondo@gmail.com",
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/dta_india/",
    "https://facebook.com",
    "https://maps.app.goo.gl/T8k6EJKwNDHVVHYV7",
  ],
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
  },
};

// ============================================
// 2. LOCAL BUSINESS / SPORTS CLUB SCHEMA
// ============================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "@id": `${BASE_URL}/#localbusiness`,
  name: COMPANY_NAME,
  description:
    "Top-rated martial arts academy in Bangalore offering Kids Taekwondo, Teen Martial Arts, Adult Self Defence & Fitness, and Senior Mobility training.",
  url: BASE_URL,
  telephone: "+91-91084-14481",
  email: "dta.for.teakwondo@gmail.com",
  image: `${BASE_URL}/assets/Footer/Footer.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony, Sudhama Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560027",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9575",
    longitude: "77.5936",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Net Banking",
  sameAs: [
    "https://www.instagram.com/dta_india/",
    "https://maps.app.goo.gl/T8k6EJKwNDHVVHYV7",
  ],
};

// ============================================
// 3. SERVICE / COURSES SCHEMA
// ============================================
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Martial Arts & Taekwondo Training Programs",
  provider: {
    "@type": "SportsClub",
    name: COMPANY_NAME,
    url: BASE_URL,
  },
  description:
    "Comprehensive martial arts programs including kids taekwondo, teen martial arts, adult self-defense, and senior fitness.",
  url: `${BASE_URL}/#programs`,
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DTA Martial Arts Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Taekwondo Classes (Age 3+)",
          description:
            "Build confidence, discipline, focus, respect, strength, and flexibility for children.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Teen Martial Arts Training",
          description:
            "Build athletic performance, self-confidence, leadership, and competitive martial arts spirit.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adult Self Defence & Fitness",
          description:
            "Practical self defense, stamina, strength, mobility, and weight loss for working professionals and adults.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Fitness & Movement Training",
          description:
            "Low-impact functional movement, mobility, and balance training for seniors.",
        },
      },
    ],
  },
};

// ============================================
// 4. WEBSITE SCHEMA (SearchAction)
// ============================================
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: COMPANY_NAME,
  alternateName: ALTERNATE_NAME,
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },
};

// ============================================
// 5. ABOUT PAGE SCHEMA
// ============================================
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${COMPANY_NAME}`,
  description:
    "Learn about Deccan Taekwondo Academy's 18+ year legacy, Grand Master H.L. Muthappa Huderi, and our mission to build stronger minds and bodies.",
  url: `${BASE_URL}/about`,
  mainEntity: {
    "@type": "SportsClub",
    name: COMPANY_NAME,
    foundingDate: "2008",
    description:
      "Deccan Taekwondo Academy has trained over 10,000 students across Bangalore with expert martial arts instruction.",
    founder: {
      "@type": "Person",
      name: "Grand Master H.L. Muthappa Huderi",
    },
    knowsAbout: [
      "Taekwondo",
      "Korean Martial Arts",
      "Self Defence",
      "Physical Fitness",
      "Martial Arts Competition",
    ],
  },
};

// ============================================
// 6. CONTACT PAGE SCHEMA
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${COMPANY_NAME}`,
  description:
    "Get in touch with Deccan Taekwondo Academy in Bangalore for trial classes, admissions, and enquiries.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "SportsClub",
    name: COMPANY_NAME,
    telephone: "+91-91084-14481",
    email: "dta.for.teakwondo@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony, Sudhama Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560027",
      addressCountry: "IN",
    },
  },
};

// ============================================
// 7. BREADCRUMB SCHEMA HELPER
// ============================================
export const getBreadcrumbSchema = (pageName: string, pageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: `${BASE_URL}${pageUrl}`,
    },
  ],
});

export default {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  webSiteSchema,
  aboutPageSchema,
  contactPageSchema,
  getBreadcrumbSchema,
};
