import "./App.css";
import About from "./components/About/About";
import Best from "./components/bestSilling/Best";
import Categories from "./components/categories/Categories";
import Flash from "./components/Flash-Sales/Flash";
import NewArrival from "./components/NewArrival/NewArrival";
import PreFooter from "./components/preFooter/PreFooter";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux-toolkit/slices/productReducer";
import Cart from "./components/Cart/Cart";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/product-details/ProductDetails";
import Wishlist from "./components/wishlist/Wishlist";
import AddProduct from "./components/add-product/AddProduct";
import Footer from "./components/Footer/FooterI";
import Signup from "./components/Sign/SignUp";
import Header from "./components/navbar/NavBar";
import Login from "./components/login/login";
import GoogleAuthCallback from "./components/Sign/GoogleAuthCallback";
import GoogleCallback from "./components/Sign/GoogleAuthCallback";
import Shop from "./components/shop";

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/api/v1/auth/google/callback"
          element={<GoogleCallback />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:category" element={<Shop />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/"
          element={
            <>
              <SideBar />
              <Flash />
              <Categories />
              <Best />
              <NewArrival />
              <PreFooter />
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
