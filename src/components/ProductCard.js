import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook useNavigate để điều hướng

function ProductCard({ product, addToCart }) {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); // Trạng thái cho thông báo thành công
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Thêm sản phẩm vào giỏ hàng
    addToCart(product);

    // Hiển thị thông báo "Mua hàng thành công"
    setPurchaseSuccess(true);

    // Sau 2 giây, chuyển người dùng tới trang thanh toán
    setTimeout(() => {
      navigate("/checkout"); // Chuyển đến trang thanh toán
    }, 2000); // Điều hướng sau 2 giây
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} VND</p>

      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>

      {/* Nút "Mua Hàng" */}
      <button className="buy-now-btn" onClick={handleBuyNow}>
        Mua Hàng
      </button>

      {/* Thông báo mua hàng thành công */}
      {purchaseSuccess && (
        <div className="purchase-success">
          <p>Đã mua hàng thành công!</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
