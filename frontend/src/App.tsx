import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

import Store from "./pages/Store";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="store"
            element={
              <PrivateRoute><Store /></PrivateRoute>
            }
          />
          <Route
            path="product/:productId"
            element={
              <PrivateRoute><SingleProduct /></PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
