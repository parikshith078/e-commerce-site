import { useGlobalContext } from "../lib/GlobalContext";
import EmptyCart from "../assets/empty-cart-img.svg";
import CartItem from "../components/CartItem";
import { calculateCartTotal } from "../lib/utils";

function CartPage() {
  const { cart, checkout } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <img src={EmptyCart} className="h-[50%]" alt="Empty Cart" />
        <h1 className="text-2xl font-semibold">Your cart is empty.</h1>
        <a href="/" className="btn btn-primary m-2">
          Shop Now
        </a>
      </div>
    );
  }
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
      {/* Open the modal using ID.showModal() method */}
      <dialog id="my_modal_checkout" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Confirm Checkout!</h3>
          <p className="py-4">Proceed to checkout...</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <button className="btn btn-primary" onClick={() => checkout()}>
              Confirm
            </button>
          </div>
        </form>
      </dialog>

      <div className="card w-[90%] mx-auto my-10 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{calculateCartTotal(cart)}</h2>
          <p>Is the Grand total, please checkout</p>
          <div className="card-actions justify-end">
            <button
              className="btn  bg-orange-600"
              onClick={() => window.my_modal_checkout.showModal()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
