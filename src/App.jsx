import { Navbar, Home, Services, Pricing, AboutUs } from "./components";
import { AddRemoveModel, CartModel } from "./components/models";
import { useShopContext } from "./context/ShopProvider";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cartModel, setCartModel] = useState(false);
  const {
    addRemoveModel: { status, mode },
    setAddRemoveModel,
  } = useShopContext();
  useEffect(() => {
    if (cartModel) {
      document.body.classList.add("overflow-clip");
    } else {
      document.body.classList.remove("overflow-clip");
    }
  }, [cartModel]);
  return (
    <div className="layout relative">
      {status && <AddRemoveModel mode={mode} setStatus={setAddRemoveModel} />}
      {cartModel && <CartModel setStatus={setCartModel} />}
      <Navbar status={cartModel} setStatus={setCartModel} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/:id" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
