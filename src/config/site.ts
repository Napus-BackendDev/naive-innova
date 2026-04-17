export const siteConfig = {
  name: "NexusUI",
  description: "A premium React app built with Material UI and Tailwind CSS.",
  url: "http://localhost:5173",
  links: {
    github: "https://github.com/nexusui",
    twitter: "https://twitter.com/nexusui",
    linkedin: "https://linkedin.com/company/nexusui",
  },
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' }
  ]
};

export type SiteConfig = typeof siteConfig;
