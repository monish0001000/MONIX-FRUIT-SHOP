const crypto = require("node:crypto");
const PRICES = Object.freeze({
  mango: 180, orange: 95, apple: 160, grapes: 110, banana: 55, strawberry: 140
});
const jsonError = (res, status, error) => res.status(status).json({ error });
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Origin");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return jsonError(res, 405, "Method not allowed");
  }
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (origin) {
    try {
      const parsed = new URL(origin);
      if (parsed.host !== host) return jsonError(res, 403, "Cross-origin request rejected");
    } catch { return jsonError(res, 403, "Invalid origin"); }
  }
  const body = req.body;
  if (!body || !Array.isArray(body.items) || body.items.length < 1 || body.items.length > 20) {
    return jsonError(res, 400, "Provide between 1 and 20 cart items");
  }
  let total = 0;
  const seen = new Set();
  for (const item of body.items) {
    if (!item || typeof item.id !== "string" || !Object.hasOwn(PRICES, item.id) ||
        !Number.isSafeInteger(item.quantity) || item.quantity < 1 || item.quantity > 10 ||
        seen.has(item.id)) {
      return jsonError(res, 400, "Invalid or duplicate product item");
    }
    seen.add(item.id);
    total += PRICES[item.id] * item.quantity;
  }
  if (!Number.isSafeInteger(total) || total > 100000) return jsonError(res, 400, "Quote exceeds allowed limit");
  return res.status(200).json({
    quoteId: crypto.randomUUID(),
    currency: "INR",
    total,
    note: "Demonstration quote only. No order or payment was created."
  });
};