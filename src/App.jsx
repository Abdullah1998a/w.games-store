import { Navbar, Home, Services, Pricing, AboutUs } from "./components";
import { Route, Routes } from "react-router-dom";
import ShopProvider from "./context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <div className="layout">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </ShopProvider>
  );
}

export default App;
