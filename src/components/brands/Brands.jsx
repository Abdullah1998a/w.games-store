import dell from "../../assets/images/dell-brand.svg";
import logitech from "../../assets/images/logitech-brand.svg";
import jbl from "../../assets/images/jbl-brand.svg";
import nintendo from "../../assets/images/nintendo-brand.svg";
import samsung from "../../assets/images/samsung-brand.svg";
import sonyPlaystation from "../../assets/images/sony-playstation-brand.svg";

export function Brands() {
  return (
    <div className="w-4/5 flex gap-20 border-e-[1px] pt-3">
      <img src={dell} alt="dell brand" className="size-14" />
      <img src={logitech} alt="logitech brand" className="size-14" />
      <img src={jbl} alt="jbl brand" className="size-14" />
      <img src={nintendo} alt="nintendo brand" className="size-16" />
      <img src={samsung} alt="samsung brand" className="size-16" />
      <img
        src={sonyPlaystation}
        alt="sony playstation brand"
        className="size-14"
      />
    </div>
  );
}
