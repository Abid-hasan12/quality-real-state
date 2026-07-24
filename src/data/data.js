
// src/data.js
export const filterData = {
  projects: ["Ready-Flat", "Ongoing-Flat", "Resale-Flat", "House", "Plot", "Land-Share", "Hotel-Share", "Flat-Land-Share", "Commercial"],
  locations: [
    "Aftabnagar", "Banasree", "Khilgaon", "Basabo",
    "Goran", "Nandipara", "Meradia", "Dhanmondi", "Mirpur", "Uttara"
  ],
  priceRanges: ["20 Lac - 40 Lac", "41 Lac - 60 Lac", "61 Lac - 80 Lac", "81 Lac - 1 Crore", "1 Crore+"],
  sizes: ["500-1000 sqft", "1000-1500 sqft", "1500-2000 sqft", "2000+ sqft"]
};

// src/data/data.js
export const projects = [

  {
    id: 1,
    name: "Ongoing Family Apartment",
    category: "Ongoing-Flat",
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
    name: "Ready Flat",
    category: "Ready-Flat",
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
    id: 3,
    name: "Premium South-Facing Apartment",
    category: "Ready-Flat",
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
    category: "Resale-Flat",
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
    category: "Hotel-Share",
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
    category: "Ready-Flat",
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
    category: "Resale-Flat",
    location: "Banasree",
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
    category: "resale-Flat",
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
    category: "Ready-Flat",
    location: "Banasree",
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
    category: "Plot",
    location: "Aftabnagar",
    price: "13000000",
    size: "4140",
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

  {
    id: 12,
    name: "Ready Residential Plot",
    category: "Plot",
    location: "Aftabnagar L Block",
    price: "12000000",
    size: "2880",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Block L, Sector 4, Road No. 2, Aftabnagar Residential Area, Dhaka.",

      FullDetails: `
    • 100% Ready Residential Plot
    • Plot Size: 4 Katha
    • Located in Block L, Sector 4
    • Road No. 2
    • Ideal for Immediate Home Construction
    • Located in a Well-Planned Residential Neighborhood
    • Suitable for Both Residential Living and Long-Term Investment
    • Price: BDT 12,000,000 Per Katha (1 Crore 20 Lakh Per Katha)
    • Total Plot Size: 4 Katha
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/tll_FOFD6so?si=rFanrnvGxsPVroKD"
    }
  },

  {
    id: 13,
    name: "Affordable Ready Apartment",
    category: "Resale-Flat",
    location: "Goran",
    price: "5200000",
    size: "1080",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Near Goran Chapra Mosque, Goran, Khilgaon, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,080 Sq Ft
    • Ready-to-Move Resale Apartment
    • Located on the 4th Floor
    • 3 Spacious Bedrooms
    • 2 Modern Bathrooms
    • 2 Balconies
    • Comfortable Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • Well-Maintained Used Apartment
    • Utility Connections Included
    • Total Package Price: BDT 5,200,000 (52 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/PawFq13mDNc?si=fi1S88mNHU2DnK1r"
    }
  },

  {
    id: 14,
    name: "Premium Ready Family Apartment",
    category: "Ready-Flat",
    location: "Banasree",
    price: "8500000",
    size: "1350",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 East of Meradia Bazar, Opposite Road No. 8, Banasree M Block, Rampura, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,350 Sq Ft
    • 100% Ready-to-Move Apartment
    • Available on the 2nd & 3rd Floors
    • 4 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 2 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • G+9 Residential Building
    • Built on 4 Katha of Land
    • Only 2 Apartments Per Floor
    • 2nd Floor Apartment Comes with Complete Interior Finishing & Premium Lighting
    • 3rd Floor Apartment Features Modern Gypsum Ceiling Design & Decorative Lighting
    • Dedicated Car Parking Available
    • Utility Connections Included
    • Price Per Sq Ft: BDT 6,200
    • Total Package Price: BDT 8,500,000 (85 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/FT5zncgpv7Y?si=vCmVKeRh_Ia32OS4"
    }
  },
  {
    id: 15,
    name: "South-Facing Premium Ready Apartment",
    category: "Ready-Flat",
    location: "Khilgaon",
    price: "7500000",
    size: "1020",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Beside Ananda Bakery, Riyazbag, Nabinbag, Khilgaon, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,020 Sq Ft
    • 100% Ready-to-Move Apartment
    • Located on the 5th Floor
    • South-Facing Apartment
    • G+9 Residential Building
    • Only 4 Apartments Per Floor (Different Layouts)
    • 2 or 3 Spacious Bedrooms (Depending on Unit)
    • 3 Modern Bathrooms
    • 1 South-Facing Balcony
    • Drawing/Dining Area
    • Well-Planned Kitchen
    • 2 High-Speed Elevators
    • 1 Staircase
    • 120 Sq Ft Dedicated Car Parking Included
    • Electrical Substation & Generator Backup
    • Deep Tube Well (Submersible Water Supply)
    • Metered Gas Connection
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Rooftop Mosque
    • Spacious Community Hall
    • Children's Playground
    • Price: BDT 7,500,000 (75 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/URVEdy6TvDg?si=_ZHyopTpGCHdKGvP"
    }
  },
  {
    id: 16,
    name: "Apartment Land Share Project",
    category: "Land-Share",
    location: "Banasree",
    price: "2400000",
    size: "1350",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Trimohoni, Road No. 5, East Banasree, Adjacent to Banasree G Block, Beside Trimohoni Bus Stand & Liberty School, Dhaka.",

      FullDetails: `
    • Apartment Land Share Investment Project
    • Share Size: 1,350 Sq Ft
    • Planned Apartment Size: 1,550 Sq Ft
    • Opportunity to Own an Apartment at Approximately 40% Lower Initial Cost
    • B+G+11 Residential Building
    • Built on 20 Katha of Land
    • Total Apartments: 88 Units
    • 8 Apartments Per Floor
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 3 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • 4 High-Speed Elevators
    • 2 Staircases
    • Dedicated Car Parking for All Owners
    • Children's Play Area
    • Community Hall
    • Mosque
    • Uninterrupted Electricity Supply
    • Water Supply & Central Gas System
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Freedom to Choose Your Preferred Apartment
    • Share Price: BDT 2,400,000 (24 Lakh)
    • Construction Cost Payable in Easy Installments Over 3 Years
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/N4zBwBe5QM4?si=n2mYKAPRQ7jWZTh3"
    }
  },
  {
    id: 17,
    name: "Luxury South-Facing Interior Apartment",
    category: "Resale-Flat",
    location: "Nandipara",
    price: "13000000",
    size: "2100",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Road No. 2, Nandipara, Khilgaon, Dhaka.",

      FullDetails: `
    • Apartment Size: 2,100 Sq Ft
    • Fully Interior-Designed Ready Apartment
    • Located on the 5th Floor
    • South-Facing Unit
    • 4 Spacious Bedrooms
    • 4 Modern Bathrooms
    • 4 Balconies with Excellent Natural Light & Ventilation
    • Expansive Drawing & Dining Area
    • Modern Family Kitchen
    • Dedicated Car Parking Available
    • Bright & Airy Layout with Excellent Cross Ventilation
    • Ideal for Large Families Seeking Premium Living
    • Selling Price: BDT 13,000,000 (1 Crore 30 Lakh)
    • Price is Fixed
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/jVryh4zc05A?si=ImhlEmP0kfD3HAC7"
    }
  },

  {
    id: 18,
    name: "Premium East-Facing Ready Apartment",
    category: "Ready-Flat",
    location: "Dhanmondi",
    price: "8000000",
    size: "1100",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Kathal Bagan Bazar, Dhanmondi Kalabagan, Opposite Bashundhara City Shopping Complex, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,100+ Sq Ft
    • 100% Ready-to-Move Apartment
    • Available on the 6th, 7th & 8th Floors
    • East-Facing Apartment
    • G+8 Residential Building
    • Built on 4.15 Katha of Land
    • 3 Apartments Per Floor
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 2 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • Titas Gas Connection
    • 1 High-Speed Elevator
    • 1 Staircase
    • Dedicated Car Parking Available
    • Building Handover: 2024
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Generator Backup
    • Uninterrupted Electricity & Water Supply
    • Monthly Rental Potential: Approximately BDT 32,000
    • Price Per Sq Ft: BDT 7,300
    • Apartment Price: BDT 8,000,000 (80 Lakh)
    • Optional Car Parking: BDT 500,000 (5 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/FuWrF9I-1Nw?si=fpelum4dPFhl-lLR"
    }
  },
  {
    id: 19,
    name: "Premium South-Facing Family Apartment",
    category: "Ready-Flat",
    location: "Meradia",
    price: "8500000",
    size: "1450",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Kazibari Residential Society, South of Meradia Bazar, Rampura, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,450 Sq Ft
    • 100% Ready-to-Move Apartment
    • South-Facing Unit
    • Available Apartments: 4
    • G+7 Residential Building
    • Built on 2.5 Katha of Land
    • Single Apartment Per Floor
    • 3 Spacious Bedrooms
    • 3 Modern Washrooms
    • 3 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • 1 High-Speed Elevator
    • 1 Staircase
    • Spacious Open Rooftop
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Additional Security Provided by the Residential Society
    • Uninterrupted Water & Electricity Supply
    • 2nd Floor Price: BDT 8,500,000 (85 Lakh)
    • Other Available Floors: BDT 12,000,000 (1 Crore 20 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/PLui5JBfJvg?si=s2SjglBEYptuhrdf"
    }
  },
  {
    id: 20,
    name: "Premium Soundproof Ready Apartment",
    category: "Resale-Flat",
    location: "Nandipara",
    price: "7300000",
    size: "1440",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Road No. 7, Nandipara, Near the 60-Foot Main Road, Khilgaon, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,440 Sq Ft
    • 100% Ready-to-Move Apartment
    • Available on the 5th & 6th Floors
    • Located in a Quiet Residential Zone
    • Lifetime Natural Light & Cross Ventilation
    • G+10 Residential Building
    • Built on 36 Ajuut Angsho of Land
    • Only 3 Apartments Per Floor
    • 3 Spacious Bedrooms
    • 3 Modern Bathrooms
    • 3 Balconies
    • Spacious Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • 1 High-Speed Elevator
    • 1 Staircase
    • Dedicated Car Parking Available
    • Electrical Substation
    • Generator Backup
    • Uninterrupted Water & Electricity Supply
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Soundproof & Dustproof Construction
    • Total Package Price: BDT 7,300,000 (73 Lakh)
    • Price Includes Car Parking, Utility Connections & Registration
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/MC4QO83FWus?si=jDEvEu3ZW3HsqloT"
    }
  },

  {
    id: 21,
    name: "Ready Compact Family Apartment",
    category: "Ready-Flat",
    location: "Aftabnagar",
    price: "7000000",
    size: "1000",
    image: "",

    moreDetails: {
      FullLocation:
        "📍 Block H, Sector 2, Road No. 2, Near Addar Mor, Aftabnagar, Dhaka.",

      FullDetails: `
    • Apartment Size: 1,000 Sq Ft
    • 100% Ready-to-Move Apartment
    • Two Apartments Available on the Same Floor
    • G+7 Residential Building
    • Built on 3.5 Katha of Land
    • Only 2 Apartments Per Floor
    • 2 Spacious Bedrooms
    • 2 Modern Bathrooms
    • 1 Balcony
    • Comfortable Drawing Room
    • Separate Dining Area
    • Well-Planned Kitchen
    • 1 Staircase
    • 24/7 CCTV Surveillance
    • Round-the-Clock Security Guard
    • Uninterrupted Water & Electricity Supply
    • Spacious Open Rooftop
    • One Dedicated Car Parking Available if Both Apartments are Purchased Together
    • Apartment Price: BDT 7,000,000 (70 Lakh)
    `,

      galleryImages: [
        "",
        "",
        "",
        ""
      ],

      videoUrl: "https://youtu.be/GH0aTFNKboI?si=cHeJ7hxXiAzOE2YO"
    }
  },

];