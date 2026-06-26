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
    shortDescription: "Complete project management and field execution for residential, commercial, and industrial builds.",
    detailedDescription: "Tradecraft Consulting & Contracting provides top-tier general contracting services, managing residential, commercial, and industrial projects from initial conception to final inspection. We coordinate schedules, manage sub-contractors, sequence trades, and ensure every phase meets rigorous standards for quality, safety, and code compliance.",
    features: [
      "Residential, Commercial & Industrial Project Management",
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
    shortDescription: "Licensed electrical installation, upgrades, diagnostics, and maintenance.",
    detailedDescription: "Our licensed electrical team handles everything from complex industrial wiring to high-end residential and commercial electrical upgrades. Safety is our priority, ensuring all installations are up to code and built for long-term reliability. We provide consistent power solutions for demanding environments, including residential properties, commercial spaces, and industrial facilities.",
    features: [
      "Industrial Power Systems",
      "Residential Electrical Service",
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
    title: "Carpentry, Framing & Drywall",
    shortDescription: "Framing, drywall, finish carpentry, and repair work for durable interior and exterior builds.",
    detailedDescription: "The structural integrity and aesthetic finish of a project depend on expert carpentry. Danny DeSantis and the TCC team bring decades of experience in framing, drywall installation, repairs, and fine finish carpentry. We transform raw materials into the backbone and finished detail of residential, commercial, and industrial spaces.",
    features: [
      "Structural Framing",
      "Drywall Installation & Finishing",
      "Drywall Repair & Patching",
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
    title: "Plumbing, Sewer & Water",
    shortDescription: "Plumbing service, sewer work, water lines, drainage, fixtures, and water-heater support.",
    detailedDescription: "From sewer and water-line infrastructure to residential water heaters and fixture work, TCC provides reliable plumbing services for residential, commercial, and industrial properties. We handle water line installations, sewer coordination, drainage solutions, repairs, and precise fixture fittings with clean execution and practical diagnostics.",
    features: [
      "Sewer & Water Line Installation",
      "Sewer Service & Repair Coordination",
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
    title: "HVAC, Heat Pumps & Chillers",
    shortDescription: "HVAC service, heat pumps, chillers, controls, and climate systems for year-round comfort.",
    detailedDescription: "TCC specializes in high-efficiency climate control systems. We install and maintain HVAC units, heat pumps, chillers, controls, and air-quality systems for residential, commercial, and industrial buildings. Our solutions focus on energy efficiency, year-round comfort, and dependable system performance.",
    features: [
      "Heat Pump Installation",
      "Commercial Chillers & Cooling",
      "Industrial HVAC Support",
      "Forced Air Systems",
      "System Maintenance & Optimization",
      "Thermostat & Control Integrations",
      "Indoor Air Quality Solutions"
    ],
    iconName: "fan",
    images: ["/careers.png", "/service-carpentry.png", "/service-electrical.png"],
  },
  {
    slug: "residential-commercial-industrial",
    title: "Residential, Commercial & Industrial",
    shortDescription: "Trade services scaled for homes, businesses, facilities, and industrial project sites.",
    detailedDescription: "TCC supports residential, commercial, and industrial clients with coordinated trade work across contracting, licensed electrical, carpentry, framing, drywall, plumbing, sewer, water, HVAC, heat pumps, and chillers. Whether the work is a home renovation, commercial fit-out, facility upgrade, or industrial infrastructure task, we align the right trades and standards to the project.",
    features: [
      "Residential Renovations & Repairs",
      "Commercial Fit-outs & Upgrades",
      "Industrial Infrastructure Support",
      "Multi-trade Project Coordination",
      "Maintenance & Improvement Planning",
      "Code-focused Field Execution"
    ],
    iconName: "building",
    images: ["/project-1.png", "/project-2.png", "/project-3.png"],
  },
];
