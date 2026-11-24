# MONIX Fruit Shop 🍊

A clean, responsive fruit-storefront experience for **MONIX Fruit Shop**. Built as a lightweight static website using HTML, CSS and vanilla JavaScript.

## Features

- Fresh, modern light-theme storefront with responsive layouts
- 18 fruit products with category labels, unit pricing and product cards
- Category filtering, live search and price/name sorting
- Favourite toggles and a working client-side shopping basket
- Quantity controls and automatic subtotal calculation
- Mobile-friendly navigation and basket drawer
- Subtle motion with reduced-motion accessibility support
- No framework, build step, database or API key required

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a modern browser.

For local development with a simple static server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

This is a static site and can be deployed directly to Vercel, Netlify, GitHub Pages or any static hosting provider. For Vercel, import this repository and keep the framework preset as **Other**; no build command is required.

## Important demo notes

- Product names, prices and availability are sample storefront content and should be updated before real-world use.
- Cart and favourites are client-side only and are not persisted to a server.
- Checkout is intentionally a demo interaction. No orders, payments, accounts or delivery requests are submitted.
- Product illustrations use emoji; replace these with licensed product photography for a production catalogue.

## Project structure

```
MONIX-FRUIT-SHOP/
├── index.html
└── README.md
```

## License

MIT License. See [LICENSE](LICENSE) if a license file is added to this repository.
