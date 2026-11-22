import { Product, PRODUCTS_DATA, getProductSlug } from "./data";

export const SITE_URL = "https://radhedispoworld.com";

// 1. Organization Schema (Google Knowledge Graph Compliant)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  "@id": `${SITE_URL}/#organization`,
  name: "Radhe Dispoworld",
  legalName: "Radhe Dispoworld Disposable Products",
  alternateName: [
    "Radhe Dispoworld Ahmedabad",
    "Radhe Dispoworld Paper Cup Manufacturer",
    "Radhe Dispoworld Disposable Products",
    "Purv Patel Paper Cups",
  ],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: "512",
    height: "512",
    caption: "Radhe Dispoworld Logo",
  },
  image: `${SITE_URL}/images/gallery/Cup_Family.jpg`,
  description:
    "Founded & Managed by Purv Patel since 2018 in Ahmedabad, Gujarat. Radhe Dispoworld is India's premier manufacturer and wholesale supplier of 100% food-grade, leak-proof single wall, double wall, ripple, and custom logo printed paper cups and automatic paper cup forming machinery.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Purv Patel",
    jobTitle: "Founder & Managing Director",
    image: `${SITE_URL}/purv-patel.jpg`,
    sameAs: [`${SITE_URL}/about`],
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    knowsAbout: [
      "Paper Cup Manufacturing",
      "Food Grade Packaging Engineering",
      "Flexographic Printing",
      "Ultrasonic Cup Sealing Technology",
      "B2B Supply Chain Management",
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Manufacturing Hub, Vatva / Odhav",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382430",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-89800-05230",
      contactType: "sales",
      areaServed: [
        "IN",
        "Gujarat",
        "Maharashtra",
        "Rajasthan",
        "Delhi",
        "Madhya Pradesh",
        "Karnataka",
      ],
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-89800-05230",
      contactType: "customer service",
      email: "radhedispoworld@gmail.com",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Radhe-Dispoworld-Ahmedabad-100086548599466/",
    "https://www.instagram.com/radhe_group_ahmedabad",
    "https://www.google.com/maps?cid=5630473849334354653",
  ],
  slogan: "Sustainable Elegance & Precision in Every Sip",
  knowsAbout: [
    "Disposable Paper Cups",
    "Bio-Degradable Packaging",
    "High-Speed Paper Cup Forming Machinery",
    "Custom Brand Flexo Cup Printing",
    "Ice Cream Wati Manufacturing",
    "Tea & Coffee Disposable Solutions",
  ],
};

// 2. Local Business / Factory Schema (Local SEO & Google Maps Entity)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Factory"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Radhe Dispoworld - Paper Cup Manufacturing Plant",
  image: `${SITE_URL}/images/gallery/Outside.jpg`,
  url: SITE_URL,
  telephone: "+91-89800-05230",
  email: "radhedispoworld@gmail.com",
  priceRange: "₹0.1360 - ₹3.50 per piece",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Cheque, Bank Transfer, UPI, NEFT/RTGS",
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Manufacturing Zone, Vatva / Odhav",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382430",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.990157",
    longitude: "72.745048",
  },
  hasMap:
    "https://www.google.com/maps?ll=22.990157,72.745048&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=5630473849334354653",
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
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Radhe-Dispoworld-Ahmedabad-100086548599466/",
    "https://www.instagram.com/radhe_group_ahmedabad",
    "https://www.google.com/maps?cid=5630473849334354653",
  ],
};

