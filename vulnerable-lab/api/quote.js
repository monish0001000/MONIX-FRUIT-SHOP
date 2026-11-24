const crypto = require("node:crypto");
// INTENTIONALLY INSECURE TRAINING ENDPOINT.
// The server trusts client-submitted price and quantity values.
// Synthetic catalogue only; this endpoint never creates orders or processes payments.
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({ error: "Method not allowed" }); }
  const items = req.body && req.body.items;
  if (!Array.isArray(items)) return res.status(400).json({ error: "Cart items are required" });
  const total = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
  return res.status(200).json({
    quoteId: crypto.randomUUID(),
    currency: "INR",
    total,
    note: "Demonstration quote only. No order or payment was created."
  });
};