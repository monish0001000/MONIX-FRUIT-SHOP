# Security Testing Scope and Rules

## Authorized target
The only intended target for hands-on security testing is the separate MONIX Market test environment at https://monix-vulnerable-lab.vercel.app, owned and controlled by the project maintainer.

## Environment separation
- The Secure Store and test environment use the same exact storefront HTML/CSS/JavaScript so visual comparison is not biased by different interfaces.
- They are separate Vercel projects with separate API deployments.
- The Secure Store calculates totals from a server-owned price map and validates product IDs and quantities.
- The test environment deliberately trusts client-submitted price and quantity values in its quote endpoint to demonstrate a business-logic flaw.
- Neither environment creates orders, stores customer records, connects to a database, or processes payments.
- Only synthetic catalogue data is used.

## Out of scope
- Third-party websites, services, domains, APIs or hosting tenants.
- Real payment gateways, customer accounts, personal information or fulfilment systems.
- Denial-of-service, destructive testing, credential stuffing, phishing, persistence or access to unrelated systems.
- Any attempt to use the quote endpoint for a real transaction.

## Safe testing rules
- Test only the dedicated MONIX test environment.
- Use synthetic data and harmless values.
- Do not enter real credentials or personal information.
- Do not attempt destructive load testing or denial of service.
- Preserve evidence with secrets and personal data removed.

## Evidence standard
Every reported finding should include the affected route, preconditions, reproducible steps, expected and observed behavior, evidence, impact, remediation and retest result.

## Reporting language
Use **Confirmed** only for findings reproduced with evidence; **Code-reviewed** for source findings not dynamically reproduced; **Planned** for future work; and **Not applicable** when a feature does not exist. Never claim a penetration test was performed unless it was actually executed and recorded.
