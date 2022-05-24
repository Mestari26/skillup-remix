import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params }) => {
  const { page } = params;
  const res = await fetch(`https://${process.env.RAPID_API_HOST}/games?page=${page})}`, {
    headers: {
      'X-RapidAPI-Host': process.env.RAPID_API_HOST || '',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
    },
  }).then(r => r.json());
  return res?.data || [];
};