// 3. WebSite Search Schema with Sitelinks Searchbox
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Radhe Dispoworld",
  url: SITE_URL,
  description:
    "India's trusted manufacturer of eco-friendly, food-grade paper cups and cup forming machinery.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["en-IN", "hi-IN", "gu-IN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// 4. FAQ Schema for Search Rich Snippets
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Minimum Order Quantity (MOQ) for wholesale paper cups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard Minimum Order Quantity is just 1 Master Carton (typically 3,000 to 17,010 cups depending on cup volume). For custom logo branded cups, MOQ begins at 25,000 to 50,000 units.",
      },
    },
    {
      "@type": "Question",
      name: "Are Radhe Dispoworld paper cups 100% leak-proof for boiling tea and coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every cup manufactured at Radhe Dispoworld features ultrasonic bottom sealing and high-heat seam knurling using 100% virgin ITC food-grade paperboard, guaranteed zero-leak for boiling hot and iced cold drinks.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does Radhe Dispoworld dispatch paper cup shipments across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ahmedabad and Gujarat local orders are dispatched within 24 hours. Interstate dispatches (Maharashtra, Rajasthan, Delhi NCR, MP, South India) arrive within 2 to 4 business days via reliable direct freight transport.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply automatic paper cup making machinery and raw materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Radhe Dispoworld supplies high-speed automatic paper cup forming machines, flexo printing presses, die-cutters, and printed/plain bottom reels and blanks along with complete technical installation support.",
      },
    },
    {
      "@type": "Question",
      name: "How can I order custom brand logo printing on paper cups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit your brand logo vector/PNG via WhatsApp (+91 89800 05230) or our contact page. We print using food-grade odorless aqueous flexographic inks with high-definition precision.",
      },
    },
  ],
};

// 5. HowTo Schema for Ordering Wholesale Cups
export const howToOrderSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Order Wholesale Paper Cups from Radhe Dispoworld Factory",
  description:
    "Step-by-step guide to procure factory-direct food-grade paper cups from Ahmedabad, Gujarat.",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Select Cup Sizes & Volume",
      text: "Browse our 53+ variants (40ml to 350ml or Ice Cream Wati) and choose your Bharati and carton quantities.",
      url: `${SITE_URL}/products`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Calculate Freight & Cartons",
      text: "Use the AI Logistics & Freight Simulator to review master carton volume, weight in kg, and state transit days.",
      url: `${SITE_URL}/products`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Connect via WhatsApp or Call",
      text: "Send your order summary directly to founder Purv Patel on WhatsApp (+91 89800 05230) for an instant stamped wholesale quotation.",
      url: `${SITE_URL}/contact`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch & Delivery",
      text: "Receive guaranteed 24-48h dispatch from our Ahmedabad cleanroom facility with full transport tracking.",
      url: `${SITE_URL}/about`,
    },
  ],
};

// 6. Detailed Individual Product Schema Generator (Google Merchant & Search Compliant)
export function generateProductSchema(product: Product) {
  const slug = getProductSlug(product);
  const isMachine = product.category === "Machines";
  const numericPrice = parseFloat(product.rate || "0") || (isMachine ? 750000 : 0.136);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${slug}/#product`,
    name: product.name,
    image: product.image.startsWith("http")
      ? product.image
      : `${SITE_URL}${product.image}`,
    description:
      product.description ||
      `Wholesale ${product.name} manufactured by Radhe Dispoworld in Ahmedabad. 100% food-grade virgin paperboard with zero-leak guarantee.`,
    sku: `RDW-${product.id}-${product.category.replace(/[^a-zA-Z0-9]/g, "-")}`,
    mpn: `RDW-P${product.id}`,
    category: product.categoryLabel || product.category,
    brand: {
      "@type": "Brand",
      name: "Radhe Dispoworld",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${slug}`,
      priceCurrency: "INR",
      price: numericPrice.toFixed(4),
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Radhe Dispoworld",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 4,
            unitCode: "DAY",
          },
        },
      },
    },
  };
}

// 7. Products Catalog Schema (ItemList linking each product to its canonical URL)
export const productsCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Radhe Dispoworld Paper Cup Product Catalog",
  description:
    "Complete wholesale list of 100% food grade disposable paper cups, ripple cups, double wall cups, and ice cream wati.",
  itemListElement: PRODUCTS_DATA.slice(0, 30).map((product, index) => {
    const slug = getProductSlug(product);
    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/products/${slug}/#product`,
        name: product.name,
        image: `${SITE_URL}${product.image}`,
        description: product.description,
        sku: `RDW-${product.id}-${product.category.replace(/\s+/g, "-")}`,
        category: product.category,
        url: `${SITE_URL}/products/${slug}`,
        brand: {
          "@type": "Brand",
          name: "Radhe Dispoworld",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.rate || "0.1360",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: `${SITE_URL}/products/${slug}`,
          seller: {
            "@type": "Organization",
            name: "Radhe Dispoworld",
          },
        },
      },
    };
  }),
};

// 8. Breadcrumb Schema Generator
export function generateBreadcrumbsSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
