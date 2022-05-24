import { LinksFunction } from '@remix-run/node';

import CatchAndErrorBoundaries from '~/pagesContent/routes/CatchAndErrorBoundaries';
import Layout from '~/pagesContent/routes/Layout';
import NamingConvention from '~/pagesContent/routes/NamingConvention';
import RoutesInfo from '~/pagesContent/routes/RoutesInfo';
import stylesheet from '~/styles/routes.css';
import { linkStyles } from '~/utils/styles';

export const links: LinksFunction = () => linkStyles(stylesheet);

export default function RoutesPage(): JSX.Element {
  return (
    <div>
      <section className="pageContent">
        <RoutesInfo />
        <NamingConvention />
        <Layout />
        <CatchAndErrorBoundaries />
      </section>
    </div>
  );
}
