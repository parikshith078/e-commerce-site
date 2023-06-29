import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./lib/GlobalContext";
import CartPage from "./pages/CartPage";

function App() {
  const { data, setData } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products?limit=18")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          localStorage.setItem("data", JSON.stringify(json));
        });
    }
    if (data.length == 0) {
      fetchData();
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage data={data} loading={loading} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
