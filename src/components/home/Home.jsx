import { Header } from "../header";
import { Event } from "../event";
import { Products } from "../products";
import { Brands } from "../brands";
import { SocialMedia } from "../social-media";

export function Home() {
  return (
    <section className="overflow-clip">
      <Header />
      <div className="flex justify-between items-center mt-4 pb-5 border-b-[1px]">
        <Event />
        <Products />
      </div>
      <div className="flex items-center justify-between">
        <Brands />
        <SocialMedia />
      </div>
    </section>
  );
}
