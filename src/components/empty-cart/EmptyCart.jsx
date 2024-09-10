import emptyCart from "../../assets/images/empty-cart.png";

export function EmptyCart() {
  return (
    <>
      <img
        src={emptyCart}
        alt="empty cart image"
        className="w-48 mx-auto aspect-square"
      />
      <h3 className="text-center text-2xl m-5 text-gray-500">
        The cart is empty
      </h3>
    </>
  );
}
