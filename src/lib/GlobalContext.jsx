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

  const values = { data, setData, cart, setCart, addToCart };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
