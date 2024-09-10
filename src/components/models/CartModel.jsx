import { useShopContext } from "../../context/ShopProvider";
import { EmptyCart } from "../empty-cart";
import { Close } from "../close";
import { Cart } from "../cart";
import "./cart-model.css";

export function CartModel({ setStatus }) {
  const { cart } = useShopContext();
  return (
    <div className="backdrop">
      <div>
        <Close setStatus={setStatus} />
        {cart.length == 0 ? <EmptyCart /> : <Cart />}
      </div>
    </div>
  );
}
