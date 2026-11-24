const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/quote");

function invoke({ method = "POST", body = {}, origin, host = "localhost:3000" } = {}) {
  const headers = { host };
  if (origin) headers.origin = origin;
  const req = { method, body, headers };
  const res = {
    statusCode: 200, headersOut: {}, bodyOut: undefined,
    setHeader(k, v) { this.headersOut[k] = v; return this; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.bodyOut = value; return this; }
  };
  handler(req, res);
  return res;
}

test("calculates totals from server-owned prices", () => {
  const res = invoke({ body: { items: [{ id: "mango", quantity: 2, price: 0 }] } });
  assert.equal(res.statusCode, 200);
  assert.equal(res.bodyOut.total, 360);
  assert.equal(res.bodyOut.currency, "INR");
});

test("rejects unknown products", () => {
  assert.equal(invoke({ body: { items: [{ id: "not-a-product", quantity: 1 }] } }).statusCode, 400);
});

test("rejects invalid quantities", () => {
  for (const quantity of [0, -1, 1.5, "2", 11]) {
    assert.equal(invoke({ body: { items: [{ id: "mango", quantity }] } }).statusCode, 400);
  }
});

test("rejects duplicate product IDs", () => {
  assert.equal(invoke({ body: { items: [{ id: "mango", quantity: 1 }, { id: "mango", quantity: 2 }] } }).statusCode, 400);
});

test("rejects cross-origin browser requests", () => {
  assert.equal(invoke({ body: { items: [{ id: "mango", quantity: 1 }] }, origin: "https://attacker.example" }).statusCode, 403);
});

test("only accepts POST", () => {
  const res = invoke({ method: "GET" });
  assert.equal(res.statusCode, 405);
  assert.equal(res.headersOut.Allow, "POST");
});
