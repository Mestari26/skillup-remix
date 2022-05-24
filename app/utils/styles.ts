import { LinkDescriptor } from '@remix-run/node';

export const linkStyles = (...hrefsArr: string[]): LinkDescriptor[] =>
  hrefsArr.map(href => ({ rel: 'stylesheet', href }));
