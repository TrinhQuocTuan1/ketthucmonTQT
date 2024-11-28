import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Áo Sơ Mi Caro Form Rộng",
    price: 300000,
    image: "https://pos.nvncdn.com/492284-9176/ps/20230823_IWyoiRqOd3.jpeg",
  },
  {
    id: 2,
    name: "Quần Jeans Ống Rộng",
    price: 450000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmXSgFY4J4v14M4pcWfKbvr_pT2OFivbJbw&s",
  },
  {
    id: 3,
    name: "Áo Baby Tee",
    price: 250000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYrXL6oPBpGSvjju18WA_ucBi_zztDd0qWg&s",
  },
  {
    id: 4,
    name: "Quần Short Nam",
    price: 200000,
    image:
      "https://247store.vn/uploads/products/20230527/vn111342077qukwlgxrk5mj2bcj8a.jpg",
  },
  {
    id: 5,
    name: "Hoodie Zip Boxy",
    price: 500000,
    image:
      "https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-local-brand-dep-co-non-mau-den-xam-27.jpg?v=1716627758810",
  },
  {
    id: 6,
    name: "Váy Jean Dài",
    price: 350000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR5YeiBjrdyUfZ1UwkoqOSYkIm9i8WUi6pg&s",
  },
  {
    id: 7,
    name: "Áo Hoodie Nữ",
    price: 400000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5Y9SQ4RX5UScbftiMpIBHNGyVT2x9E7Zyg&s",
  },
  {
    id: 8,
    name: "Quần Tây Nam",
    price: 550000,
    image:
      "https://down-vn.img.susercontent.com/file/ff87cf9c3c5d8b4fa1e41bda38e7bf2b",
  },
  {
    id: 9,
    name: "Áo Len Trắng Nữ",
    price: 600000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NpzCBqIhJuYVT6P1_F1OjKw8_DRIGksfXA&s",
  },
  {
    id: 10,
    name: "Áo Polo Nam",
    price: 270000,
    image:
      "https://lh7-us.googleusercontent.com/A7hbCKhOLqyrnjsN6Jf4HQyoW_lsZ54R-6TXUwmd2mjMSWTHXR5yQ1soiD7Ed0nzDo_NzxDl0C5kj_LWf5YrcMwQi7Q7EeLhZUMcR3YnaCCowK-ED9xhVHazpFkspVM8TDslDG_VnfZPFDr2TvGGbi8",
  },
  {
    id: 11,
    name: "Quần Đùi Nữ",
    price: 220000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6y-Q5eQHnN9ilxFTw5qMQ0GVRZQlU2LDvA&s",
  },
  {
    id: 12,
    name: "Áo Sơ Mi Nữ",
    price: 320000,
    image:
      "https://ann.com.vn/wp-content/uploads/16465-33330481-8ebc-4414-a3cc-8861806cca41.jpg",
  },
  {
    id: 13,
    name: "Áo Thun Nam Có Cổ",
    price: 280000,
    image:
      "https://down-vn.img.susercontent.com/file/881995a67c72ccba94ee1337f76ac953",
  },
  {
    id: 14,
    name: "Chân Váy Nữ",
    price: 350000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTednTsP7f_K-2j6w6NctnCYf8-D1_Ja-8jcg&s",
  },
  {
    id: 15,
    name: "Quần Ống Loe",
    price: 450000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtU4-NTNC9B7omhTAlGXnHE9P3ECcj2pWyAg&s",
  },
  {
    id: 16,
    name: "Áo Sweatshirt Nam",
    price: 420000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0wRVsUw_sKBnnD7yDogPQpL-jglQvnymDg&s",
  },
  {
    id: 17,
    name: "Quần Jean Ngắn",
    price: 530000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcZ6zdSY6aLM9x2UtAK8H9U-MR2iRNQArVA&s",
  },
  {
    id: 18,
    name: "Áo Sơ Mi Tay Ngắn",
    price: 280000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn4a9CFTxT_t2m5oq561FhEHz-R6qBghZlA&s",
  },
];

function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu từ khóa tìm kiếm

  // Hàm xử lý thay đổi từ khóa tìm kiếm
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Lọc danh sách sản phẩm theo tên sản phẩm
  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) // So sánh không phân biệt chữ hoa chữ thường
  );

  return (
    <section id="shop">
      <h2>Sản Phẩm </h2>

      {/* Thanh tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
