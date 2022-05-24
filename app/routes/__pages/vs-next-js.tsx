export default function VsNextJsPage(): JSX.Element {
  return (
    <div>
      <section className="pageContent">
        <h2>Porównanie z Next.js</h2>
        <ul className="comparisonList">
          <li>
            Ścieżki z parametrem - <span className="blueText">$id</span> w{' '}
            <span className="blueText">Remixie</span>, a <span className="greenText">[id]</span> w{' '}
            <span className="greenText">Next</span>
          </li>
          <li>
            Layout
            <p>
              W <span className="greenText">Next</span> skorzystalibyśmy z komponentu{' '}
              <code>{'<Layout>'}</code>, gdyż <span className="greenText">Next</span> nie obsługuje
              ścieżek z layoutami. Natomiast w <span className="blueText">Remixie</span> wystarczy
              skorzystać z <span className="blueText">{'"Pathless Layout Routes"'}</span> oraz{' '}
              <code>{'<Outlet />'}</code>
            </p>
          </li>
          <li>
            Generowanie stron
            <ul>
              <li>
                SSR - <span className="greenText">Next</span> i{' '}
                <span className="blueText">Remix</span>
              </li>
              <li>
                CSR - <span className="greenText">Next</span> i{' '}
                <span className="blueText">Remix</span>
              </li>
              <li>
                SSG - <span className="greenText">Next</span>
              </li>
              <li>
                ISR - <span className="greenText">Next</span>
              </li>
            </ul>
          </li>
          <li>
            Wczytywanie danych
            <ul>
              <li>
                Server-side at runtime
                <ul>
                  <li>
                    getServerSideProps - <span className="greenText">Next</span>
                  </li>
                  <li>
                    loader - <span className="blueText">Remix</span>
                  </li>
                </ul>
              </li>
              <li>
                Client-side at runtime
                <ul>
                  <li>
                    useFetcher - <span className="blueText">Remix</span>
                  </li>
                </ul>
              </li>
              <li>
                Server-side at build time
                <ul>
                  <li>
                    getStaticProps - <span className="greenText">Next</span>
                  </li>
                  <li>
                    getStaticPaths - <span className="greenText">Next</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Non UI routes
            <ul>
              <li>
                API routes - <span className="greenText">Next</span>
              </li>
              <li>
                Recource routes - <span className="blueText">Remix</span>
              </li>
            </ul>
          </li>
          <li>
            Mutacje danych
            <ul>
              <li>
                <span className="greenText">Next</span> posiada wiele opcji ładowania danych,
                natomiast nie ma wbudowanej obsługi mutacji danych
              </li>
              <li>
                <span className="blueText">Remix</span> posiada komponent <code>{'<Form>'}</code>{' '}
                oraz funkcję action, dzięki której możliwe jest proste zaimplementowanie obsługi
                formularzy nawet bez JS
              </li>
            </ul>
          </li>
          <li>
            Style
            <ul>
              <li>
                <span className="greenText">Next</span> posiada wsparcie modułów CSS, styled-jsx
                jako domyślny CSS in JS, ale również umożliwia podpięcie dowolnego frameworka bez
                większych problemów.
              </li>
              <li>
                <span className="blueText">Remix</span> niestety nie posiada wsparcia modułów CSS.
                Dodatkowo polega na prostym CSS, więc użycie Sass wiąże się z koniecznością
                kompilowania plików do CSS i podpinania tychże plików w funkcji <code>links</code>
              </li>
            </ul>
          </li>
          <li>
            Internationalized Routing
            <ul>
              <li>
                <span className="greenText">Next</span> posiada wbudowaną obsługę
              </li>
              <li>
                <span className="blueText">Remix</span> nie posiada wbudowanej obsługi. Można ją
                natomiast dodać zastępując system plików routingu
              </li>
            </ul>
          </li>
          <li>
            Obsługa błędów
            <ul>
              <li>
                <span className="greenText">Next</span> umożliwia utworzenie własnych stron dla
                błędów typu 500, 404 itp.
              </li>
              <li>
                <span className="blueText">Remix</span> umożliwia obsługę błędów z wykorzystaniem
                funkcji <code>CatchBoundary</code> i <code>ErrorBoundary</code>
              </li>
            </ul>
          </li>
          <li>
            Zmienne środowiskowe
            <ul>
              <li>
                <span className="greenText">Next</span> posiada wbudowane wsparcie dla{' '}
                <code>.env</code> oraz konwencję z prefiksem, dzięki czemu w prosty sposób można
                przekazać zmienne środowiskowe do części klienta
              </li>
              <li>
                <span className="blueText">Remix</span> posiada podstawowe wsparcie dla{' '}
                <code>.env</code> oraz specjalną zmienną <code>NODE_ENV</code>
              </li>
            </ul>
          </li>
          <li>
            Deployment
            <ul>
              <li>
                Aplikację <span className="greenText">Next</span> można wdrożyć na dowolnym
                serwerze, na którym można uruchomić Node.js
              </li>
              <li>
                <span className="blueText">Remix</span> został stworzony z myślą, aby aplikację
                można było wdrożyć na dowolnej platformie. Podczas konfiguracji aplikacji, mamy do
                wyboru następujące opcje:
                <ul>
                  <li>Remix App Server</li>
                  <li>Express Server</li>
                  <li>Architect (AWS Lambda)</li>
                  <li>Fly.io</li>
                  <li>Netlify</li>
                  <li>Vercel</li>
                  <li>Cloudflare Pages</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Cookies
            <ul>
              <li>
                <span className="greenText">Next</span> nie ma wbudowanej obsługi ciasteczek
              </li>
              <li>
                <span className="blueText">Remix</span> ma wbudowane funkcje do obsługi ciasteczek
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
