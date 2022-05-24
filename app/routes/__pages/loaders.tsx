/* eslint-disable no-console */
import { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';

import { loaderFunctionExample, searchParamsInLoaderExample } from '~/code/loaders';
import Code from '~/components/Code';
import { Team } from '~/models/teams';

export const loader: LoaderFunction = params => {
  console.log(new URL(params.request.url).searchParams);
  return { teamIndex: Math.floor(Math.random() * 30) };
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const title = parentsData?.root?.[data?.teamIndex]?.full_name || '';
  return { title };
};

export default function LoadersPage(): JSX.Element {
  const data = useLoaderData();
  const teams = useOutletContext<Team[]>();

  const teamsCode = teams.map(team => `${JSON.stringify(team)}\n`).join('');

  return (
    <section className="pageContent">
      <h2>Loaders</h2>
      <p>
        Każda trasa może posiadać zdefiniowaną funkcję <i>loader</i>, w której będą wczytywane dane
        potrzebne do wygenerowania strony. Funkcja ta wykonuje się po stronie serwera.
      </p>
      <p>
        Dane z loaderów w przeciwieństwie to danych z innych funkcji, jak meta czy links, nie są
        domyślnie przekazywane do dzieci. W celu skorzystania z danych loadera root w potomnej
        ścieżce, konieczne jest użycie kontekstu komponentu <i>{'<Outlet context={data}>'}</i>. Tak
        przekazane dane są następnie dostępne w zagnieżdżonych ścieżkach dzięki hookowi{' '}
        <i>useOutletContext()</i>
      </p>
      <ul>
        Paramtery funkcji loader:
        <li>
          <i>params</i>
        </li>
        <li>
          <i>request</i>
        </li>
      </ul>
      <Code>{loaderFunctionExample}</Code>
      <div className="pageSubContent">
        <h3>Dane</h3>
        <Code>{JSON.stringify(data)}</Code>
      </div>
      <div className="pageSubContent">
        <h3>Context</h3>
        <Code>{teamsCode}</Code>
      </div>
      <div className="pageSubContent">
        <h3>Search Params</h3>
        <Code>{searchParamsInLoaderExample}</Code>
      </div>
    </section>
  );
}
