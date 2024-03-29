import { Link } from "react-router-dom";
import "./style.scss";
import { routeNames } from "../../navigation/routeNames";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Link replace to={routeNames.main} className="img-1">
            <img src="/image/header1.png" alt="" />
          </Link>
          <Link replace to={routeNames.category} className="img-2">
            <img src="/image/header2.png" alt="" />
          </Link>
          <Link replace to={routeNames.basket} className="img-3">
            <img src="/image/header3.png" alt="" />
          </Link>
          <Link replace to={routeNames.information} className="img-4">
            <img src="/image/header4.png" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};
