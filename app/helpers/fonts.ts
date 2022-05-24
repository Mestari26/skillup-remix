import { LinkDescriptor } from '@remix-run/node';

export const fontsLinks: LinkDescriptor[] = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500;700&family=Kanit:wght@100;200;300;400;500;600;700&display=swap',
  },
];
