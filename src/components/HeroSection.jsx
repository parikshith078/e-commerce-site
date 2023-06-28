import { useGlobalContext } from "../lib/GlobalContext";
import ProductCard from "./ProductCard";

function HeroSection() {
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* TODO: ADD a imge here */}
        <img
          src="https://images.unsplash.com/photo-1622010652810-eba11f92f90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">SaleSparks</h1>
          <p className="py-6">
            SaleSparks - Your go-to destination for trendy fashion, elegant
            jewelry, and cutting-edge electronics. Shop with ease and confidence
            on our secure platform with fast shipping and easy returns.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <Modles />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

const Modles = () => {
  const { data } = useGlobalContext();
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      {data.length > 0 &&
        data.map((item, id) => {
          return (
            <dialog id={`my_modal_${id}`} className="modal">
              <ProductCard data={item} key={id} showDetails={true} />
            </dialog>
          );
        })}
    </>
  );
};
