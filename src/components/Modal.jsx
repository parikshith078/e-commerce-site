import { useGlobalContext } from "../lib/GlobalContext";
import ProductCard from "./ProductCard";

export const Modal = () => {
  const { data } = useGlobalContext();
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      {data.length > 0 &&
        data.map((item, id) => {
          return (
            <dialog id={`my_modal_${id}`} key={id} className="modal">
              <ProductCard data={item} key={id} showDetails={true} />
            </dialog>
          );
        })}
    </>
  );
};
