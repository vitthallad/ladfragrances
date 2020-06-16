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
  
  {
    title: true,
    name: 'Other Products'
  },{
    name: 'All Products',
    url: '/allProducts',
    icon: 'icon-cursor'
  }
  ,{
    name: 'Gandham',
    url: '/gandham',
    icon: 'icon-location-pin'
  },
  {
      name: 'KumKum',
      url: '/kumkum',
      icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Contact Us'
  },
  {
    name: 'Contact',
    url: '/contactUs',
    icon: 'icon-location-pin'
},

];
