// import bookImage from "../assets/book.webp";
import { useGlobalContext } from "../lib/GlobalContext";
import { getPriceInRupees } from "../lib/utils";
import Rating from "./Rating";

const ProductCard = ({ data, id, showDetails }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl ${
        showDetails ? "w-full md:w-[50%]" : "w-full"
      } mx-2`}
    >
      <button className="" onClick={() => window[`my_modal_${id}`].showModal()}>
        <figure className="aspect-w-1 aspect-h-1 p-1 mt-2">
          <img
            src={data.image}
            className="w-full h-[300px] object-contain"
            alt="Shoes"
          />
        </figure>
      </button>

      <div className="card-body ">
        <button onClick={() => window[`my_modal_${id}`].showModal()}>
          <h2 className="card-title h-14 overflow-hidden line-clamp-2">
            {data.title}
          </h2>
          <h2 className="card-title">₹ {getPriceInRupees(data.price)}</h2>
        </button>
        {showDetails && (
          <>
            <p className={` leading-4 h-16 line-clamp-4 mt-2 `}>
              {data.description}
            </p>
            <Rating ratingData={data.rating} />
          </>
        )}

        <div className="card-actions justify-end mt-2">
          {showDetails && (
            <form method="dialog" className="w-full">
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
                <button
                  onClick={() => addToCart(data, id)}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </form>
          )}
          {!showDetails && (
            <button
              onClick={() => addToCart(data, id)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
