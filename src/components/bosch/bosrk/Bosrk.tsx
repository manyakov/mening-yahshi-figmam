import "./Bosrk.scss"
import tel from "../../../img/Mockup 1.png"

const Bosrk = () => {
  return (
    <div>
      <div className="rk-ota">
        <div className="chap-rasm">
            <img className="telfon" src={tel} alt="telfonlar" />
        </div>
        <div className="ong-yozuvlar">
            <h1 className="bosh-yz">Не нашли свою поломку?</h1>
            <div className="yozuvning-otasi">
            <span>Наши специалисты бесплатно Вас проконсультируют и ответят на все вопросы по телефону <span>+380-(44) 021-50-10</span> </span>

            </div>
            <span className="kamroq-yozu">Или мы сами свяжемся с вами в любое удобное время</span>
            <button className="kok-tug">Оставить заявку</button>
        </div>
      </div>
    </div>
  )
}

export default Bosrk
