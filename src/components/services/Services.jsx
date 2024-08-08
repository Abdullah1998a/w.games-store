import { services } from "../../data/services";
import { Service } from "../service";

export function Services() {
  return (
    <section className="text-center">
      <h1 className="font-medium uppercase text-xl [letter-spacing:3px]">
        Our services
      </h1>
      <p className="w-2/5 mx-auto mt-2 text-gray-500">
        We provide gamers with the best products, prices, and customer service
        in the industry.
      </p>
      <div className="grid grid-cols-3 gap-14 mt-24">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
