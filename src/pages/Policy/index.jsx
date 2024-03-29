import { HeadThree } from "../../components/Search/components/HeadThree";
import "./style.scss";

export const PolicyPage = () => {
  return (
    <section className="policy-section">
      <div className="container">
        <HeadThree />
        <img src="/image/políticas.png" alt="" />
      </div>
    </section>
  );
};
