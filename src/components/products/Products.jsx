import { useState } from "react";
import { products } from "../../data/products";
import { Product } from "../product";

export function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  return (
    <div className="products">
      {products[currentSlide] && (
        <Product
          key={products[currentSlide].id}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          {...products[currentSlide]}
        />
      )}
    </div>
  );
}
