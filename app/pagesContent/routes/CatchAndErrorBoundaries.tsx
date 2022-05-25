import { catchBoundaryExample, errorBoundaryExample } from '~/code/routes';
import Code from '~/components/Code';

export default function CatchAndErrorBoundaries(): JSX.Element {
  return (
    <div>
      <h4>CatchBoundary i ErrorBoundary</h4>
      <p>
        Dzięki tym funkcjom, możliwe jest wyświetlenie alternatywego widoku w przypadku wystąpienia
        jakiegoś błędu. Funkcje te możemy zdefiniować dla każdej ścieżki, a w przypadku w jej braku,
        szukana ona będzie wyżej.
      </p>
      <ul>
        <li>
          Błędy <i>4xx</i> - CatchBoundary
        </li>
        <li>Pozostałe - ErrorBoundary</li>
      </ul>
      <h4>CatchBoundary</h4>
      <Code customStyle={{ marginBottom: '24px' }}>{catchBoundaryExample}</Code>
      <h4>ErrorBoundary</h4>
      <Code customStyle={{ marginBottom: '24px' }}>{errorBoundaryExample}</Code>
    </div>
  );
}
