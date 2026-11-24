const PRODUCTS = [
  { id: "mango", name: "Alphonso Mango", price: 180, unit: "1 kg", emoji: "🥭" },
  { id: "orange", name: "Nagpur Orange", price: 95, unit: "1 kg", emoji: "🍊" },
  { id: "apple", name: "Kashmir Apple", price: 160, unit: "1 kg", emoji: "🍎" },
  { id: "grapes", name: "Green Grapes", price: 110, unit: "500 g", emoji: "🍇" },
  { id: "banana", name: "Robusta Banana", price: 55, unit: "1 dozen", emoji: "🍌" },
  { id: "strawberry", name: "Strawberry", price: 140, unit: "250 g", emoji: "🍓" }
];
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
  res.status(200).json({ products: PRODUCTS.map(({ id, name, price, unit, emoji }) => ({ id, name, price, unit, emoji })) });
};