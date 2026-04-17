export type NavItemType = 'default' | 'mega';

export interface NavItem {
  label: string;
  path?: string;
  type?: NavItemType;
  children?: NavItem[];
}

export const navbarConfig: NavItem[] = [
  {
    label: 'navbar.home',
    path: '/',
    type: 'default'
  },
  {
    label: 'navbar.allProducts',
    type: 'mega',
    children: [
      {
        label: 'navbar.cleaningAndGrooming',
        children: [
          { label: 'navbar.bioShampoo', path: '/cleaning/bio-shampoo' },
          { label: 'navbar.shampooOil', path: '/cleaning/shampoo-oil' },
          { label: 'navbar.dryFoamShampoo', path: '/cleaning/dry-foam-shampoo' },
          { label: 'navbar.coatTreatment', path: '/cleaning/coat-treatment' },
        ]
      },
      {
        label: 'navbar.sprayAndCare',
        children: [
          { label: 'navbar.coatBacteria', path: '/spray/coat-bacteria' },
          { label: 'navbar.deodorizer', path: '/spray/deodorizer' },
          { label: 'navbar.antiFungal', path: '/spray/anti-fungal' },
          { label: 'navbar.eyeEarCleaner', path: '/spray/eye-ear-cleaner' },
        ]
      },
      {
        label: 'navbar.skinAndPowder',
        children: [
          { label: 'navbar.healingGel', path: '/skin/healing-gel' },
          { label: 'navbar.tearStainPowder', path: '/skin/tear-stain-powder' },
          { label: 'navbar.bodyPowder', path: '/skin/body-powder' },
        ]
      },
      {
        label: 'navbar.rd',
        children: [
          { label: 'navbar.rdPetProducts', path: '/rd/pet-products' },
        ]
      }
    ]
  },
  {
    label: 'navbar.branding',
    type: 'default',
    children: [
      { label: 'navbar.brandingSteps', path: '/branding/steps' },
      { label: 'navbar.innovation', path: '/branding/innovation' },
    ]
  },
  {
    label: 'navbar.news',
    type: 'default',
    children: [
      { label: 'navbar.trendsActivities', path: '/news/trends-activities' },
      { label: 'navbar.videos', path: '/news/videos' },
    ]
  },
  {
    label: 'navbar.contactUs',
    type: 'default',
    children: [
      { label: 'navbar.appointment', path: '/contact/appointment' },
      { label: 'navbar.faq', path: '/contact/faq' },
    ]
  },
];
