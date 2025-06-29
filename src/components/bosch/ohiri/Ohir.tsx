import "./Ohir.scss";
import logotp from "../../../img/boschh.png"

const Ohiri = () => {
  return (
    <div className="nav-fatherbos">
      <div className="group left">
        <h5>О платформе</h5>
        <h5>Выбрать сервисный центр</h5>
      </div>

      <img className="logotplg img-fluid" src={logotp} alt="logotp" />

      <div className="group right">
        <h5>Оставить отзыв</h5>
        <h5>Контакты</h5>
      </div>
    </div>
  );
};

export default Ohiri;
