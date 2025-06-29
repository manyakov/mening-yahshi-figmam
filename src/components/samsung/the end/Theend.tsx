import "./Theend.scss";
import logotp from "../../../img/samsung_logo_PNG6 1.png"

const Theend = () => {
  return (
    <div className="nav-fatherr">
      <div className="group left">
        <h5>О платформе</h5>
        <h5>Выбрать сервисный центр</h5>
      </div>

      <img className="logotp img-fluid" src={logotp} alt="logotp" />

      <div className="group right">
        <h5>Оставить отзыв</h5>
        <h5>Контакты</h5>
      </div>
    </div>
  );
};

export default Theend;
