import { Link } from '@remix-run/react';

import { redirectExample } from '~/code/vs-campstar';
import Code from '~/components/Code';

export default function VsCampstar(): JSX.Element {
  return (
    <div>
      <section className="pageContent">
        <h2>Remix vs Campstar</h2>
        <div>
          Strony SEO
          <ul>
            <li>Prismic</li>
            <li>OpenWeatherAPI</li>
            <li>MeteoStat</li>
            <li>Here API</li>
            <li>Wordpress</li>
            <li>Oferty</li>
            <li>Campstar</li>
          </ul>
        </div>
        <p>
          Wykorzystanie <code>env.NODE_ENV</code>
        </p>
        <p>
          Cache danych - <code>entry.server.js</code>
        </p>
        <p>Meta dane</p>
        <p>
          Lighthouse - <code>{'<Scripts />'}</code>
        </p>
        <ul>
          Redirect
          <li>
            <Link to={'/do/redirect'}>Strona z redirect</Link>
          </li>
          <li>
            <Link to={'/do/something'}>Strona bez redirect</Link>
          </li>
        </ul>
        <Code>{redirectExample}</Code>
      </section>
    </div>
  );
}
