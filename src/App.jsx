import { Navbar, Home, Services, Pricing, AboutUs } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
