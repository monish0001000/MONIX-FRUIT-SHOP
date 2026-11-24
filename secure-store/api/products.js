const PRODUCTS = [
  { id: "mango", name: "Alphonso Mango", price: 180, unit: "1 kg", emoji: "🥭", category: "tropical", description: "Rich, fragrant and naturally sweet", badge: "SEASONAL PICK" },
  { id: "orange", name: "Nagpur Orange", price: 95, unit: "1 kg", emoji: "🍊", category: "citrus", description: "Bright, juicy everyday goodness", badge: "BESTSELLER" },
  { id: "apple", name: "Kashmir Apple", price: 160, unit: "1 kg", emoji: "🍎", category: "everyday", description: "Crisp, refreshing and full of flavour", badge: "FARM FAVOURITE" },
  { id: "grapes", name: "Green Grapes", price: 110, unit: "500 g", emoji: "🍇", category: "berries", description: "Little bursts of sweet freshness", badge: "FRESH PICK" },
  { id: "banana", name: "Robusta Banana", price: 55, unit: "1 dozen", emoji: "🍌", category: "tropical", description: "A simple, wholesome daily staple", badge: "EVERYDAY PICK" },
  { id: "strawberry", name: "Strawberry", price: 140, unit: "250 g", emoji: "🍓", category: "berries", description: "Delicate, bright and delightfully sweet", badge: "SEASONAL PICK" },
  { id: "lemon", name: "Fresh Lemon", price: 45, unit: "500 g", emoji: "🍋", category: "citrus", description: "A zesty little lift for every meal", badge: "KITCHEN ESSENTIAL" },
  { id: "watermelon", name: "Sweet Watermelon", price: 75, unit: "1 kg", emoji: "🍉", category: "tropical", description: "Cool, crisp and made for sunny days", badge: "FAMILY FAVOURITE" }
];
module.exports = (_req, res) => {
  res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
  res.status(200).json({ products: PRODUCTS });
};