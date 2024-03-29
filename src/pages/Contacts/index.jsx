import { HeadThree } from "../../components/Search/components/HeadThree";
import "./style.scss";

export const ContactsPage = () => {
  return (
    <section className=" contacts-section">
      <div className="container">
        <HeadThree />
        <img src="/image/contacto.png" alt="" />
        <div className="form-contacts">
          <form action="#" className="form">
            <label>
              <span className="title-label">Selecciona un asunto *</span>
              <select className="select">
                <option value="">escoge una opción</option>
                <option value="dog">Producos</option>
                <option value="cat">Sugerencias</option>
                <option value="hamster">Reclamaciones</option>
                <option value="hamster">Otros</option>
              </select>
            </label>
            <label>
              <input type="text" required />
              <span>Nombre</span>
            </label>

            <label>
              <input type="email" required />
              <span>Сorreo electrónico</span>
            </label>
            <label>
              <input type="tel" required />
              <span>Teléfono</span>
            </label>
            <label>
              <span className="message-label">Mensaje *</span>
              <textarea type="text" required />
            </label>
            <button className="btn-reset">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};
