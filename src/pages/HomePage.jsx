import HeroSection from "../components/HeroSection";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

const HomePage = ({ data, loading }) => {
  return (
    <>
      <HeroSection />
      {loading && <Loading />}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen lg:grid-cols-3 gap-4 items-center">
        {data.length != 0 &&
          data.map((item, id) => (
            <>
              <ProductCard data={item} id={id} key={id} showDetails={false} />
            </>
          ))}
      </div>
    </>
  );
};

export default HomePage;
