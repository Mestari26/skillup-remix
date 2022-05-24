type MenuOption = {
  name: string;
  path: string;
  description?: string;
};

export const menuOptions: MenuOption[] = [
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Routes',
    path: 'routes',
  },
  {
    name: 'Links',
    path: 'links',
  },
  {
    name: 'Meta',
    path: 'meta',
  },
  {
    name: 'Loaders',
    path: 'loaders',
  },
  {
    name: 'Actions',
    path: 'actions',
  },
  {
    name: 'Data fetching',
    path: 'data-fetching',
  },
  {
    name: 'vs Next.js',
    path: 'vs-next-js',
  },
  {
    name: 'vs Campstar',
    path: 'vs-campstar',
  },
];
