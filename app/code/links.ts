export const linksContentExample = `export const links: LinkFunction = () => [
  // add a favicon
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  },

  // external stylesheet
  {
    rel: "stylesheet",
    href: "https://example.com/some/styles.css",
    crossOrigin: "true",
  },

  // local stylesheet
  { rel: "stylesheet", href: stylesHref },

  // prefetch an image into the browser cache that the user is likely to see
  {
    rel: "prefetch",
    as: "image",
    href: "/img/bunny.jpg",
  },

  // only prefetch it if there is a bigger screen
  {
    rel: "prefetch",
    as: "image",
    href: "/img/bunny.jpg",
    media: "(min-width: 1000px)",
  },
]`;

export const sharedStylesExample = `// Button.tsx
[...]
import stylesheet from './Button.css';

export const styles = (): LinkDescriptor[] => [{ rel: 'stylesheet', href: stylesheet }];
[...]

// Input.tsx
[...]
import stylesheet from './Input.css';

export const styles = (): LinkDescriptor[] => [{ rel: 'stylesheet', href: stylesheet }];
[...]

// sharedStyles.ts
[...]
import { styles as buttonStyles } from './Button';
import { styles as inputStyles } from './Input';

export const styles = (): LinkDescriptor[] => [...buttonStyles(), ...inputStyles()];
[...]

// root.tsx
[...]
import { styles as componentsStyles } from '~/components/sharedStyles.ts';

export const links: LinkFunction = () => [ ...sharedStyles(), [...] ];
[...]`;

export const surfacingStylesExample = `// Input.tsx
[...]
import stylesheet from './Input.css';

export const styles = (): LinkDescriptor[] => [{ rel: 'stylesheet', href: stylesheet }];
[...]

// InputWithTopLabel.tsx
[...]
import stylesheet from './InputWithTopLabel.css';
import { styles as inputStyles } from '~/components/Input/Input.css';

export const styles = (): LinkDescriptor[] =>
  [{ rel: 'stylesheet', href: stylesheet }, ...inputStyles()];
[...]`;
