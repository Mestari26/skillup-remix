/* eslint-disable no-console */
import { LinksFunction, LoaderFunction } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { Game } from '~/models/games';
import { Player } from '~/models/players';
import stylesheet from '~/styles/loaders.css';
import { linkStyles } from '~/utils/styles';

export const links: LinksFunction = () => [...linkStyles(stylesheet)];

export const loader: LoaderFunction = async (): Promise<Player> => {
  const res = await fetch(
    `https://${process.env.RAPID_API_HOST}/players?page=${Math.floor(Math.random() * 150)}`,
    {
      headers: {
        'X-RapidAPI-Host': process.env.RAPID_API_HOST || '',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
      },
    }
  ).then(r => r.json());
  return res?.data[Math.floor(Math.random() * 25)];
};

export default function DataFetchingPage(): JSX.Element {
  const player = useLoaderData<Player>();

  const [playerName, setPlayerName] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<number | null>();

  const searchPlayerFetcher = useFetcher<Player[]>();
  const gamesFetcher = useFetcher<Game[]>();
  const delayLoadFetcher = useFetcher<string>();
  const delaySubmitFetcher = useFetcher<string>();

  const handlePlayerNameSearchChange = (name: string): void => {
    setPlayerName(name);
    searchPlayerFetcher.load(`/api/player?search=${name}`);
  };

  const handlePageSelect = (id: number): void => {
    setSelectedTeam(id);
    gamesFetcher.load(`/api/games/${id}`);
  };

  return (
    <section className="pageContent">
      <h2>Data fetching</h2>
      <p>
        Loadery można wykorzystać również podczas dynamicznego zaciągania danych. W tym celu należy
        stworzyć ścieżki (tak jak widoki), które będą eksportowały funkcję loadera. Wszystko nadal
        wykonuje się po stronie serwera, ale jest wywoływane dynamicznie z poziomu przeglądarki
      </p>
      <div className="pageSubContent">
        <h3>Loader</h3>
        <p>Wczytanie losowego zawodnika - tylko raz - podczas renderowania strony</p>
        <div className="loaderPlayer">
          <div className="loaderPlayerName">
            <span>{player.position}</span> {player.first_name} {player.last_name}
          </div>
          <div className="loaderPlayerTeam">{player.team.full_name}</div>
        </div>
      </div>
      <div className="pageSubContent">
        <h3>useFetcher</h3>
        <ul>
          Właściwości hooka useFetcher()
          <li>
            <i>state</i> - idle, submitting, loading
          </li>
          <li>
            <i>type</i>
            <ul>
              <li>
                idle
                <ul>
                  <li>init</li>
                  <li>done</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                submitting
                <ul>
                  <li>actionSubmission</li>
                  <li>loaderSubmission</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                loading
                <ul>
                  <li>actionReload</li>
                  <li>actionRedirect</li>
                  <li>load</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <i>load()</i>
          </li>
          <li>
            <i>data</i>
          </li>
          <li>
            <i>submission()</i>
          </li>
          <li>
            <i>Form</i>
          </li>
          <li>
            <i>submit()</i>
          </li>
        </ul>
        <Button
          className={'useFetcherButton'}
          onClick={() =>
            delayLoadFetcher.load('/api/delay')
          }>{`load() - ${delayLoadFetcher.type}`}</Button>
        <Button
          className={'useFetcherButton'}
          onClick={() =>
            delaySubmitFetcher.submit({ some: 'value' }, { action: '/api/delay', method: 'post' })
          }>{`submit() - ${delaySubmitFetcher.type}`}</Button>
        <div className="pageSubContent">
          <h5>Search param</h5>
          <p>
            <i>{`?search=${playerName}`}</i>
          </p>
          <Input value={playerName} onChange={handlePlayerNameSearchChange} />
          {searchPlayerFetcher?.data && playerName && (
            <ul>
              {searchPlayerFetcher.data.map(player => (
                <li key={player?.id}>
                  {player?.first_name} {player?.last_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="pageSubContent">
          <h5>Route param</h5>
          <p>
            <i>{'/api/games/$page'}</i>
          </p>
          <div className="routeParamPagesButtons">
            {[1, 2, 3, 4, 5, 6].map(pageNumber => (
              <Button key={pageNumber} onClick={() => handlePageSelect(pageNumber)}>
                {pageNumber}
              </Button>
            ))}
          </div>
          <div>
            {gamesFetcher.state === 'loading' && 'Loading...'}
            {gamesFetcher?.data &&
              gamesFetcher?.state === 'idle' &&
              Number.isInteger(selectedTeam) && (
                <ul>
                  {gamesFetcher.data.map(game => (
                    <li key={game.id}>
                      {game.home_team.full_name}{' '}
                      <i>
                        {game.home_team_score} - {game.visitor_team_score}
                      </i>{' '}
                      {game.visitor_team.full_name}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
