// src/data.js
export const filterData = {
  projects: ["Flat", "House", "Land", "Plot", "Share"],
  locations: [
    "Aftabnagar", "Banasree", "Khilgaon", "Basabo",
    "Goran", "Nondipara", "Dhanmondi", "Mirpur", "Uttara"
  ],
  priceRanges: ["20 Lac - 40 Lac", "41 Lac - 60 Lac", "61 Lac - 80 Lac", "81 Lac - 1 Crore", "1 Crore+"],
  sizes: ["500-1000 sqft", "1000-1500 sqft", "1500-2000 sqft", "2000+ sqft"]
};

// src/data/data.js
export const projects = [
  {
    id: 1,
    name: "Ready Flat",
    category: "Flat",
    location: "Banasree",
    price: "5600000",
    size: "1000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Adjacent to Banasree D Block, Road No. 4...",

    // ডিটেইলস পেজের জন্য অতিরিক্ত ডাটা:
    moreDetails: {
      FullLocation: " 📍 Location: Bhuiyapara, Rampura (Adjacent to Banasree D Block, Road No. 4)",
      FullDetails: `
      2 Bedrooms. 
      2 Bathrooms.
      2 Balconies.
       Drawing, Dining & Kitchen.
       Located on the 3rd Floor of a G + 6 Residential Building Built on 2.5 Katha of Land Only One Apartment Per Floor.
      Price: BDT 5.6 Million(56 Lakh)`,
      galleryImages: [
        "/images/d31.jpeg",
        "/images/d32.jpeg"
      ],
      videoUrl: "https://youtube.com/shorts/SQdSiHB4nV4?si=nxSAzAsEMEx7dBAA"
    }
  },
  {
    id: 2,
    name: "Luxury Flat",
    category: "Flat",
    location: "Dhanmondi",
    price: "6000000",
    size: "1100",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Dhanmondir 27 numbere 3bed room er flat...",

    // ডিটেইলস পেজের জন্য অতিরিক্ত ডাটা:
    moreDetails: {
      FullLocation: "Dhanmondi, Dhaka, Bangladesh",
      FullDetails: "This luxury flat features modern architecture, 24/7 security, and premium amenities.",
      galleryImages: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      ],
      videoUrl: "https://www.youtube.com/embed/URVEdy6TvDg"
    }
  },
  {
    id: 3,
    name: "Luxury Flat",
    category: "Flat",
    location: "Dhanmondi",
    price: "7100000",
    size: "1600",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Dhanmondir 27 numbere 3bed room er flat...",

    // ডিটেইলস পেজের জন্য অতিরিক্ত ডাটা:
    moreDetails: {
      FullLocation: "Dhanmondi, Dhaka, Bangladesh",
      FullDetails: "This luxury flat features modern architecture, 24/7 security, and premium amenities.",
      galleryImages: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      ],
      videoUrl: "https://www.youtube.com/embed/URVEdy6TvDg"
    }
  },
  {
    id: 4,
    name: "Luxury Flat",
    category: "Flat",
    location: "Dhanmondi",
    price: "9100000",
    size: "1300",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Dhanmondir 27 numbere 3bed room er flat...",

    // ডিটেইলস পেজের জন্য অতিরিক্ত ডাটা:
    moreDetails: {
      FullLocation: "Dhanmondi, Dhaka, Bangladesh",
      FullDetails: "This luxury flat features modern architecture, 24/7 security, and premium amenities.",
      galleryImages: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      ],
      videoUrl: "https://www.youtube.com/embed/URVEdy6TvDg"
    }
  },

];