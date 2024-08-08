import productVideo from "../../assets/images/product-1.mp4";
import productOneImage1 from "../../assets/images/product-1.1.png";
import productOneImage2 from "../../assets/images/product-1.2.png";
import productOneImage3 from "../../assets/images/product-1.3.png";

export function Images() {
  return (
    <div className="images">
      <video src={productVideo} muted loop className="[grid-area:a]"></video>
      <img
        src={productOneImage1}
        alt="product image 1.1"
        className="[grid-area:b]"
      />
      <img
        src={productOneImage2}
        alt="product image 1.2"
        className="[grid-area:c]"
      />
      <img
        src={productOneImage3}
        alt="product image 1.3"
        className="[grid-area:d]"
      />
    </div>
  );
}
