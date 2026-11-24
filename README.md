# MONIX Fruit Shop — Dual-Environment Application Security Project 🍊

A portfolio project that compares a hardened fruit-shop application with an intentionally vulnerable training environment. The goal is to demonstrate secure development, authorized vulnerability validation, and remediation.

> **Current status:** Foundation phase. The existing root `index.html` is a static storefront prototype. The project hub and architecture/scope documents have been added on the `feature/dual-security-environments` branch. The Secure Store backend and Vulnerable Lab are not implemented or deployed yet.

## Project environments

| Area | Purpose | Status |
|---|---|---|
| Project Hub | Explain the project and link to environments | Initial portal created in `portal/` |
| Secure Store | Hardened e-commerce application | Planned |
| Vulnerable Lab | Isolated, intentionally insecure training app | Planned |

## Repository layout

```text
MONIX-FRUIT-SHOP/
├── index.html                    # Existing static storefront prototype
├── portal/
│   └── index.html                # Dual-environment project hub
├── documentation/
│   ├── ARCHITECTURE.md            # Proposed topology and security criteria
│   └── SECURITY-SCOPE.md          # Authorized testing boundaries
├── README.md
└── LICENSE
```

## Planned technology

- Frontend: React + TypeScript + Tailwind CSS
- API: Python + FastAPI
- Database: PostgreSQL
- Deployment: Vercel for frontend, separately hosted API/database services
- Security validation: OWASP ZAP, Burp Suite Community and manual test cases

The final hosting choices will be confirmed before deployment. The secure and vulnerable environments will use separate services, databases, credentials, secrets and sessions.

## Planned security learning objectives

- SQL injection and parameterized query remediation
- Cross-site scripting and contextual output encoding
- Broken access control and object ownership checks
- Authentication and session security
- Client-side price tampering versus server-authoritative pricing
- Security headers and secure configuration

These are planned training topics, not claims that the current static storefront contains confirmed exploitable versions of every issue.

## Run the existing storefront

The current root site is static:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

To preview the project hub, serve the repository root and open `http://localhost:8000/portal/`.

## Safety and data boundaries

- Vulnerable challenges will run only in the dedicated training environment.
- Use synthetic accounts and dummy data.
- No real payment, email, SMS or fulfilment integrations in the lab.
- Do not test third-party systems or use the lab against targets outside its authorized scope.
- Keep all secrets in deployment environment variables, never in Git.

Read [Architecture](documentation/ARCHITECTURE.md) and [Security Testing Scope](documentation/SECURITY-SCOPE.md) before contributing or testing.

## License

MIT — see [LICENSE](LICENSE).
