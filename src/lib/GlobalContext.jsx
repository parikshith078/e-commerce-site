import { useState, useContext, createContext } from "react";
import toast from "react-hot-toast";
const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}
const datafromLocalStorage = JSON.parse(localStorage.getItem("data") || "[]");
const cartfromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState(datafromLocalStorage);
  const [cart, setCart] = useState(cartfromLocalStorage);

  const incrementCartItem = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const decrementCartItem = (id) => {
    const newCart = cart
      .map((item) => {
        if (item.id === id && item.quantity > 1) {
          // Decrease the quantity of item if it's greater than 1
          return { ...item, quantity: item.quantity - 1 };
        }
        if (item.id === id && item.quantity === 1) {
          // Remove the item if the quantity is 1
          return null;
        }
        return item;
      })
      .filter((item) => item !== null); // Filter out any null items

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (item, id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast.error("Item already in cart");
      return;
    }
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { item, quantity: 1, id }])
    );
    setCart([...cart, { item, quantity: 1, id }]);
    toast.success("Item added to cart");
  };

  const values = {
    data,
    setData,
    cart,
    setCart,
    addToCart,
    incrementCartItem,
    decrementCartItem,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
