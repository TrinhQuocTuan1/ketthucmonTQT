import React from "react";
import { Link } from "react-router-dom"; // Để sử dụng Link cho điều hướng

function HomePage() {
  return (
    <div className="homepage">
      <section className="intro">
        <div className="intro-text">
          <h1>*•.¸♡ ℂ𝕙à𝕠 𝕄ừ𝕟𝕘 Đế𝕟 𝕍ớ𝕚 𝕊𝕙𝕠𝕡 ℚ𝕦ầ𝕟 Á𝕠! ♡¸.•*</h1>
          <p>
            𝒦𝒽á𝓂 𝓅𝒽á 𝒷ộ 𝓈ư𝓊 𝓉ậ𝓅 𝓆𝓊ầ𝓃 á𝑜 𝓂ớ𝒾 𝓃𝒽ấ𝓉 𝓋ớ𝒾 𝒸𝒽ấ𝓉 𝓁ượ𝓃𝑔 𝒸𝒶𝑜 𝓋à 𝑔𝒾á 𝒸ả
            𝒽ợ𝓅 𝓁ý. 𝑀𝓊𝒶 𝓈ắ𝓂 𝓉𝓇ự𝒸 𝓉𝓊𝓎ế𝓃 𝒹ễ 𝒹à𝓃𝑔, 𝑔𝒾𝒶𝑜 𝒽à𝓃𝑔 𝓃𝒽𝒶𝓃𝒽 𝒸𝒽ó𝓃𝑔
          </p>
        </div>
        <div className="intro-image">
          <img
            src="https://noithattugia.com/wp-content/uploads/2024/09/thiet-ke-shop-phong-cach-tu-do-kien-truc-noi-that-tu-gia-e1658538964553.jpg"
            alt="Giới thiệu shop quần áo"
          />
        </div>
      </section>

      <section className="featured-products">
        <h2>Sản Phẩm Nổi Bật</h2>
        <Link to="/shop">
          <button className="view-all-btn">Xem Tất Cả Sản Phẩm</button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
