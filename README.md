# Stripe Payment Integration + TypeScript Next.js test example

## Stripe-Next-TS

This is a really simple project that shows the usage of Next.js with TypeScript.

## Note

1)
The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages.

2) 
We will need `KEYS` from Stripe (dashboad/keys) account

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


