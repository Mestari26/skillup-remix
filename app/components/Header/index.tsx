import { Link } from '@remix-run/react';
import classNames from 'classnames';

import { linkStyles } from '~/utils/styles';

import stylesheet from './index.css';

export const styles = linkStyles(stylesheet);

type Props = {
  className?: string;
};

export default function Header(props: Props): JSX.Element {
  const { className = '' } = props;

  return (
    <header className={classNames('header', className)}>
      <h3>SkillUp #6</h3>
      <Link to="/">
        <h1>Remix</h1>
      </Link>
    </header>
  );
}
