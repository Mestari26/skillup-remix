import { MetaFunction } from '@remix-run/node';

import { metaFunctionExample } from '~/code/meta';
import Code from '~/components/Code';

export const meta: MetaFunction = () => {
  return { title: 'Meta info page' };
};

export default function MetaPage(): JSX.Element {
  return (
    <div>
      <section className="pageContent">
        <h2>Meta</h2>
        <p>
          Analogicznie do funkcji links zachowuje się funkcja meta, dzięki której możliwe jest
          wstrzyknięcie meta danych do tagu <i>{'<head>'}</i>
        </p>
        <ul>
          Paramtery funkcji meta:
          <li>
            <i>data</i>
          </li>
          <li>
            <i>location</i>
          </li>
          <li>
            <i>params</i>
          </li>
          <li>
            <i>parentsData</i>
          </li>
        </ul>
        <Code>{metaFunctionExample}</Code>
      </section>
    </div>
  );
}
