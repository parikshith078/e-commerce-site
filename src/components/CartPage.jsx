import { useGlobalContext } from "../lib/GlobalContext";
import { getPriceInRupees } from "./ProductCard";
function CartPage() {
  const { cart } = useGlobalContext();
  // TODO: Add div when cart is empty
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-4 w-[90%] mx-auto">
        {cart.map((fish, id) => (
          <CartItem
            data={fish.item}
            quantity={fish.quantity}
            id={fish.id}
            key={id}
          />
        ))}
      </div>
      <div className="card w-[80%] mx-auto my-10 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{calculateCartTotal(cart)}</h2>
          <p>Is the Grand total, please checkout</p>
          <div className="card-actions justify-end">
            <button className="btn  bg-orange-600">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;

const CartItem = ({ data, id, quantity }) => {
  const { incrementCartItem, decrementCartItem } = useGlobalContext();
  return (
    <div className="card lg:card-side flex justify-center items-center bg-base-100 shadow-xl aspect-video max-h-92">
      <figure className="w-[40%] p-2">
        <img src={data.image} className=" object-cover" alt="Album" />
      </figure>
      <div className="card-body w-[60%]">
        <h2 className="card-title">{data.title}</h2>
        <p>{shortenString(data.description)}</p>
        <h3 className=" font-semibold text-lg">
          Total: {getPriceInRupees(data.price) * quantity}
        </h3>
        <div className=" flex justify-center">
          <button className="btn" onClick={() => incrementCartItem(id)}>
            Add
          </button>
          <button className="btn">{quantity}</button>
          <button className="btn" onClick={() => decrementCartItem(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

function shortenString(str) {
  const words = str.trim().split(" ");
  const limitedWords = words.slice(0, 15);
  const shortenedString = limitedWords.join(" ");
  return shortenedString + (words.length > 15 ? "..." : "");
}

function calculateCartTotal(cart) {
  let total = 0;
  for (const cartItem of cart) {
    const itemPrice = getPriceInRupees(cartItem.item.price);
    const itemQuantity = cartItem.quantity;
    const itemTotal = itemPrice * itemQuantity;
    total += itemTotal;
  }
  return total.toFixed(2);
}
