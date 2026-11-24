# MONIX Fruit Shop — Dual-Environment Architecture

## Status

Implemented baseline with three live Vercel deployments. The Project Hub, Secure Store API/UI and browser-only Vulnerable Lab are deployed independently. The Secure Store is stateless and has no persistent order/database layer.

## Goal

Maintain one portfolio project with two independently deployed application environments:

1. **Secure Store** — a hardened e-commerce demonstration.
2. **Vulnerable Lab** — an intentionally insecure training application using dummy data.

A small **Project Hub** explains the project and links to the two environments.

## Deployed topology

```text
                         Project Hub
                              |
                +-------------+-------------+
                |                           |
           Secure Store                Vulnerable Lab
                |                           |
        Secure API service           Lab API service
                |                           |
       Secure database               Disposable lab DB
                |                           |
       Production secrets            Dummy credentials/data
```

The hub is informational. It must not proxy requests into either environment or share application sessions.

## Isolation requirements

- Separate hosting projects/services for the secure store and vulnerable lab.
- Separate databases, database users, credentials, environment variables and storage.
- No shared session cookies, authentication secrets, signing keys or API tokens.
- No network route from the lab to the secure database or production services.
- Lab data must be synthetic and resettable.
- No real payment processor, customer information, email/SMS delivery or live fulfilment in the lab.
- Lab access should be restricted or protected by an explicit training gate before public deployment.
- Apply resource limits and abuse protections at the hosting/network layer.
- Never place secrets in frontend bundles, Git history, screenshots or documentation.

## Implemented stack

- Frontend: React + TypeScript + Tailwind CSS.
- API: Python + FastAPI.
- Database: PostgreSQL.
- Hosting: Vercel for frontend deployments; a separate backend host and managed database for each environment.
- Testing: OWASP ZAP, Burp Suite Community and manual test cases.

The exact hosting provider and domain mapping will be selected after confirming account capabilities and environment-variable support.

## Deployment URLs

Distinct production deployment URLs:

- Project Hub: https://monix-fruit-shop-portal.vercel.app
- Secure Store: https://monix-secure-store.vercel.app
- Vulnerable Lab: https://monix-vulnerable-lab.vercel.app

These are Vercel project aliases. The applications are deployed as separate projects.

## Security acceptance criteria and current limitations

### Secure Store — implemented baseline

- Product prices and quote totals are calculated server-side.
- Quantity and product ID validation is enforced by the quote API.
- Stock and ownership checks are not implemented because there is no inventory, user or order system.
- Passwords are stored using a modern password-hashing function.
- Authentication and authorization are enforced by the API, not only the UI.
- Database queries are parameterized.
- User-controlled output is safely encoded.
- State-changing requests have appropriate CSRF protection when cookie-based authentication is used.
- Security headers and secure cookie attributes are configured.
- Secrets are injected through hosting environment variables.
- Errors do not expose stack traces, secrets or sensitive records.
- Automated tests cover authorization boundaries and validation failures.

### Vulnerable Lab — implemented baseline

- Browser-only DOM XSS, untrusted local storage and client-side role-check exercises are included.
- The SQL injection section is an explanatory query-construction demo only; it does not execute SQL.
- Each exercise has a learning objective and safe reproduction procedure.
- Only synthetic records and test identities are used.
- Challenges are scoped to the lab host and cannot access production services.
- No real payment or fulfilment action is possible.
- Findings include evidence, impact, severity rationale, remediation and retest result.
- A reset path restores the lab to a known state.

## Status labels

Documentation must distinguish **implemented**, **tested**, **planned** and **not applicable**. Do not describe a control as secure until it has been implemented and verified.
