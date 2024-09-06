import { useLocation, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useState } from "react";
import { Item } from "../item";

export function Pricing() {
  const [currentItem, setCurrentItem] = useState(0);
  const { id } = useParams();
  const handleItem = (id) => {
    setCurrentItem(id - 1);
  };
  return (
    <section className="grid gap-2 grid-cols-12 items-start">
      {isNaN(id) && (
        <ul className="flex flex-col items-center col-span-1">
          {products.map(({ id }) => (
            <li
              key={id}
              className="w-full text-center py-12 cursor-pointer hover:bg-stone-200"
              onClick={() => handleItem(id)}
            >
              {id}
            </li>
          ))}
        </ul>
      )}
      <div className="items col-span-10 col-start-2">
        <Item currentItem={id - 1 || currentItem} />
      </div>
    </section>
  );
}
