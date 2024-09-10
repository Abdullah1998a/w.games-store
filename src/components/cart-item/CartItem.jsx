import { useShopContext } from "../../context/ShopProvider";

export function CartItem({ item }) {
  const { getDiscount, addOneToCart, subtractOneFromCart, removeItem } =
    useShopContext();
  const {
    id,
    cover_img: { src, alt },
    product_name,
    availability,
    avaliable,
    original_price,
    quantity,
  } = item;
  return (
    <>
      <li className="flex gap-2">
        <div className="grid gap-2 flex-1">
          <div className="flex gap-4 items-center relative">
            <div className="grid place-items-center w-12 p-1.5 aspect-square rounded-full bg-neutral-200">
              <img src={src} alt={alt} className="w-[85%] object-center" />
            </div>
            <div className="grid gap-1.5">
              <div>{product_name}</div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <span>${getDiscount(id)}</span>
                  <span className="line-through text-sm text-gray-500">
                    ${original_price}
                  </span>
                </div>{" "}
                -<span>{quantity} items</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 ms-auto">
              <button
                onClick={() => addOneToCart(item, availability)}
                disabled={!avaliable}
                className="p-1.5 bg-gray-200 rounded-lg disabled:text-gray-400 disabled:pointer-events-none hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m19 15l-7-6l-7 6"
                  />
                </svg>
              </button>
              <button
                onClick={() => subtractOneFromCart(id)}
                className="p-1.5 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="rotate-180"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m19 15l-7-6l-7 6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            className="text-white bg-red-500 hover:bg-red-600 p-1 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
            onClick={() => removeItem(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>
          </button>
        </div>
      </li>
      <hr />
    </>
  );
}
