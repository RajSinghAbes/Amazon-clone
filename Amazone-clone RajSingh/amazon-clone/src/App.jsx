import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Casual Shirt",
      price: 25,
      image:
        "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/MAY/24/8LuquIMW_1c67e60f79b84132ac923b03313d2d18.jpg",
    },
    {
      id: 2,
      name: "Boat Headphones",
      price: 40,
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Artboard2_52206726-98d5-45a4-b521-f034ec83e7b6.png?v=1752729573",
    },
    {
      id: 3,
      name: "Printed Hoodie",
      price: 60,
      image:
        "https://youthiapa.com/cdn/shop/products/YourDesignHereBlue.jpg?v=1609229693",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 75,
      image:
        "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.logo}>amazon</div>

        <input
          type="text"
          placeholder="Search Amazon"
          style={styles.search}
        />

        <div style={styles.navRight}>
          <p>Hello, Sign in</p>
          <p>Returns & Orders</p>

          <div style={styles.cartBox}>
            🛒 Cart: {cart.length}
          </div>
        </div>
      </header>

      {/* Menu */}
      <div style={styles.menu}>
        <span>All</span>
        <span>Today's Deals</span>
        <span>Mobiles</span>
        <span>Fashion</span>
        <span>Electronics</span>
        <span>Prime</span>
      </div>

      {/* Hero Banner */}
      <div style={styles.banner}>
        <h1>Welcome to Amazon Clone</h1>
        <p>Discover amazing products</p>
      </div>

      {/* Products */}
      <div style={styles.container}>
        {products.map((product) => (
          <div
            key={product.id}
            style={styles.card}
            className="card"
          >
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>

            <p style={styles.price}>${product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
              onMouseOver={(e) =>
                (e.target.style.background = "#f7ca00")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "#FFD814")
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={styles.cartSection}>
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}

            <h3>Total: ${total}</h3>
          </>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Amazon Clone
      </footer>
    </div>
  );
}

const styles = {
  app: {
    margin: 0,
    background: "#eaeded",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  navbar: {
    background: "#131921",
    color: "white",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ff9900",
    cursor: "pointer",
  },

  search: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    minWidth: "250px",
  },

  navRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "14px",
  },

  cartBox: {
    background: "#ff9900",
    padding: "8px 14px",
    borderRadius: "20px",
    fontWeight: "bold",
    color: "black",
  },

  menu: {
    background: "#232f3e",
    color: "white",
    display: "flex",
    gap: "20px",
    padding: "10px 20px",
    overflowX: "auto",
  },

  banner: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1400)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "100px 20px",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    padding: "30px",
  },

  card: {
    background: "white",
    width: "280px",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "contain",
    transition: "transform 0.3s",
  },

  price: {
    color: "#B12704",
    fontSize: "20px",
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#FFD814",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
    transition: "0.3s",
  },

  cartSection: {
    background: "white",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },

  footer: {
    background: "#131921",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "30px",
  },
};