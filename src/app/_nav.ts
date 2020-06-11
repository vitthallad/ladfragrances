import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'About Us',
    url: '/ladaboutus',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'LAD'
    }
  },

  {
    title: true,
    name: 'Agarbatti Products'
  },
  {
    name: 'Haripriya',
    url: '/theme/haripriya',
    icon: 'icon-magic-wand'
  },
  {
    name: 'Rajashri',
    url: '/theme/rajashree',
    icon: 'icon-magic-wand'
  },
  {
    name: 'Shri Deccan',
    url: '/theme/deccan',
    icon: 'icon-magic-wand'
  },
  {
    name: 'India Queen',
    url: '/theme/indiaqueen',
    icon: 'icon-magic-wand'
  },

];
