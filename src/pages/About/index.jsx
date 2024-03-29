import { HeadThree } from "../../components/Search/components/HeadThree";
import "./style.scss";

export const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="container">
        <HeadThree />
        <h2>Encuéntranos</h2>
        <img className="about-img" src="/image/about-img.png" alt="" />
        <ul className="list-reset">
          <li>
            <img src="/image/about1.png" alt="" />
          </li>
          <li>
            <img src="/image/about2.png" alt="" />
          </li>
          <li>
            <img src="/image/about3.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
