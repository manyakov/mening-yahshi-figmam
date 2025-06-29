import "./SectionRk.scss"
import kuryer from "../../../img/курьер.png"
import frmm from "../../../img/Frame 31.png"

const SectionRk = () => {
  return (
    <div className="ota-box">
    <div className="brt">
          <div className="left-i">
        <img className="img-fluid" src={kuryer} alt="kuryer samsong" />
      </div>
      <div className="center-t">
        <h1 style={{
            maxWidth:340,
            marginBottom:40
        }}>Мы дорожим вашим временем!</h1>
        <span>Вам не нужно никуда ехать Мы сделаем все за вас</span>
        <span style={{
            marginBottom:40
        }}>5 курьеров готовы к выезду прямо сейчас! <img src={frmm} alt="ff" /></span>
      <div className="bt-bota-box">
          <button style={{
            borderRadius:50,
            padding:12,
            marginBottom:28
        }} className="btn btn-dark">ВЫЗВАТЬ КУРЬЕРА</button>
      </div>
        <span>Услуга предоставляется бесплатно!</span>
      </div>
    </div>
    </div>
  )
}

export default SectionRk
