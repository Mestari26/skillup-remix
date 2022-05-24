import classNames from 'classnames';

import { linkStyles } from '~/utils/styles';

import stylesheet from './index.css';

export const styles = linkStyles(stylesheet);

type Props = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
};

export default function Input(props: Props): JSX.Element {
  const { className = '', value, onChange, placeholder = '', name = '' } = props;
  return (
    <input
      className={classNames('input', className)}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      name={name}
    />
  );
}
