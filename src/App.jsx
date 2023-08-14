import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Product from "./pages/product";
// import Information from "./pages/information";
import Homepage from "./pages/homepage";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of city</p>} />
          <Route path="cities" element={<p>List of city</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>FORM</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
