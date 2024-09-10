import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const ShopContext = createContext(null);
export function ShopProvider({ children }) {
  const [addRemoveModel, setAddRemoveModel] = useState({
    status: false,
    mode: "",
  });
  const [cart, setCart] = useState([]);
  function getItemQuantity(id) {
    const quantity = cart.find((item) => item.id === id)?.quantity;
    if (quantity == undefined) {
      return 0;
    }
    return quantity;
  }
  function addOneToCart(item, avaliable) {
    const quantity = getItemQuantity(item.id);
    if (quantity === 0) {
      setCart([...cart, { ...item, quantity: 1, avaliable: true }]);
    } else {
      const updateItem = cart.map((cartItem) =>
        cartItem.id == item.id
          ? {
              ...cartItem,
              quantity:
                avaliable != cartItem.quantity
                  ? cartItem.quantity + 1
                  : cartItem.quantity,
              avaliable: avaliable != cartItem.quantity + 1,
            }
          : cartItem
      );
      setCart(updateItem);
    }
    setAddRemoveModel({
      status: true,
      mode: "added",
    });
  }
  function subtractOneFromCart(id) {
    const quantity = getItemQuantity(id);
    if (quantity != 0) {
      setAddRemoveModel({
        status: true,
        mode: "subtracted",
      });
    }
    if (quantity == 1) {
      removeItem(id);
    } else {
      const updateItem = cart.map((item) =>
        item.id == id
          ? {
              ...item,
              quantity: item.quantity - 1,
              avaliable: true,
            }
          : item
      );
      setCart(updateItem);
    }
  }
  function removeItem(id) {
    const quantity = getItemQuantity(id);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    if (quantity != 0) {
      setAddRemoveModel({
        status: true,
        mode: "removed",
      });
    }
  }
  function clearCart() {
    setCart([]);
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
    addRemoveModel,
    setAddRemoveModel,
    getItemQuantity,
    addOneToCart,
    subtractOneFromCart,
    removeItem,
    clearCart,
    getTotalCost,
    getDiscount,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
export const useShopContext = () => useContext(ShopContext);
