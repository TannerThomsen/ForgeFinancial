# Forge Financial Solutions

Next.js website rebuild for Forge Financial Solutions.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Contact form sending uses Resend. Add this environment variable in Vercel:

```bash
RESEND_API_KEY=...
```

Optional deployment variables:

```bash
RESEND_FROM_EMAIL=Forge Financial Solutions <hello@your-verified-domain.com>
CONTACT_TO_EMAIL=Inquiry@forgefinancialsolution.com
```

## Build

```bash
npm run build
```
