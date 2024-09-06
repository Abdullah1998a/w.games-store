import { products } from "../../data/products";
import { Details } from "../details";
import { Review } from "../review";
import { Images } from "../images";
import { useEffect, useState } from "react";
import { Info } from "../info";

export function Item({ currentItem }) {
  const [currentReview, setCurrentReview] = useState(0);
  useEffect(() => {
    setCurrentReview(0);
  }, [currentItem]);
  return (
    <div className="grid items-center">
      <Images
        images={products[currentItem].images}
        coverImg={products[currentItem].cover_img}
      />
      <Info item={products[currentItem]} />
      <div className="flex mt-6">
        <Details features={products[currentItem].features} />
        <hr className="my-4 -ms-4" />
        <div className="w-1/2 ps-8 py-2">
          <Review
            review={products[currentItem].reviews[currentReview]}
            setCurrentReview={setCurrentReview}
            currentReview={currentReview}
            length={products.length}
          />
        </div>
      </div>
    </div>
  );
}
