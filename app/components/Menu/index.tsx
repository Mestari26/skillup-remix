import { Link } from '@remix-run/react';

import { menuOptions } from '~/helpers/paths';

import stylesheet from './index.css';

export const styles = [{ rel: 'stylesheet', href: stylesheet }];

export default function Menu(): JSX.Element {
  return (
    <div className="menuWrapper">
      {menuOptions.map(option => (
        <Link key={option.path} to={option.path}>
          <div className="menuOption">
            <h2>{option.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
