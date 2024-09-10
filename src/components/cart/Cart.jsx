import { useShopContext } from "../../context/ShopProvider";
import { CartItem } from "../cart-item/CartItem";
import { TotalCost } from "../total-cost/TotalCost";

export function Cart() {
  const { cart } = useShopContext();
  const cartItemTemplate = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });
  return (
    <>
      <h3 className="text-2xl my-2">Items in the cart</h3>
      <ul className="grid gap-2">{cartItemTemplate}</ul>
      <TotalCost />
    </>
  );
}
