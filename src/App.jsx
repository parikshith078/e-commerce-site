import { useContext } from "react";
import HeroSection from "./components/HeroSection";

import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const datafromLocalStorage = JSON.parse(localStorage.getItem("data") || "[]");

function App() {
  const [data, setData] = useState(datafromLocalStorage);
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
    console.log(data);
  }, []);
  console.log("test");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
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
          data.map((item, id) => <ProductCard data={item} key={id} />)}
      </div>
    </>
  );
};
