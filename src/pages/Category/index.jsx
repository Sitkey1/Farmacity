import { Link } from "react-router-dom";
import "./";
import { SearchBox } from "../../components/Search";
import "./style.scss";
import { BasketStore } from "../../Store/BasketStore";
import { useState } from "react";
import { HeadThree } from "../../components/Search/components/HeadThree";
import products from "../../data/products.json";

export const CategoryPage = () => {
  const [basket, setBasket] = useState(BasketStore.getAll() || []);

  const itemInBasket = (itemID) => basket.some((item) => item.id === itemID);

  return (
    <section className="category-section">
      <div className="container">
        <HeadThree />
        <SearchBox />
        <ul className="list-reset category-list">
          {products.map((el) => {
            return (
              <li key={el.id}>
                <Link to={el.title} state={el}>
                  <div className="img-box">
                    <img src={`/image/${el.img}`} alt="product" />
                  </div>
                </Link>
                <div className="wrapper-box">
                  <h4>{el.title}</h4>

                  <span>{el.subDescr}</span>
                  <span className="newprice">$ {el.price} </span>

                  <button
                    onClick={() => {
                      BasketStore.add(el);
                      setBasket(BasketStore.getAll());
                    }}
                    className="btn-reset"
                    disabled={itemInBasket(el.id) || el.notAvailable}
                  >
                    {el.notAvailable
                      ? "notifiqueme cuando esté disponible"
                      : itemInBasket(el.id)
                      ? "en la cesta"
                      : "AGREGAR"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
