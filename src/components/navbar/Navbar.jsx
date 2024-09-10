import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useShopContext } from "../../context/ShopProvider";

export function Navbar({ status, setStatus }) {
  const { cart } = useShopContext();
  const totalQuantity = cart.reduce(
    (total, current) => total + current.quantity,
    0
  );
  return (
    <nav className="flex justify-between items-center bg-white border-b-[1px]">
      <img src={logo} alt="logo" className="w-16" />
      <ul className="flex justify-between items-center gap-4 uppercase text-[0.95rem] text-gray-500">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
      <span
        className={`uppercase text-[0.95rem] ${
          totalQuantity == 0 ? "opacity-0 pointer-events-none" : null
        }`}
      >
        <span
          className="bg-stone-200 rounded-full py-1 px-6 font-medium text-lg me-2 cursor-pointer"
          onClick={() => setStatus(!status)}
        >
          {totalQuantity}
        </span>{" "}
        in cart
      </span>
    </nav>
  );
}
