export const loaderFunctionExample = `export const loader: LoaderFunction = async () => {
  const res = await fetch('http://example.com/api/users')
    .then(r => r.json());
  return res.data;
}`;

export const searchParamsInLoaderExample = `export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const res = await fetch(\`http://example.com/api/users/\${userId}\`)
    .then(r => r.json());
  return res.data;
}`;
