import banner from "../../assets/images/about-banner.png";
import { OurMission } from "../our-mission";

export function AboutUs() {
  return (
    <section className="grid place-items-center grid-cols-4 gap-4">
      <img src={banner} alt="banner image" className="col-span-2" />
      <OurMission />
    </section>
  );
}
