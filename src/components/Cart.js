import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  return (
    <section id="cart">
      <h2>Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-msg">Chưa có sản phẩm trong giỏ hàng.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {/* Hiển thị ảnh sản phẩm */}
              <img src={product.image} alt={product.name} />

              {/* Tên, giá sản phẩm */}
              <div>
                <div>
                  {product.name} - {product.price.toLocaleString()} VND
                </div>
                {/* Có thể thêm phần số lượng hoặc mô tả sản phẩm ở đây */}
              </div>

              {/* Nút Xóa */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Xóa
              </button>

              {/* Nút Mua */}
              <Link to="/checkout">
                <button className="buy-btn">Mua</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
