const cards = [
  { name: "Laptop 1", price: 1500000, quantity: 1 },
  { name: "PC", price: 3000000, quantity: 2 },
  {name: "Keyboard", price: 800000, quantity: 1}
];
const totalPrice = cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
console.log(`Cart Total: ${totalPrice} VND`);