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
