# Stripe Payment Integration + TypeScript Next.js test example

## Stripe-Next-TS

This is a really simple project that shows the usage of Next.js with TypeScript.

## Note

1) The `pages/api` folder is mapped to `/api/*`, files in this folder are treated as `NextJS API routes` instead of `React pages`. Further information https://nextjs.org/docs/pages/building-your-application/routing/api-routes

2) We will need `KEYS` from Stripe (dashboad/keys) account

```js
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## TEST

```js
// fake but valid card (https://developers.bluesnap.com/reference/test-credit-cards)
5425233430109903	04/2026	    Success
```


## Folder Structure:

pages/: Contains Next pages and API routes
components/: Includes React components for building the UI
utils/: Houses utility functions and configuration files


