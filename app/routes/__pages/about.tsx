export default function AboutPage(): JSX.Element {
  return (
    <div>
      <section className="pageContent">
        <h2>Co to w ogóle jest?</h2>
        <p>
          Fullstackowy framework webowy. Stworzony przez twórców React Routera.
          <br /> (Ryan Florence, Michael Jackson, Kent C. Dodds)
        </p>
        <p>
          <i>{'"People are gonna love using your stuff."'}</i>
        </p>
        <ul>
          Remix, czyli:
          <li>
            <i>React</i>
          </li>
          <li>
            <i>React Router</i>
          </li>
          <li>
            <i>SSR</i>
          </li>
          <li>
            <i>esbuild</i>
          </li>
          <li>
            <i>Remix server</i>
          </li>
        </ul>
        <p>Alternatywa dla Next.js.</p>
        <div>
          <h4>Wymagane pliki</h4>
          <ul>
            <li>
              <i>remix.config.js</i> - plik konfiguracyjny
            </li>
            <li>
              <i>entry.server.tsx</i> - plik uruchamiający się podczas startu serwera
            </li>
            <li>
              <i>entry.client.tsx</i> - plik uruchamiany podczas startu aplikacji po stronie klienta
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
