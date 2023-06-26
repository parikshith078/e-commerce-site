import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products?limit=15")
        .then((res) => res.json())
        .then((json) => setData(json));
    }
    fetchData();
    console.log(data);
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {data.length != 0 &&
          data.map((item, id) => <ProductCard data={item} key={id} />)}
      </div>
    </>
  );
}

export default App;
