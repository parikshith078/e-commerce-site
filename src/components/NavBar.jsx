import { useGlobalContext } from "../lib/GlobalContext";

function NavBar() {
  const { cart } = useGlobalContext();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          SaleSparks
        </a>
      </div>
      <div className="flex-none">
        <a href="/cart" className="btn btn-square btn-ghost">
          <div className="indicator">
            <span className="indicator-item indicator-bottom indicator-start  badge badge-secondary">
              {cart.length}
            </span>
            <button className="btn">Cart</button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
