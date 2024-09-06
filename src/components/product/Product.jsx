import { Link } from "react-router-dom";
import { products } from "../../data/products";

export function Product({
  id,
  product_name,
  video,
  original_price,
  discount,
  setCurrentSlide,
  currentSlide,
}) {
  const handleSlider = () => {
    let length = products.length;
    let newSlide = currentSlide + 1;
    setCurrentSlide(newSlide >= length ? 0 : newSlide);
  };
  let afterDiscount = (
    original_price -
    (original_price * discount) / 100
  ).toFixed(2);
  return (
    <div className="w-[90%] flex-shrink-0 px-6 py-3">
      <div className="min-h-[220.84px] overflow-clip rounded-xl">
        <video src={video} muted autoPlay loop></video>
      </div>
      <div className="mt-3 relative">
        <Link to={`/pricing/${id}`}>
          <h3 className="text-xl uppercase font-medium [letter-spacing:3px] inline-block">
            {product_name}
          </h3>
        </Link>
        <div>
          <span className="text-xl font-medium me-2">${afterDiscount}</span>
          <span className="text-sm text-gray-600 line-through">
            ${original_price}
          </span>
        </div>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-200 hover:bg-stone-300 p-2 rounded-lg"
          onClick={handleSlider}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="rotate-180"
          >
            <path
              fill="#333"
              d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26a1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59a2.23 2.23 0 0 1-.91.2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
