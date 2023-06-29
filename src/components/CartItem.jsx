import { getPriceInRupees } from "../lib/utils";
import { shortenString } from "../lib/utils";
import { useGlobalContext } from "../lib/GlobalContext";

const CartItem = ({ data, id, quantity }) => {
  const { incrementCartItem, decrementCartItem } = useGlobalContext();
  return (
    <div className="card lg:card-side flex justify-center items-center w-full md:w-[60%] bg-base-100 shadow-xl aspect-video ">
      <figure className="w-full md:w-[40%] p-2">
        <img
          src={data.image}
          className=" w-full h-80 object-contain"
          alt="Album"
        />
      </figure>
      <div className="card-body w-full md:w-[60%]">
        <h2 className="card-title">{data.title}</h2>
        <p>{shortenString(data.description)}</p>
        <h3 className=" font-semibold text-lg">
          Total: {getPriceInRupees(data.price) * quantity}
        </h3>
        <div className=" flex justify-center items-center border-gray-300 rounded-md p-2">
          <button
            className="btn rounded-l"
            onClick={() => incrementCartItem(id)}
          >
            Add
          </button>
          <button
            disabled
            className="text-center w-16 border-2 h-full outline-none  border-gray-300"
          >
            {quantity}
          </button>
          <button
            className="btn rounded-r"
            onClick={() => decrementCartItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
