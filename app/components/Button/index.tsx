import classNames from 'classnames';
import { ReactNode } from 'react';

import { linkStyles } from '~/utils/styles';

import stylesheet from './index.css';

export const styles = linkStyles(stylesheet);

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button(props: Props): JSX.Element {
  const { children, onClick = () => null, className = '', type = 'button' } = props;
  return (
    <button className={classNames('button', className)} onClick={onClick} type={type}>
      <span>{children}</span>
    </button>
  );
}
