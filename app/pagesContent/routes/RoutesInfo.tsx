import { routesFolderStructure } from '~/code/routes';
import Code from '~/components/Code';

export default function RoutesInfo(): JSX.Element {
  return (
    <div>
      <h2>Ścieżki</h2>
      <p>
        W remixie używany jest system plików znany z innych frameworków jak np. <i>Next.js</i>, w
        którym nazwa pliku jest równoważna ze ścieżką, która do niego prowadzi. Oznacza to więc, że
        w pliku o nazwie <i>menu.tsx</i> znajdzie się widok, który będzie dostępny pod ścieżką{' '}
        <i>/menu</i>.
      </p>
      <p>
        Możemy również parametryzować ścieżki z użyciem <i>$</i>, więc ścieżka, np. z dynamicznym id
        będzie wyglądała następująco: <i>$id</i>.
      </p>
      <Code language="apache">{routesFolderStructure}</Code>
    </div>
  );
}
