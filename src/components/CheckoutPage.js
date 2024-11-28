import React, { useState } from "react";

function CheckoutPage({ cart }) {
  // Tính tổng giá trị đơn hàng
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  // Trạng thái lưu phương thức thanh toán đã chọn
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
  });
  const [eWalletInfo, setEWalletInfo] = useState({
    walletType: "",
    walletAccount: "",
  });

  // Xử lý sự kiện khi người dùng chọn phương thức thanh toán
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Xử lý thay đổi thông tin thẻ tín dụng
  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Xử lý thay đổi thông tin ví điện tử
  const handleEWalletChange = (e) => {
    const { name, value } = e.target;
    setEWalletInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="checkout-page">
      <h2>Phương Thức Thanh Toán</h2>
      <p>Vui lòng chọn phương thức thanh toán của bạn:</p>

      {/* Hiển thị tổng số tiền cần thanh toán */}
      <div className="order-summary">
        <h3>Giỏ hàng</h3>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price.toLocaleString()} VND
            </li>
          ))}
        </ul>
        <p>
          <strong>Tổng cộng: </strong>
          {totalAmount.toLocaleString()} VND
        </p>
      </div>

      {/* Các phương thức thanh toán */}
      <div className="payment-methods">
        <button
          className={`payment-btn ${
            selectedPaymentMethod === "credit-card" ? "selected" : ""
          }`}
          onClick={() => handlePaymentMethodChange("credit-card")}
        >
          Thanh toán qua thẻ tín dụng
        </button>
        <button
          className={`payment-btn ${
            selectedPaymentMethod === "cod" ? "selected" : ""
          }`}
          onClick={() => handlePaymentMethodChange("cod")}
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          className={`payment-btn ${
            selectedPaymentMethod === "e-wallet" ? "selected" : ""
          }`}
          onClick={() => handlePaymentMethodChange("e-wallet")}
        >
          Thanh toán qua ví điện tử
        </button>
      </div>

      {/* Hiển thị phương thức thanh toán đã chọn */}
      {selectedPaymentMethod && (
        <div className="payment-confirmation">
          <p>
            Bạn đã chọn phương thức thanh toán:{" "}
            <strong>{selectedPaymentMethod}</strong>
          </p>
        </div>
      )}

      {/* Hiển thị form điền thông tin thẻ tín dụng nếu phương thức là thẻ tín dụng */}
      {selectedPaymentMethod === "credit-card" && (
        <div className="credit-card-form">
          <h3>Thông Tin Thẻ Tín Dụng</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Số Thẻ:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Nhập số thẻ"
                value={creditCardInfo.cardNumber}
                onChange={handleCreditCardChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder">Tên Chủ Thẻ:</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="Nhập tên chủ thẻ"
                value={creditCardInfo.cardHolder}
                onChange={handleCreditCardChange}
                required
              />
            </div>
          </form>
        </div>
      )}

      {/* Hiển thị form điền thông tin ví điện tử nếu phương thức là ví điện tử */}
      {selectedPaymentMethod === "e-wallet" && (
        <div className="e-wallet-form">
          <h3>Thông Tin Ví Điện Tử</h3>
          <form>
            <div className="form-group">
              <label htmlFor="walletType">Chọn loại ví:</label>
              <select
                id="walletType"
                name="walletType"
                value={eWalletInfo.walletType}
                onChange={handleEWalletChange}
                required
              >
                <option value="">Chọn ví</option>
                <option value="momo">MoMo</option>
                <option value="zalopay">ZaloPay</option>
                <option value="vnpay">VNPAY</option>
                {/* Thêm các ví điện tử khác ở đây */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="walletAccount">Số tài khoản ví:</label>
              <input
                type="text"
                id="walletAccount"
                name="walletAccount"
                placeholder="Nhập số tài khoản ví"
                value={eWalletInfo.walletAccount}
                onChange={handleEWalletChange}
                required
              />
            </div>
          </form>
        </div>
      )}

      {/* Xử lý hành động tiếp theo */}
      <div className="payment-actions">
        <button
          className="confirm-payment-btn"
          disabled={!selectedPaymentMethod}
          onClick={() => alert("Thanh toán thành công!")}
        >
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
