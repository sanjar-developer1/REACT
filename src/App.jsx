import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  let [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((Error) => {
        console.log(Error, "Xatolik");
      });
  }, []);

  
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyShop</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li>
            <Link to="/product">Mahsulotlar</Link>
          </li>
          <li>
            <Link to="/Aloqa">Aloqa</Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/">🛒 Savat</Link>
          </li>
          <li>
            <Link to="/">👤 Admin</Link>
          </li>
        </ul>
      </nav>

      <div className="cards">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px", height: "250px" }}
            />
            <h1>{product.title.slice(0, 10)}</h1>
            <p>{product.description.slice(0, 35)}</p>
            <p>Narxi: {product.price}$</p>
            <p>
              <span>Reyting:</span> {product.rating.rate} ⭐ (
              {product.rating.count} ta)
            </p>
            <button className="btn">Savatga</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
