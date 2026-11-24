# MONIX Fruit Shop — Dual-Environment Application Security Project 🍊

A portfolio project that compares a secure-by-design fruit-shop storefront with an intentionally vulnerable web-security training lab. It demonstrates secure implementation patterns, controlled vulnerability demonstrations, and remediation concepts.

## Live environments

| Environment | Live URL | Status |
|---|---|---|
| Project Hub | https://monix-fruit-shop-portal.vercel.app | Deployed |
| Secure Store | https://monix-secure-store.vercel.app | Deployed |
| Vulnerable Lab | https://monix-vulnerable-lab.vercel.app | Deployed |
| Previous Vulnerable Lab deployment | https://vulnlab-security-playground.vercel.app | Existing deployment |

## Repository layout

```text
MONIX-FRUIT-SHOP/
├── index.html                     # Original fruit storefront prototype
├── portal/
│   └── index.html                 # Portfolio project hub
├── secure-store/
│   ├── index.html                 # Secure-store UI
│   ├── api/
│   │   ├── products.js            # Server-owned product catalogue
│   │   ├── quote.js               # Server-side cart validation and pricing
│   │   └── health.js              # API health check
│   ├── tests/
│   │   └── quote.test.js          # Node test coverage for quote validation
│   ├── vercel.json                # Security response headers
│   └── README.md
├── vulnerable-lab/
│   ├── index.html                 # Browser-only security challenges
│   └── README.md
├── documentation/
│   ├── ARCHITECTURE.md
│   ├── SECURITY-SCOPE.md
│   └── TEST-PLAN.md
├── README.md
└── LICENSE
```

## Secure Store — implemented controls

- Server-owned product prices; client-submitted price values are ignored.
- Cart API validates known product IDs, duplicate items, integer quantities and quantity limits.
- Same-origin validation for browser POST requests when an Origin header is present.
- Baseline CSP, clickjacking, MIME-sniffing, referrer and permissions headers.
- API quote responses are not cached.
- Browser output escapes catalogue text.

### Secure Store limitations

This is an educational storefront/API demo, not a production commerce system. It has no login, user accounts, persistent cart, order database, stock management, payment processing, email/SMS or delivery integrations. A quote is not an order. Do not use it for real transactions.

## Vulnerable Lab — implemented exercises

- DOM XSS: intentionally unsafe `innerHTML` sink.
- Untrusted local storage: demonstrates why browser storage cannot be trusted.
- Client-side access control: demonstrates why UI-only role checks do not provide authorization.
- SQL injection concept: shows unsafe query concatenation but does not execute SQL or connect to a database.

The lab is a browser-only, synthetic-data training page. Never enter real credentials or personal information. Use only for authorized learning and testing.

## Test plan

See [documentation/TEST-PLAN.md](documentation/TEST-PLAN.md) for the API and lab test matrix. Tests are not marked passed unless executed and recorded. Run secure API tests with:

```bash
cd secure-store
npm test
```

## Architecture and safe scope

- [Architecture](documentation/ARCHITECTURE.md)
- [Authorized testing scope](documentation/SECURITY-SCOPE.md)
- [Secure Store notes](secure-store/README.md)
- [Vulnerable Lab notes](vulnerable-lab/README.md)

The Secure Store and Vulnerable Lab are deployed as separate Vercel projects. They do not share databases, credentials, sessions or application state. The current secure API is stateless and does not connect to a database.

## Technology

- HTML, CSS and JavaScript
- Vercel serverless Node.js functions
- GitHub
- Node.js built-in test runner

## License

MIT — see [LICENSE](LICENSE).
