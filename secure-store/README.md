# MONIX Market — Secure Store

The Secure Store uses the same exact storefront HTML/CSS/JavaScript as the companion test environment, allowing an apples-to-apples UI comparison.

## Implemented controls
- Server-owned product prices; client-submitted price values are ignored.
- Cart API validates known product IDs, duplicate items, integer quantities and quantity limits.
- Same-origin validation for browser POST requests when an Origin header is present.
- No-store response for quote responses and baseline browser security headers.
- Catalogue text is escaped before insertion into the UI.

## API
- `GET /api/products`
- `POST /api/quote` with `{"items":[{"id":"mango","quantity":2,"price":180}]}`
- `GET /api/health`

The quote endpoint ignores the client price and calculates using its own server-side map.

## Limitations
This is an educational demo, not production commerce. No accounts, persistent cart, order database, payment processor, stock management, delivery integration or customer data are present. A quote is not an order.
