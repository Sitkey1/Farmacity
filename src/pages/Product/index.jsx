import { useLocation } from "react-router-dom";
import "./style.scss";
import { useRef, useState } from "react";
import { BasketStore } from "../../Store/BasketStore";
import RewiewsData from "../../data/reviews.json";
import RewiewCard from "./rewiew";

export const ProductPage = () => {
  const { state } = useLocation();
  const { title, subDescr, oldPrice, price, descr, img, id, notAvailable } =
    state;
  const [showSendRewiewModal, setShowSendRewiewModal] = useState(false);
  const [showSuccessRewiewModal, setShowSuccessRewiewModal] = useState(false);
  const formRef = useRef(null);
  const [basket, setBasket] = useState(BasketStore.getAll() || []);
  const itemInBasket = (itemID) => basket.some((item) => item.id === itemID);
  return (
    <section className="product-section">
      <div className="container">
        {
          <div className="card">
            <div className="image-box">
              <img src={`/image/${img}`} alt="" />
            </div>
            <div className="wrapper-box">
              <div className="left-box">
                <h2>{title}</h2>
                <span>{subDescr}</span>
              </div>
              <div className="right-box">
                <div className="newprice">$ {price} </div>
              </div>
            </div>
            <button
              className="btn-reset btn"
              onClick={() => {
                BasketStore.add(state);
                setBasket(BasketStore.getAll());
              }}
              disabled={itemInBasket(id) || notAvailable}
            >
              {notAvailable
                ? "notifiqueme cuando esté disponible"
                : itemInBasket(id)
                ? "en la cesta"
                : "AGREGAR"}
              {/* {itemInBasket(id) ? "уже есть " : "AGREGAR"} */}
            </button>
            <div className="descr-box">
              <span>description</span>
              <p className="descr">{descr}</p>
              <span>optiones</span>
              <button
                onClick={() => setShowSendRewiewModal(true)}
                className="btn-reset btn-rewiew"
              >
                escribir una opinión
              </button>
              {RewiewsData.map(
                (rewiewData, index) =>
                  rewiewData.id === id && (
                    <RewiewCard rewiew={rewiewData} key={index} />
                  )
              )}
            </div>
            {showSendRewiewModal ? (
              <div className="modal-send-rewiew">
                <div
                  //  Закрыттиие модального окна по нажатию на overlay
                  onClick={(e) => {
                    if (e.target.className === "modal-overlay") {
                      setShowSendRewiewModal(false);
                    }
                  }}
                  className="modal-overlay"
                >
                  <div className="modal-form">
                    <span>nueva opinion</span>
                    <form ref={formRef} action="#" className="form">
                      <textarea
                        type="text"
                        placeholder="nueva opinion.."
                        required
                      />
                      <label>
                        <input type="text" required />
                        <span>Nombre</span>
                      </label>
                      <label>
                        <input type="tel" required />
                        <span>Edad</span>
                      </label>
                      <label>
                        <input type="email" required />
                        <span>Сorreo electrónico</span>
                      </label>
                      <button
                        // не срабаттывает кнопка
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(e.target.validity);
                          // Используем useRef для того , чтобы проверить заполнены ли поля в форме
                          // Сделано , чтобв проверять у инпут родной required
                          const isValidForm = formRef.current.checkValidity();
                          //TODO: Получииьт все поля формы для оттправки

                          if (isValidForm) {
                            setShowSuccessRewiewModal(true);
                            setShowSendRewiewModal(false);
                          }
                        }}
                        type="submit"
                        className="btn-reset"
                      >
                        publicar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : null}
            {showSuccessRewiewModal ? (
              <div className="modal-success-send-rewiew">
                <div
                  onClick={(e) => {
                    if (e.target.className === "modal-overlay") {
                      setShowSendRewiewModal(false);
                    }
                  }}
                  className="modal-overlay-answer"
                >
                  <div className="modal-answer">
                    <span>su comentario ha sido enviado a moderación</span>
                    <button
                      onClick={() => setShowSuccessRewiewModal(false)}
                      className="btn-reset"
                    >
                      atrás
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        }
      </div>
    </section>
  );
};
