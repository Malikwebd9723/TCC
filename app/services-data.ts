export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  iconName: string;
  images: string[];
}

export const services: Service[] = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    shortDescription: "Comprehensive project management and execution for residential and commercial builds.",
    detailedDescription: "Tradecraft Consulting & Contracting provides top-tier general contracting services, managing your project from initial conception to final inspection. We specialize in coordinating complex construction schedules, managing sub-contractors, and ensuring all work meets our rigorous standards of quality and safety. Our team handles every aspect of the build, allowing you to focus on your vision while we handle the technical execution.",
    features: [
      "Residential & Commercial Project Management",
      "Permit Acquisition & Code Compliance",
      "Budgeting & Cost Estimation",
      "Vendor & Sub-contractor Coordination",
      "On-site Supervision",
      "Quality Assurance & Safety Inspections"
    ],
    iconName: "building",
    images: ["/service-gc.png", "/hero.png", "/about.png"],
  },
  {
    slug: "electrical",
    title: "Electrical - Licensed",
    shortDescription: "Expert electrical installations and maintenance by certified professionals.",
    detailedDescription: "Our licensed electrical team handles everything from complex industrial wiring to high-end residential smart home integrations. Safety is our priority, ensuring all installations are up to code and built for long-term reliability. We provide consistent, high-power solutions for demanding environments, including data centers, residential complexes, and industrial plants.",
    features: [
      "Industrial Power Systems",
      "Commercial Wiring & Lighting",
      "Panel Upgrades & Maintenance",
      "Licensed Electrical Inspection",
      "Troubleshooting & Emergency Repairs",
      "Smart Home & Automation Integration"
    ],
    iconName: "bolt",
    images: ["/service-electrical.png", "/service-gc.png", "/careers.png"],
  },
  {
    slug: "carpentry",
    title: "Carpentry & Framing",
    shortDescription: "High-quality drywall, framing, and detailed carpentry work for any structure.",
    detailedDescription: "The structural integrity and aesthetic finish of a project depend on expert carpentry. Danny DeSantis and the TCC team bring decades of experience in framing, drywall installation, and fine finish carpentry. We transform raw materials into the backbone and beauty of your space, specializing in walnut, oak, and other premium hardwoods.",
    features: [
      "Structural Framing",
      "Drywall Installation & Finishing",
      "Custom Cabinetry & Trim",
      "Window & Door Framing",
      "Remodeling & Restorations",
      "Fine Finish Woodwork"
    ],
    iconName: "hammer",
    images: ["/service-carpentry.png", "/about.png", "/hero.png"],
  },
  {
    slug: "plumbing",
    title: "Plumbing & Water",
    shortDescription: "Specialized services in sewer, water lines, and general plumbing infrastructure.",
    detailedDescription: "From industrial sewer systems to residential water heaters, TCC provides reliable plumbing infrastructure services. We handle large-scale water line installations and precise fixture fittings, ensuring your facility's water systems are efficient and leak-free. Our approach combines traditional craftsmanship with modern diagnostic tools.",
    features: [
      "Sewer & Water Line Installation",
      "Industrial Plumbing Systems",
      "Hot Water Heater Service",
      "Fixture Replacement & Repair",
      "Drainage Solutions",
      "Preventative Maintenance Programs"
    ],
    iconName: "droplet",
    images: ["/about.png", "/service-gc.png", "/careers.png"],
  },
  {
    slug: "hvac",
    title: "HVAC & Cooling",
    shortDescription: "Heat pumps, chillers, and complete HVAC systems for temperature control.",
    detailedDescription: "TCC specializes in high-efficiency climate control systems. We install and maintain advanced HVAC units, heat pumps, and chillers for both residential and commercial buildings. Our solutions focus on energy efficiency and year-round comfort, utilizing the latest in smart thermostat technology and air filtration.",
    features: [
      "Heat Pump Installation",
      "Commercial Chillers & Cooling",
      "Forced Air Systems",
      "System Maintenance & Optimization",
      "Thermostat & Control Integrations",
      "Indoor Air Quality Solutions"
    ],
    iconName: "fan",
    images: ["/careers.png", "/service-carpentry.png", "/service-electrical.png"],
  },
];
