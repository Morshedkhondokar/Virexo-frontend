import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        {/* Routes WITH navbar */}
        <Route element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          {/* Add more pages that need navbar here */}
          <Route element={<Product />} path="/products" />
          <Route element={<Contact />} path="/contact" />
        </Route>

        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<Register />}
          path="/register"
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;
