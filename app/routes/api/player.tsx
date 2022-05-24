import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const res = await fetch(`https://${process.env.RAPID_API_HOST}/players?search=${search}`, {
    headers: {
      'X-RapidAPI-Host': process.env.RAPID_API_HOST || '',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
    },
  }).then(r => r.json());
  return res?.data || [];
};
