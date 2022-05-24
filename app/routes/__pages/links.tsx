import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { CSSProperties } from 'react';

import { linksContentExample, sharedStylesExample, surfacingStylesExample } from '~/code/links';
import Code from '~/components/Code';
import stylesheet from '~/styles/links.css';
import { linkStyles } from '~/utils/styles';

export const links: LinksFunction = () => linkStyles(stylesheet);

export default function LinksPage(): JSX.Element {
  const subContentCodeBlocksStyles: CSSProperties = { marginBottom: '24px', marginTop: '12px' };
  return (
    <div>
      <Outlet />
      <section className="pageContent">
        <h2>Links</h2>
        <p>
          Funkcja, dzięki której możliwe jest zaaplikowanie <i>{'<link />'}</i> wewnątrz tagu{' '}
          <i>{'<head>'}</i>
        </p>
        <p>
          Funkcja links, tak jak i pozostałe (m.in. meta, loaders, itp.) operuje w kontekście
          ścieżki i jej dzieci
        </p>
        <Code>{linksContentExample}</Code>
        <div className="pageSubContent">
          <h4>Style</h4>
          <ul>
            <li>
              <i>współdzielone style</i> - umieszczenie w jednym pliku, z którego zostaną
              zaimportowane w <i>root.tsx</i>
              <Code customStyle={subContentCodeBlocksStyles}>{sharedStylesExample}</Code>
            </li>
            <li>
              <i>spłaszczanie struktury</i>
              <Code customStyle={subContentCodeBlocksStyles}>{surfacingStylesExample}</Code>
            </li>
            <li>
              <i>Tailwind CSS</i>
            </li>
            <li>
              <i>CSS Preprocesors</i>
            </li>
            <li>
              <i>CSS in JS</i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
