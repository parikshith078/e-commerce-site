import HeroSection from "./components/HeroSection";
import { Toaster } from "react-hot-toast";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "./lib/GlobalContext";
import CartPage from "./components/CartPage";

function App() {
  const { data, setData } = useGlobalContext();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products?limit=15")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          localStorage.setItem("data", JSON.stringify(json));
        });
    }
    if (data.length == 0) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;

const Home = ({ data }) => {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 items-center">
        {data.length != 0 &&
          data.map((item, id) => (
            <>
              <button onClick={() => window[`my_modal_${id}`].showModal()}>
                <ProductCard data={item} key={id} showDetails={false} />
              </button>
            </>
          ))}
      </div>
    </>
  );
};
