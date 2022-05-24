import { Outlet } from '@remix-run/react';

export default function layout(): JSX.Element {
  return (
    <div>
      <h1>Layout route</h1>
      <Outlet />
    </div>
  );
}
