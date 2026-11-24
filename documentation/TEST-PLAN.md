# Verification and Test Plan

This plan distinguishes implemented behavior from tests that still need to be run.

## Secure Store API

| ID | Test | Expected result |
|---|---|---|
| S-01 | GET /api/products | 200 with server-owned product list |
| S-02 | POST /api/quote with known ID and quantity 2 | 200; total calculated from server prices |
| S-03 | Submit a client-side `price: 0` field | Ignored; server price is authoritative |
| S-04 | Submit unknown product ID | 400 |
| S-05 | Submit quantity 0, negative, fractional, string or >10 | 400 |
| S-06 | Submit duplicate product IDs | 400 |
| S-07 | Submit GET to quote endpoint | 405 with Allow: POST |
| S-08 | Submit cross-origin Origin | 403 when Origin host differs from request host |
| S-09 | Inspect response headers | Baseline CSP, frame, content-type, referrer and permissions headers present |

## Vulnerable Lab

| ID | Test | Expected result |
|---|---|---|
| L-01 | Enter plain text in DOM XSS preview | Text is rendered |
| L-02 | Enter a harmless HTML element | Element is interpreted as HTML, demonstrating unsafe sink |
| L-03 | Store demo profile and inspect localStorage | Profile is browser-controlled |
| L-04 | Change local role to admin and check panel | UI shows the demo admin panel |
| L-05 | Enter SQL metacharacters in SQLi concept exercise | Query string preview changes; no SQL is executed |

## Release gate

- Run API tests locally and against the preview deployment.
- Verify secure-store API rejects invalid input.
- Verify lab and secure-store deployments use distinct Vercel projects.
- Confirm no shared secrets, environment variables, databases or cookies.
- Confirm the lab has no payment or real customer integrations.
- Review security headers on both public URLs.
- Capture screenshots and request/response evidence with sensitive data removed.

## Reporting

Do not mark a test as passed until it has been executed. Record the date, environment, exact result and evidence reference. A source-code review is not a penetration test.
