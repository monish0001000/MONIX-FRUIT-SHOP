# MONIX Market — Test Environment

This environment intentionally mirrors the Secure Store's storefront interface exactly. Its purpose is to support controlled comparison of application behavior while keeping the user experience visually identical.

## Deliberate security difference

- `POST /api/quote` trusts the client-submitted `price` and `quantity` values when calculating a quote.
- The endpoint is stateless and uses synthetic catalogue data only.
- No order is created, no payment is processed and no customer data is stored.
- The product catalogue is shared in shape with the Secure Store so the same UI works in both environments.

## API
- `GET /api/products`
- `POST /api/quote`

## Authorized testing
Only test this project deployment: https://monix-vulnerable-lab.vercel.app. Use synthetic values. Do not enter real personal information or credentials and do not test third-party systems.

The visual interface intentionally does not identify the environment. The security distinction is documented here and in the repository's `documentation/SECURITY-SCOPE.md`.
