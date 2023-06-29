export function shortenString(str) {
  const words = str.trim().split(" ");
  const limitedWords = words.slice(0, 15);
  const shortenedString = limitedWords.join(" ");
  return shortenedString + (words.length > 15 ? "..." : "");
}

export function calculateCartTotal(cart) {
  let total = 0;
  for (const cartItem of cart) {
    const itemPrice = getPriceInRupees(cartItem.item.price);
    const itemQuantity = cartItem.quantity;
    const itemTotal = itemPrice * itemQuantity;
    total += itemTotal;
  }
  return total.toFixed(2);
}

export const getPriceInRupees = (price) => {
  const rupees = (parseFloat(price) * 74.5) / 2;
  return roundPrice(rupees.toFixed(0));
};

function roundPrice(price) {
  // Round the price to the nearest multiple of 1000
  const roundedPrice = Math.floor(price / 1000) * 1000;

  // Subtract 1 from the rounded price if it is greater than or equal to 1000
  if (roundedPrice >= 1000) {
    return (roundedPrice - 1).toString();
  } else {
    // If the rounded price is less than 1000, return the string "999"
    return "999";
  }
}
