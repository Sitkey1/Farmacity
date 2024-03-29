import { Link } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";
import "./style.scss";
import { HeadThree } from "../../components/Search/components/HeadThree";

export const InformationPage = () => {
  return (
    <div className="container">
      <section className="info-section">
        <HeadThree />
        <img className="information" src="/image/Información.png" alt="" />
        <ul className="list-info list-reset">
          <li>
            <Link to={routeNames.contacts}>Contacto</Link>
          </li>
          <li>
            <Link to={routeNames.about}>Encuéntranos</Link>
          </li>
          <li>
            <Link to={routeNames.policy}>Políticas de Privacidad</Link>
          </li>
        </ul>
        <img src="/image/welcome-logo.png" alt="" />
      </section>
    </div>
  );
};
