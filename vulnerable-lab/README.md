# MONIX Vulnerable Lab

A browser-only security training environment using synthetic data. It is intentionally vulnerable by design and is separate from the Secure Store.

## Included exercises

| Exercise | Demonstration | Safer design |
|---|---|---|
| DOM XSS | Untrusted input reaches `innerHTML` | Use `textContent` or safe templating |
| Untrusted local storage | Browser-controlled role string | Server-side identity and authorization |
| Client-side access control | UI checks a role from local storage | Enforce permissions on every server request |
| SQL injection concept | Shows an unsafe concatenated query string; does not execute SQL | Parameterized queries |

## Safety

- No backend or database is connected.
- No real accounts, passwords, payment, order data or personal information.
- The XSS exercise runs only in this lab page's browser origin.
- Do not enter real credentials or test third-party targets.
- Refresh the page to clear the temporary exercise state.

## Important scope note

The SQLi section is a query-construction illustration only. It is not a live SQL injection endpoint. The local-storage and client-side role exercises demonstrate browser trust failures, not bypasses of a real server-side authentication system.

## Run locally

Serve this directory with a static web server and open `index.html`.
