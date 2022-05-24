export const routesFolderStructure = `app/
├── routes/
│   ├── blog/
│   │   ├── $postId.tsx
│   │   ├── categories.tsx
│   │   ├── index.tsx
│   └── about.tsx
│   └── index.tsx
└── root.tsx`;

export const catchBoundaryExample = `import { useCatch } from "remix";

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
    </div>
  );
}`;

export const errorBoundaryExample = `export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Something weird happened...</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Your Error UI comes here */}
        <Scripts />
      </body>
    </html>
  );
}`;
