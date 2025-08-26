
export type Project = {
  id: string;
  title: string;
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
  blurb?: string;
  challenges: string[]; // 3–5 items recommended
};

const projects: Project[] = [
  {
    id: 'villa-kyiv',
    title: 'Private villa — Kyiv',
    before: {
      src: '2000', // 960×720 preferred
      alt: '3D render of boiler-room layout',
      label: '3D render',
    },
    after: {
      src: '4000',
      alt: 'Installed boiler-room photo',
      label: 'Installed',
    },
    challenges: [
      'Fit into 6 m² room',
      'Low-noise near living area',
      'Redundancy for winter peak',
    ],
  },
  {
    id: 'office-lviv',
    title: 'Office campus — Lviv',
    before: {
      src: '/img/2500-600@2x.webp',
      alt: '3D render of plantroom with cascaded boilers',
      label: '3D render',
    },
    after: {
      src: '/img/4000-600@2x.webp',
      alt: 'Photo of installed plantroom',
      label: 'Installed',
    },
    challenges: [
      'Hydraulic separation with low-loss header',
      'Zoned control for 3 buildings',
      'Service access in 10 minutes',
      'Flue routing with minimal bends',
    ],
  },
  {
    id: 'hotel-odesa',
    title: 'Seaside hotel — Odesa',
    before: {
      src: '/img/4506-600@2x.webp',
      alt: '3D render of boiler-room layout for hotel',
      label: '3D render',
    },
    after: {
      src: '/img/5067-600@2x.webp',
      alt: 'Installed boiler-room with backup system',
      label: 'Installed',
    },
    challenges: [
      'Acoustic treatment near rooms',
      'Fuel changeover safety logic',
      'Compact footprint with storage',
    ],
  },
];

export default projects;
