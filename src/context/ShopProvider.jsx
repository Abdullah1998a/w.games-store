import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const ShopContext = createContext(null);
export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  function getItemQuantity(id) {
    const quantity = cart.find((item) => item.id === id)?.quantity;
    if (quantity == undefined) {
      return 0;
    }
    return quantity;
  }
  function addOneToCart(id, avaliable) {
    const quantity = getItemQuantity(id);
    if (quantity === 0) {
      setCart([...cart, { id, quantity: 1, avaliable: true }]);
    }
    else {
      const updateItem = cart.map((item) =>
        item.id == id
          ? {
              ...item,
              quantity:
                avaliable != item.quantity ? item.quantity + 1 : item.quantity,
              avaliable: avaliable != item.quantity + 1,
            }
          : item
      );
      setCart(updateItem);
    }
  }
  function subtractOneFromCart(id) {
    const quantity = getItemQuantity(id);
    if (quantity == 1) {
      removeItem(id);
    } else {
      const updateItem = cart.map((item) =>
        item.id == id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      setCart(updateItem);
    }
  }
  function removeItem(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
  function getTotalCost() {
    let cost = 0;
    products.map((item) => {
      const quantity = getItemQuantity(item.id);
      const discount = getDiscount(item.id);
      cost += quantity * discount;
    });
    return cost.toFixed(2);
  }
  function getDiscount(id) {
    const discount = (
      products[id - 1].original_price -
      (products[id - 1].original_price * products[id - 1].discount) / 100
    ).toFixed(2);
    return Number(discount);
  }
  const contextValue = {
    cart,
    getItemQuantity,
    addOneToCart,
    subtractOneFromCart,
    removeItem,
    getTotalCost,
    getDiscount,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
export const useShopContext = () => useContext(ShopContext);
