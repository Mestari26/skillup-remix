import { ActionFunction, LoaderFunction } from '@remix-run/node';

import { delay } from '~/utils/delay';

export const loader: LoaderFunction = async () => {
  await delay(3000);
  return 'LOADER DONE';
};

export const action: ActionFunction = async () => {
  await delay(3000);
  return 'ACTION DONE';
};
