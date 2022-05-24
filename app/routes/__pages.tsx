import { Outlet, useOutletContext } from '@remix-run/react';

import GoBack from '~/components/GoBack';

export default function PathRoute(): JSX.Element {
  return (
    <div className="pathRouteSection">
      <GoBack />
      <Outlet context={useOutletContext()} />
    </div>
  );
}
