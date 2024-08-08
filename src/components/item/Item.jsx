import { Images } from "../images";
import { Info } from "../info";
import { Details } from "../details";
import { Review } from "../review";

export function Item() {
  return (
    <div className="item">
      <Images />
      <Info />
      <div>
        <Details />
        <div>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}
