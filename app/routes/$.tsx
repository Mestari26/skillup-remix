import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = ({ params, request }) => {
  return { params, request: { ...request, url: request.url } };
};

export default function CatchAllRoute(): JSX.Element {
  const data = useLoaderData();
  return (
    <div className="pageContent">
      <ul>
        Params:
        {Object.entries(data.params).map(param => (
          <li key={param[0]}>
            <i>{param[0]}</i> - {param[1]}
          </li>
        ))}
      </ul>
      <ul>
        Request:
        {Object.entries(data.request).map(param => (
          <li key={param[0]}>
            <i>{param[0]}</i> - {param[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}
