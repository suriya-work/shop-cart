import { Routes, Route, Navigate } from "react-router-dom";

// CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
// COMPONENT
import Store from "./Component/Store";
import ProductDetels from "./Component/ProductDetels";
import Navbar from "./Component/shared/Navbar";
import ShoppCart from "./Component/ShoppCart";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetels />} />
          <Route path="/products" element={<Store />} />
          <Route path="/Cart" element={<ShoppCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
