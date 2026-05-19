# Francisco Porciel Portfolio

Personal bilingual portfolio built with Next.js 15, TypeScript and App Router.

The project is structured to show the same thing the UI says: scoped decisions, explicit data, separated sections, bilingual copy, and a contact path that can become real email without rewriting the app.

## Scripts

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Structure

```txt
src/app                  Next App Router pages, layout and API routes
src/features/home        Portfolio feature: sections, content, i18n and styling
src/features/home/data   Typed content split by locale and shared profile data
src/features/home/i18n   Language provider and persisted ES/EN switch
src/lib/contact          Contact validation, rate limit and email adapter
src/shared/config        Small shared app configuration
src/types                Local type declarations
```

## Contact Email

The contact form works in dry-run mode by default. To send real email, configure:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

See `.env.example`.

## Render Deploy

This app uses Next.js App Router and an API route for the contact form, so deploy it on Render as a **Web Service** when email sending should work.

Recommended Render settings:

```txt
Language: Node
Build Command: npm ci && npm run build
Start Command: npm run start
```

Runtime:

```txt
NODE_VERSION=22.16.0
```

The repository also includes `.node-version`, so Render can pick the same runtime from source control. Node 14 is not supported by the current dependency stack.

Required environment variables for real email:

```txt
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

Optional:

```txt
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

If the project is deployed as a Render **Static Site**, the portfolio can render as static output only if the server API route is not needed. The contact form endpoint requires a Node server.
