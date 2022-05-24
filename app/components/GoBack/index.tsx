import { Link } from '@remix-run/react';

export default function GoBack(): JSX.Element {
  return (
    <Link to="/" className="nubisoftTextGradient">
      Powrót do menu
    </Link>
  );
}
