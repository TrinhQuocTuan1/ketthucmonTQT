import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("user")); // Lấy thông tin người dùng đã đăng ký trước đó
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // Lưu thông tin người dùng vào localStorage sau khi đăng nhập thành công
      localStorage.setItem("currentUser", JSON.stringify(storedUser));

      // Điều hướng người dùng về trang chủ sau khi đăng nhập
      navigate("/");
    } else {
      alert("Email hoặc mật khẩu không chính xác");
    }
  };

  return (
    <section id="login">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
    </section>
  );
}

export default Login;
