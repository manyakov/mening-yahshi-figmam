import "./Theend.scss";
import logotp from "../../../img/логоlg.png"

const Theendlg = () => {
  return (
    <div className="nav-fatherre">
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

export default Theendlg;
