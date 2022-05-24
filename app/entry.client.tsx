/* eslint-disable no-console */
import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

console.log('Hello in browser!');

hydrate(<RemixBrowser />, document);
