import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage"; // Trang chủ
import ProductList from "./components/ProductList"; // Danh sách sản phẩm
import Cart from "./components/Cart"; // Giỏ hàng
import Contact from "./components/Contact"; // Liên hệ
import Register from "./components/Register"; // Đăng ký
import Login from "./components/Login"; // Đăng nhập
import CheckoutPage from "./components/CheckoutPage"; // Trang thanh toán

function App() {
  const [cart, setCart] = useState([]); // Giỏ hàng
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); // Trạng thái mua thành công

  // Thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Xóa sản phẩm khỏi giỏ
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  // Xử lý sự kiện "Mua Hàng" thành công
  const handleBuyNow = (product) => {
    addToCart(product);
    setPurchaseSuccess(true);

    // Sau khi thông báo thành công, chuyển hướng đến thanh toán
    setTimeout(() => {
      setPurchaseSuccess(false); // Reset thông báo
    }, 2000);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={<ProductList addToCart={addToCart} />} // Trang danh sách sản phẩm
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} removeFromCart={removeFromCart} /> // Giỏ hàng
            }
          />
          <Route path="/contact" element={<Contact />} /> // Liên hệ
          <Route path="/register" element={<Register />} /> // Đăng ký
          <Route path="/login" element={<Login />} /> // Đăng nhập
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} />} // Trang thanh toán
          />
        </Routes>
        {purchaseSuccess && (
          <div className="purchase-success">
            <p>Đã mua hàng thành công!</p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
