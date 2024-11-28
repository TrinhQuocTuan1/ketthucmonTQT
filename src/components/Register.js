import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    // Điều hướng người dùng đến trang đăng nhập sau khi đăng ký thành công
    navigate("/login");
  };

  return (
    <section id="register">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Đăng Ký</button>
      </form>
    </section>
  );
}

export default Register;
