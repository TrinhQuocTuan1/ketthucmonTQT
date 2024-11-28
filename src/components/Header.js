import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Lấy thông tin người dùng từ localStorage

  return (
    <header>
      <div className="logo">
        <h1>*•.¸♡ 𝒮𝓊𝒮𝓊 𝒮𝒽𝑜𝓅 ♡¸.•*</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">𝕋𝕣𝕒𝕟𝕘 𝕔𝕙ủ</Link>
          </li>
          <li>
            <Link to="/cart">𝔾𝕚ỏ 𝕙à𝕟𝕘</Link>
          </li>
          <li>
            <Link to="/contact">𝕃𝕚ê𝕟 𝕙ệ</Link>
          </li>
          {!currentUser ? (
            <>
              <li>
                <Link to="/register">Đă𝕟𝕘 𝕂ý</Link>
              </li>
              <li>
                <Link to="/login">Đă𝕟𝕘 ℕ𝕙ậ𝕡</Link>
              </li>
            </>
          ) : (
            <>
              <li>𝓧𝓲𝓷 𝓬𝓱à𝓸, {currentUser.name}</li>{" "}
              {/* Hiển thị tên người dùng */}
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    window.location.reload();
                  }}
                >
                  Đă𝕟𝕘 𝕩𝕦ấ𝕥
                </button>
              </li>{" "}
              {/* Đăng xuất */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
