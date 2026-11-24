# Security Testing Scope and Rules

## Authorized target

The only intended target for hands-on security testing is the MONIX Fruit Shop Vulnerable Lab after it has been deployed and explicitly designated for testing.

## Out of scope

- The production/secure store, except for non-invasive verification of its own documented security controls.
- Any third-party website, service, domain, API or hosting tenant.
- Real payment gateways, customer accounts, personal information or fulfilment systems.
- Denial-of-service, destructive testing, credential stuffing, phishing, persistence or access to unrelated systems.

## Lab safety controls

- Use synthetic accounts, products and orders.
- Keep lab data separate from secure-store data.
- Use a dedicated lab database and credentials.
- Disable real email, SMS, payment and shipping integrations.
- Add a visible training-only warning to the lab.
- Restrict access where practical and provide a reset procedure.
- Keep secrets outside source control.

## Evidence standard

Every reported finding should include:

1. Finding ID and title.
2. Affected lab route/component.
3. Preconditions and test account.
4. Reproduction steps limited to the lab.
5. Expected versus observed behavior.
6. Evidence with secrets and personal data removed.
7. Impact and severity rationale.
8. Recommended remediation.
9. Retest result and date.

## Reporting language

Use precise status terms:

- **Confirmed:** reproduced in the authorized lab with evidence.
- **Code-reviewed:** identified through source review but not dynamically reproduced.
- **Planned:** a future challenge or control, not yet implemented.
- **Not applicable:** the feature does not exist in the current application.

Never label a planned weakness as an exploitable finding. Never claim a penetration test was performed unless the test was actually executed and recorded.
