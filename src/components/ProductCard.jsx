// import bookImage from "../assets/book.webp";
import { useGlobalContext } from "../lib/GlobalContext";

const ProductCard = ({ data, id }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="p-4">
        <img src={data.image} className=" h-60" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <h2 className="card-title">₹ {getPriceInRupees(data.price)}</h2>
        <p className=" leading-4 h-16 line-clamp-4 hidden">
          {data.description}
        </p>
        <div className="card-actions justify-end mt-2">
          <button
            onClick={() => addToCart(data, id)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

export const getPriceInRupees = (price) => {
  const rupees = (parseFloat(price) * 74.5) / 2;
  return roundPrice(rupees.toFixed(0));
};

function roundPrice(price) {
  // Round the price to the nearest multiple of 1000
  const roundedPrice = Math.floor(price / 1000) * 1000;

  // Subtract 1 from the rounded price if it is greater than or equal to 1000
  if (roundedPrice >= 1000) {
    return (roundedPrice - 1).toString();
  } else {
    // If the rounded price is less than 1000, return the string "999"
    return "999";
  }
}
