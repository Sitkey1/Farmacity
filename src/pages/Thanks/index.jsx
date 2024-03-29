import { Link } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";
import "./style.scss";

export const ThanksPage = () => {
  return (
    <section className="thanks-section">
      <div className="container">
        <h2>¡Gracias!</h2>
        <div className="thanks-content">
          <span>su pedido ha sido aceptado</span>
          <img src="/image/welcome-logo.png" alt="" />
          <p>
            Nuestro responsable se pondrá en contacto con usted en breve para
            confirmar su pedido.
          </p>
          <Link to={routeNames.main} className="thanks-link">
            hogar
          </Link>
        </div>
      </div>
    </section>
  );
};
