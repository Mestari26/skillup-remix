import { Link } from '@remix-run/react';

import { generateRandomString } from '~/utils/string';

export default function NamingConvention(): JSX.Element {
  return (
    <div>
      <h4>Nazewnictwo</h4>
      <ul style={{ marginBottom: '24px' }}>
        <li>
          <Link to="/path">
            <i>path</i>
          </Link>
        </li>
        <li>
          <Link
            to={`/${generateRandomString()}/${generateRandomString()}/${generateRandomString()}`}>
            <i>path.nested.inside</i>
          </Link>{' '}
          - ścieżki z <i>/</i>
        </li>
        <li>
          <i>$param</i> - ścieżka dynamiczna z parametrem
        </li>
        <li>
          <Link to={`/${generateRandomString()}`}>
            <i>$</i>
          </Link>{' '}
          - catch-all
        </li>
        <li>
          <i>__path</i> - Pathless layoyt routes - bez ingerencji w URL
        </li>
      </ul>
    </div>
  );
}
