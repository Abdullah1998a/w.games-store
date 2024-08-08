import facebook from "../../assets/images/facebook-logo.svg";
import instagram from "../../assets/images/instagram-logo.svg";
import x from "../../assets/images/x-logo.svg";

export function SocialMedia() {
  return (
    <div className="w-1/5 flex justify-center items-center gap-3 pt-3">
      <a href="https://facebook.com">
        <img src={facebook} alt="facebook logo" className="size-7" />
      </a>
      <a href="https://instagram.com">
        <img src={instagram} alt="instagram logo" className="size-7" />
      </a>
      <a href="https://x.com">
        <img src={x} alt="x logo" className="size-7" />
      </a>
    </div>
  );
}
