import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import { CatchBoundaryComponent } from '@remix-run/react/routeModules';

import componentsStyles from '~/components';
import Header from '~/components/Header';
import { fontsLinks } from '~/helpers/fonts';
import globalStyles from '~/styles/index.css';
import pageStyles from '~/styles/page.css';
import { linkStyles } from '~/utils/styles';

import { Team } from './models/teams';

export const links: LinksFunction = () => [
  ...linkStyles(globalStyles, pageStyles),
  ...componentsStyles,
  ...fontsLinks,
  {
    rel: 'icon',
    href: '/favicon-32x32.png',
    type: 'image/png',
  },
];

export const meta: MetaFunction = () => {
  return { title: 'SkillUp #6 - Remix' };
};

export const loader: LoaderFunction = async (): Promise<Team[]> => {
  const res = await fetch(`https://${process.env.RAPID_API_HOST}/teams?page=0`, {
    headers: {
      'X-RapidAPI-Host': process.env.RAPID_API_HOST || '',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
    },
  }).then(r => r.json());
  return res?.data || [];
};

export default function App(): JSX.Element {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="mainWrapper">
          <Header />
          <section className="mainOutletWrapper">
            <Outlet context={data} />
          </section>
          <footer className="mainFooter">
            <span>Tobiasz Pilnicki - NubiSoft</span>
          </footer>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Oh no!</h1>
        <h3>Something bad happend</h3>
        <p>Data: {caught.data}</p>
        <p>Status: {caught.status}</p>
        <p>Status text: {caught.statusText}</p>
        <Scripts />
      </body>
    </html>
  );
};
