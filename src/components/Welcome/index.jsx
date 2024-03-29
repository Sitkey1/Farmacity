import "./style.scss";

export const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <img className="logo" src="logo.png" alt="" />
        <div className="logo-box">
          <img src="/image/Bienvenidos.png" alt="" />
          <img src="/image/welcome-logo.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};
