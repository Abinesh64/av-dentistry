export const CLINIC = {
  name: "AV Dentistry",
  tagline: "Healthy Smiles. Trusted Care.",
  phone: "6383717631",
  phoneDisplay: "+91 63837 17631",
  whatsapp: "https://wa.me/916383717631",
  instagram: "https://instagram.com/",
  googleReviews: "https://maps.google.com/",
  address: {
    line1: "No.50, Thiruvalluvar Street,",
    line2: "Kandhanchavadi, OMR,",
    city: "Chennai – 600096,",
    state: "Tamil Nadu, India",
    full: "No.50, Thiruvalluvar Street, Kandhanchavadi, OMR, Chennai – 600096, Tamil Nadu, India",
  },
  hours: {
    days: "Mon – Sun",
    morning: "9:30 AM – 1:00 PM",
    evening: "5:00 PM – 9:00 PM",
    short: "9:30 AM–1 PM · 5 PM–9 PM",
  },
  rating: 5.0,
  mapEmbed:
    "https://maps.google.com/maps?q=AV+Dentistry,+No.50+Thiruvalluvar+Street,+Kandhanchavadi,+OMR,+Chennai+600096&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Patients Treated", value: 2000, suffix: "+" },
  { label: "Successful Procedures", value: 5000, suffix: "+" },
  { label: "Google Rating", value: 5, suffix: "★", decimals: 1 },
] as const;

export const TREATMENTS = [
  {
    title: "Dental Cleaning",
    description: "Professional scaling and polishing for a brighter, healthier smile.",
    icon: "Sparkles",
  },
  {
    title: "Tooth Filling",
    description: "Restore damaged teeth with durable, natural-looking fillings.",
    icon: "Shield",
  },
  {
    title: "Root Canal Treatment",
    description: "Save infected teeth with gentle, painless root canal therapy.",
    icon: "Activity",
  },
  {
    title: "Tooth Extraction",
    description: "Safe and comfortable extractions when preservation isn't possible.",
    icon: "MinusCircle",
  },
  {
    title: "Dental Crowns",
    description: "Custom crowns to restore strength, shape, and appearance.",
    icon: "Crown",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening for a noticeably brighter smile.",
    icon: "Sun",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and more.",
    icon: "Gem",
  },
  {
    title: "Preventive Dentistry",
    description: "Regular checkups and care to prevent dental problems early.",
    icon: "HeartPulse",
  },
] as const;

export const WHY_US = [
  {
    title: "Expert Care",
    description: "Personalized treatment plans.",
    icon: "Stethoscope",
  },
  {
    title: "Modern Technology",
    description: "Latest dental equipment.",
    icon: "Cpu",
  },
  {
    title: "Affordable Pricing",
    description: "Quality care at reasonable cost.",
    icon: "IndianRupee",
  },
  {
    title: "Painless Procedures",
    description: "Patient comfort is our priority.",
    icon: "Smile",
  },
  {
    title: "Hygiene Standards",
    description: "Sterilized and safe environment.",
    icon: "ShieldCheck",
  },
  {
    title: "Convenient Location",
    description: "Easy access in OMR Chennai.",
    icon: "MapPin",
  },
] as const;

export const FACILITIES = [
  {
    title: "Digital Diagnostics",
    description: "Advanced imaging for precise diagnosis and treatment planning.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    title: "Comfortable Treatment Rooms",
    description: "Relaxing, modern rooms designed for your comfort.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
  {
    title: "Sterilization Protocols",
    description: "Strict hygiene and sterilization for every procedure.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },
  {
    title: "Patient Waiting Lounge",
    description: "A welcoming space while you wait for your appointment.",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
  },
  {
    title: "Emergency Dental Care",
    description: "Prompt care when you need urgent dental attention.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
  },
  {
    title: "Modern Dental Equipment",
    description: "State-of-the-art tools for effective, gentle treatments.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },
] as const;

export const REVIEWS = [
  {
    name: "Preetha Gayathri Jayaraman",
    rating: 5,
    text: "Had a wonderful experience at AV Dentistry. Dr. Aishwarya explained everything clearly and made me feel comfortable throughout the root canal procedure. Highly recommended.",
  },
  {
    name: "Dhaya",
    rating: 5,
    text: "Professional and friendly service. My cavity cleaning and filling procedure was smooth and comfortable.",
  },
  {
    name: "Swetha J",
    rating: 5,
    text: "Very comfortable experience. Teeth cleaning and treatment were painless. Extremely happy with the results.",
  },
  {
    name: "Guna Seelan D",
    rating: 5,
    text: "Excellent treatment for my mother's dental issue. Friendly staff and a welcoming clinic atmosphere.",
  },
  {
    name: "Anish Kumar",
    rating: 5,
    text: "Dr. Aishwarya was fantastic. The tooth filling process was painless and thoroughly explained.",
  },
] as const;

export const APPOINTMENT_TREATMENTS = [
  "Dental Cleaning",
  "Tooth Filling",
  "Root Canal",
  "Teeth Whitening",
  "Dental Crown",
  "Tooth Extraction",
  "General Consultation",
] as const;
