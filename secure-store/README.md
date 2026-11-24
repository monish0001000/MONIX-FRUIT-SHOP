# MONIX Secure Store

A secure-by-design storefront demonstration. The UI is served separately from the Vulnerable Lab.

## Implemented

- Product catalogue served by a Vercel serverless function.
- Price calculations use a server-owned price map; client-provided prices are ignored.
- Strict cart validation: known product IDs, unique items, integer quantities and upper bounds.
- Same-origin validation for browser POST requests when an Origin header is present.
- No-store response for quote responses and baseline browser security headers.
- Output text from catalogue fields is escaped before insertion into the UI.

## Deliberate limitations

This is a security-focused demo, not a production commerce system. It has no user accounts, persistent cart, order database, payment processor, stock management, delivery integration or customer data. A quote is not an order. Do not use it for real transactions.

## Run

Serve this directory using Vercel CLI or a compatible local Vercel dev setup so the `/api` functions are available. A plain static file server will not execute serverless functions.

## API

- `GET /api/products`
- `POST /api/quote` with `{"items":[{"id":"mango","quantity":2}]}`
- `GET /api/health`

## Security checks

Try tampering with a client-side price field: the quote endpoint does not accept prices. Try unknown IDs, duplicate IDs, fractional quantities, zero quantities and quantities above 10: the API rejects them.

No claim is made that authentication or order authorization has been tested; those features do not exist in this demo.
