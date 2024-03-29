import { SearchBox } from "../Search";
import "./style.scss";
import { HeadOne } from "../Search/components/HeadOne";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <HeadOne />
        <div className="line"></div>

        <SearchBox />
      </div>
    </section>
  );
};
