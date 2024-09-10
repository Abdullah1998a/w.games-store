import { useShopContext } from "../../context/ShopProvider";

export function TotalCost() {
  const { clearCart, getTotalCost } = useShopContext();
  return (
    <div className="flex justify-between items-center gap-2 mt-3">
      <p className="flex items-center gap-2">
        <span>Total cost is just</span>
        <span className="text-xl font-bold">${getTotalCost()}</span>
      </p>
      <button
        className="text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded-lg flex items-center gap-2"
        onClick={() => clearCart()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-lg"
        >
          <path
            fill="currentColor"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
          />
        </svg>
        <span>Clear</span>
      </button>
    </div>
  );
}
