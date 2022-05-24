import { LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = ({ params }) => {
  const { redirectFlag } = params;
  if (redirectFlag === 'redirect') {
    return redirect('/', 301);
  } else {
    return { redirectFlag };
  }
};

export default function DoRedirect(): JSX.Element {
  const data = useLoaderData();
  return <div>{data.redirectFlag}</div>;
}
