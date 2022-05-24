export const redirectExample = `export const loader: LoaderFunction = ({ params }) => {
  const { redirectFlag } = params;
  if (redirectFlag === 'redirect') {
    return redirect('/', 301);
  } else {
    return {};
  }
}`;
