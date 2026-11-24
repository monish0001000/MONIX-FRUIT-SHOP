# MONIX Market — Identical Storefront / Dual API Security Project 🍊

A portfolio project featuring two visually identical, modern fruit-storefront deployments. Both use the same exact storefront HTML, CSS and JavaScript; the difference is in their server-side quote handling.

## Live links

| Project | URL |
|---|---|
| Project Hub | https://monix-fruit-shop-portal.vercel.app |
| MONIX Market — Storefront A | https://monix-secure-store.vercel.app |
| MONIX Market — Storefront B | https://monix-vulnerable-lab.vercel.app |
| GitHub | https://github.com/monish0001000/MONIX-FRUIT-SHOP |

The storefront UI intentionally does not reveal which deployment is the test environment. The repository documentation records the authorized testing scope and implementation differences.

## Visual experience

- Shared premium light theme and identical storefront markup across both deployments.
- Responsive navigation, hero composition, category chips, product search and sorting.
- Animated fruit illustrations, hover transitions, scroll reveal, reading progress indicator and toast feedback.
- Product favourites, quantity controls and slide-in basket drawer.
- Responsive layouts for mobile, tablet and desktop.

## Security comparison

### Storefront A — secure quote API
- Uses a server-owned price map and ignores client-submitted prices.
- Validates product IDs, unique items, integer quantities and quantity limits.
- Performs same-origin validation for browser POST requests when Origin is present.
- Uses no-store quote responses and baseline browser security headers.

### Storefront B — intentionally weak quote API
- Uses client-submitted price and quantity values to calculate the quote.
- Demonstrates a business-logic trust failure for authorized testing.
- Uses only synthetic catalogue data; no orders, payments or customer records are stored.

## Repository layout

```text
MONIX-FRUIT-SHOP/
├── portal/index.html
├── secure-store/
│   ├── index.html
│   ├── api/products.js
│   ├── api/quote.js
│   ├── api/health.js
│   ├── vercel.json
│   └── tests/quote.test.js
├── vulnerable-lab/
│   ├── index.html
│   └── api/
│       ├── products.js
│       └── quote.js
└── documentation/
    ├── ARCHITECTURE.md
    ├── SECURITY-SCOPE.md
    ├── TEST-PLAN.md
    └── TEST-RESULTS.md
```

## Safe-use boundary

Both are educational demonstrations, not production e-commerce applications. There is no login, database, persistent cart, order creation, payment processing, stock management or delivery integration. A quote is not an order. Test only the designated MONIX test deployment using synthetic data. Do not enter real credentials or personal information.

## Run secure API tests

```bash
cd secure-store
npm test
```

## License

MIT — see [LICENSE](LICENSE).
