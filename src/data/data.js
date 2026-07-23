
// src/data.js
export const filterData = {
  projects: ["Flat", "Ongoing", "House", "Plot", "Land", "Share", "Commercial"],
  locations: [
    "Aftabnagar", "Banasree", "Khilgaon", "Basabo",
    "Goran", "Nandipara", "Dhanmondi", "Mirpur", "Uttara"
  ],
  priceRanges: ["20 Lac - 40 Lac", "41 Lac - 60 Lac", "61 Lac - 80 Lac", "81 Lac - 1 Crore", "1 Crore+"],
  sizes: ["500-1000 sqft", "1000-1500 sqft", "1500-2000 sqft", "2000+ sqft"]
};

// src/data/data.js
export const projects = [
  {
    id: 0,
    name: "Ready Flat",
    category: "Flat",
    location: "Banasree",
    price: "5600000",
    size: "1000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Bhuiyapara, Rampura",

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
        "/images/d32.jpeg",
        "/images/d34.jpeg",
        "/images/d35.jpeg"
      ],
      videoUrl: "https://youtube.com/shorts/SQdSiHB4nV4?si=nxSAzAsEMEx7dBAA"
    }
  },

  {
    id: 2,
    name: "Ongoing Family Apartment",
    category: "Flat",
    location: "Basabo",
    price: "6500000",
    size: "1665",
    image: "",
    description: "Kadamtala, Kusumbagh",

    moreDetails: {
      FullLocation:
        "📍 Kadamtala, Kusumbagh, adjacent to Rajarbagh Kali Mandir.",

      FullDetails: `
    • Apartment Size: 1,665 Sq Ft
    • Ongoing Residential Project
    • 4 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 2 Balconies
    • Separate Drawing & Dining Areas
    • Well-Planned Kitchen
    • Basement + Ground + 9-Storey Residential Building (B+G+9)
    • Residential Building with Two Access Roads
    • East-Facing Building
    • 2 High-Speed Elevators
    • 1 Staircase
    • Generator Backup & Electrical Substation
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Service
    • Spacious Open Rooftop
    • 10-Foot Ventilation Void Beside Every Apartment for Excellent Natural Light & Airflow
    • Package Price: BDT 6,500,000 (65 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/Ux-I5hoc3BI?si=YvN1hB-JM3l5TkLj"
    }
  },
  {
    id: 2,
    name: "Premium Ready Apartment",
    category: "Flat",
    location: "Dhanmondi",
    price: "8000000",
    size: "1100",
    image: "",
    description: "Kathal Bagan Bazar, Dhanmondi Kalabagan",

    moreDetails: {
      FullLocation:
        "📍 Kathal Bagan Bazar, Dhanmondi Kalabagan, Opposite Bashundhara City Shopping Complex, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,100+ Sq Ft
    • Ready-to-Move Apartment
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 2 Balconies
    • Separate Drawing & Dining Areas
    • Well-Planned Kitchen
    • Available Floors: 6th, 7th & 8th
    • East-Facing Apartment
    • G+8 Residential Building
    • Built on 4.15 Katha of Land
    • 3 Apartments Per Floor
    • 1 High-Speed Elevator
    • 1 Staircase
    • Titas Gas Connection
    • Dedicated Car Parking Available
    • Handover Completed in 2024
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Generator Backup
    • Uninterrupted Electricity & Water Supply
    • Rental Potential: Approximately BDT 32,000/Month
    • Price: BDT 8,000,000 (80 Lakh)
    • Car Parking: BDT 500,000 (Optional)
    • Price Per Sq Ft: BDT 7,300
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/I8bDmk5KpM8?si=SMAbfEltX71DTNY5"
    }
  },
  {
    id: 3,
    name: "Premium South-Facing Apartment",
    category: "Flat",
    location: "Paltan",

    price: "23000000",
    size: "1610",
    image: "",
    description: "Segunbagicha, Paltan, Dhaka",

    moreDetails: {
      FullLocation:
        "📍 Adjacent to Segunbagicha High School, Segunbagicha, Topkhana Road, Paltan, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,610 Sq Ft
    • Ready-to-Move Apartment
    • Located on the 6th Floor
    • South-Facing Unit
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 3 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • G+9 Residential Building (10 Storeys)
    • Built on 6 Katha of Land
    • 20-Foot Wide Access Road
    • 35% Open Space
    • Only 2 Apartments Per Floor
    • 1 High-Speed Elevator
    • 1 Staircase
    • Titas Gas Connection
    • Uninterrupted Electricity & Water Supply
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Optional Car Parking Available
    • Apartment Price: BDT 23,000,000 (2 Crore 30 Lakh)
    • Car Parking Price: BDT 1,200,000 (12 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/ujFugs-EH54?si=K0n69IbTWUjGdOZY"
    }
  },

  {
    id: 4,
    name: "Affordable Ready Apartment",
    category: "Flat",
    location: "Basabo",
    price: "3900000",
    size: "750",
    image: "",
    description: "Mithai Goli, Basabo, Dhaka",

    moreDetails: {
      FullLocation:
        "📍 Mithai Goli, East of Navana Silver Tower, Basabo, Dhaka.",

      FullDetails: `
    • Apartment Size: 750 Sq Ft
    • Ready-to-Move Apartment
    • 2 Spacious Bedrooms
    • 2 Modern Bathrooms
    • 2 Balconies
    • Drawing Room
    • Dining Area
    • Kitchen
    • Located in a 5-Storey Residential Building
    • Built on 2.5 Katha of Land
    • Building Age: Approximately 12 Years
    • Only 2 Apartments Per Floor
    • Titas Gas Connection Available
    • The Property is Built on a Government Housing & Public Works (PWD) Plot
    • No Utility Service Charges
    • Current Rental Income: Approximately BDT 14,000/Month
    • Selling Price: BDT 3,900,000 (39 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/OTdgkEr0fEc?si=Du8KmkIYjmpwP2vY"
    }
  },

  {
    id: 5,
    name: "Premium Hotel Share Investment",
    category: "Share",
    location: "Cox's Bazar",
    price: "500000",
    size: "Investment Package",
    image: "",
    description: "Royal Marina Holdings PLC.",

    moreDetails: {
      FullLocation:
        "📍 Arabian Salt Lake (3★) & Cox Marina (5★), Cox's Bazar, Bangladesh.",

      FullDetails: `
    • Own a Profitable Share in Premium Hotels at Cox's Bazar
    • Investment Available in Arabian Salt Lake (3★) & Cox Marina (5★)
    • Registered Ownership Through Official Sale Deed (Saf Kabala Registration)
    • Fully Transferable Ownership
    • Enjoy Family Vacations Throughout the Year
    • Lifetime Halal Profit Sharing
    • Annual Income Dividend for Shareholders
    • Special Discounts & Commission on Hotel Room Bookings
    • High Potential for Long-Term Asset Value Appreciation
    • Access to Hotel Accounts & CCTV Monitoring for Partners
    • Annual Profit Distributed Through Bank Transfer
    • Exclusive Lifestyle Benefits for Every Partner

    Investment Packages:
    • Elite Share – BDT 550,000 (5.5 Lakh)
    • Diamond Share – BDT 1,100,000 (11 Lakh)
    • Suite Share – BDT 6,600,000 (66 Lakh)
    • Super Suite Share – BDT 13,200,000 (1 Crore 32 Lakh)

    Easy Payment Plan:
    • Booking Money: BDT 100,000
    • Down Payment: BDT 100,000 (Within 3 Months of Booking)
    • Monthly Installment: BDT 10,000
    • Installment Duration: 35 Months

    • Free Project Visit Available (Terms & Conditions Apply)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/tZpJGM4HsbI?si=I6NJgw8gg29e-c6-"
    }
  },

  {
    id: 6,
    name: "Spacious Ready Family Apartment",
    category: "Flat",
    location: "Nandipara",
    price: "7000000",
    size: "1350",
    image: "",
    description: "Nandipara, Road No. 4",

    moreDetails: {
      FullLocation:
        "📍 Nandipara, Road No. 4, near the 60-Foot Main Road, adjacent to a 16-Foot Access Road, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,350 Sq Ft
    • Ready-to-Move Apartment
    • Available on the 5th Floor (1 Unit) & 8th Floor (2 Units)
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 3 Balconies
    • Separate Drawing & Dining Areas
    • Well-Planned Kitchen
    • 10-Storey Residential Building
    • Land Area: 36 Ajuut Angsho
    • Only 4 Apartments Per Floor
    • Excellent Natural Light & Cross Ventilation
    • Community Hall on the Rooftop
    • 2 High-Speed Elevators
    • 1 Staircase
    • Electrical Substation
    • Generator Backup
    • Uninterrupted Electricity Supply
    • 24/7 Security Guard
    • CCTV Surveillance System
    • Utility Connections Included
    • Apartment Price: BDT 7,000,000 (70 Lakh)
    • Optional Car Parking: BDT 500,000 (5 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/xz8gPR9Yafw?si=y9IhAeH99pzQEe6a"
    }
  },

  {
    id: 8,
    name: "Premium South-Facing Ready Apartment",
    category: "Flat",
    location: "Banasree H Block, Rampura",
    price: "12500000",
    size: "1600",
    image: "",
    description: "Banasree H Block, Rampura",

    moreDetails: {
      FullLocation:
        "📍 Road No. 6, Banasree H Block, Rampura, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,600 Sq Ft
    • 100% Ready-to-Move Apartment
    • South-Facing Apartment
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 4 Balconies
    • Spacious Drawing Room
    • Large Separate Dining Area
    • Well-Planned Kitchen
    • G+7 Residential Building
    • Built on 3+ Katha of Land
    • Only One Apartment Per Floor
    • South-Facing Building
    • Building Age: Approximately 12 Years (Well-Maintained & Like New)
    • 1 High-Speed Elevator
    • 1 Staircase
    • Dedicated Car Parking Available
    • Titas Gas Connection Available
    • Uninterrupted Water, Gas & Electricity Supply
    • Generator Backup
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Spacious Open Rooftop
    • Apartment Price: BDT 12,500,000 (1 Crore 25 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/4G-20VqnAiA?si=T9pjnBAzplI78ILj"
    }
  },

  {
    id: 9,
    name: "Premium Ready Apartment with Parking",
    category: "Flat",
    location: "Basabo",
    price: "7200000",
    size: "1300",
    image: "",
    description: "9 No. Lane, Kadamtala, Basabo",

    moreDetails: {
      FullLocation:
        "📍 Near Hirajheel Mosque, 9 No. Lane, Kadamtala, Basabo, Sabujbag, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,300 Sq Ft
    • 100% Ready-to-Move Apartment
    • Located on the 10th Floor
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 2 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • G+9 Residential Building
    • Built on 8 Katha of Land
    • 120 Sq Ft Dedicated Car Parking Included
    • 2 High-Speed Elevators
    • 1 Staircase
    • Gas Connection Available
    • Electrical Substation
    • Generator Backup
    • Uninterrupted Electricity Supply
    • Large Rooftop Community Hall
    • Waterproof & Tiled Rooftop
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Close to Shwapno Super Shop, Mosque, Madrasa & Local Markets
    • Bank Loan Facility Available
    • Apartment Price (Including Parking & Utilities): BDT 7,200,000 (72 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/7re18Ix1w9k?si=rI2axY5PaeDWjE_W"
    }
  },

  {
    id: 10,
    name: "Ready Family Apartment",
    category: "Flat",
    location: "Banasree J Block",
    price: "7000000",
    size: "1200",
    image: "",
    description: "Extension, Road No. 5, Banasree J Block",

    moreDetails: {
      FullLocation:
        "📍 Extension, Road No. 5, Banasree J Block, beside Shooting Club, Kolar Arat Lane, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,200 Sq Ft
    • 100% Ready-to-Move Apartment
    • Located on the 7th Floor of an 8-Storey Residential Building
    • Built on 4 Katha of Land
    • Only 2 Apartments Per Floor
    • 3 Spacious Bedrooms
    • 2 Modern Bathrooms
    • 2 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • 1 High-Speed Elevator
    • 1 Staircase
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Parking Included
    • Utility Connections Included
    • Total Package Price (Including Parking & Utilities): BDT 7,000,000 (70 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/ONUbmU7eyag?si=kL_2R1vfioF58vA0"
    }
  },

  {
    id: 11,
    name: "Premium Residential Plot",
    category: "Land",
    location: "Aftabnagar",
    price: "13000000",
    size: "5.75 Katha",
    image: "",
    description: "Aftabnagar Residential Area",

    moreDetails: {
      FullLocation:
        "📍 Block H, Sector 4, Road No. 4, Aftabnagar Residential Area, Dhaka.",

      FullDetails: `
    • Prime Residential Plot
    • Plot Size: 5.75 Katha
    • Located in Block H, Sector 4
    • Road No. 4
    • Ideal for Residential Building Development
    • Peaceful & Well-Planned Neighborhood
    • Easy Access to Main Roads and Daily Amenities
    • Suitable for Both Personal Living and Long-Term Investment
    • Price: BDT 13,000,000 Per Katha (1 Crore 30 Lakh Per Katha)
    • Total Plot Size: 5.75 Katha
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/kI1jF1cccXE?si=Xw_jtG5xtxOPP63w"
    }
  },


];