export const projects = [
  {
    title: "Photo Studio Booking System",
    slug: "photo-studio-booking",
    category: "Full-Stack Web App",
    description: "A comprehensive booking and management system for a high-end photography studio, featuring real-time scheduling and automated payments.",
    results: ["40% increase in bookings", "Zero double-bookings", "Automated invoicing"],
    image: "Studio",
    liveUrl: "https://example.com",
    fullDescription: "This project involved building a custom booking engine from the ground up. We integrated complex scheduling logic to handle multiple photographers and studios, while ensuring a seamless user experience for the clients. The system also handles automated email notifications and payment processing via Stripe.",
    challenge: "The studio was struggling with manual bookings, double-bookings, and late payments. They needed a centralized system that could handle their complex scheduling requirements and automate their financial workflows.",
    solution: "We developed a custom web application using Next.js and Supabase. The solution included a real-time calendar, automated payment collection, and a client portal for managing bookings and invoices.",
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Retail Store Website + Admin Panel",
    slug: "retail-store-admin",
    category: "E-Commerce",
    description: "A custom e-commerce solution for a luxury retail store, including a powerful admin panel for inventory and order management.",
    results: ["25% higher conversion rate", "Streamlined inventory", "Mobile-first experience"],
    image: "Retail",
    liveUrl: "https://example.com",
    fullDescription: "We created a premium e-commerce experience that reflects the luxury nature of the brand. The platform features a high-performance storefront and a robust administrative backend for managing products, orders, and customer data.",
    challenge: "The client had an outdated website that didn't reflect their brand's luxury positioning and was difficult to manage internally.",
    solution: "A complete brand-first e-commerce overhaul with a focus on high-quality visuals, fast performance, and an intuitive admin interface for the team.",
    technologies: ["Next.js", "Shopify Engine", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Coaching Platform with Payments",
    slug: "coaching-platform",
    category: "SaaS Platform",
    description: "A membership and content delivery platform for professional coaches, integrated with Stripe for subscription management.",
    results: ["500+ active subscribers", "Automated content delivery", "Churn reduction"],
    image: "Coach",
    liveUrl: "https://example.com",
    fullDescription: "This SaaS platform allows coaches to host their content, manage their community, and handle subscriptions in one place. We focused on building a scalable architecture that could grow with the client's business.",
    challenge: "The client was using multiple fragmented tools for content delivery, payments, and community management, leading to a poor user experience and high overhead.",
    solution: "An all-in-one coaching platform that centralizes content, community, and commerce, providing a unified experience for both coaches and their students.",
    technologies: ["Next.js", "Better Auth", "Stripe", "PostgreSQL"]
  },
  {
    title: "Real Estate Listing Portal",
    slug: "real-estate-portal",
    category: "Web Development",
    description: "A fast, SEO-optimized listing portal for a real estate agency, featuring advanced search filters and lead capture.",
    results: ["Top 3 Google rankings", "High lead quality", "Fastest load times"],
    image: "Estate",
    liveUrl: "https://example.com",
    fullDescription: "We built a high-performance real estate portal optimized for search engines and user conversion. The site features advanced filtering, interactive maps, and a seamless lead generation system.",
    challenge: "The agency's existing site was slow and lacked the search capabilities users expected, resulting in low engagement and poor search rankings.",
    solution: "A modern, lightning-fast listing portal with a focus on SEO and user experience, enabling potential buyers to find properties easily.",
    technologies: ["Next.js", "Sanity CMS", "Google Maps API", "Tailwind CSS"]
  }
];
