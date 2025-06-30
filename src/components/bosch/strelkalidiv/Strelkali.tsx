import "./Strelkali.scss"
import str from "../../../img/Rectangle1r.png"
import ic1 from "../../../img/иконка1r.png"
import ic2 from "../../../img/иконка2r.png"
import ic3 from "../../../img/иконка3r.png"
import ic4 from "../../../img/иконка4r.png"
import ic5 from "../../../img/иконка5r.png"
import ic6 from "../../../img/иконка6r.png"

const Strelkali = () => {
  return (
     <div>
            <div className="bosch-section3">
                <h1>Этапы ремонта и ценообразование</h1>
                <div className="fix-steps">
                <div className="step-bosch first-comand">
                        <span className="spans">01</span>
                        <img src={str} />
                        <img className="images-bosch1" src={ic1} />
                        <span>Диагностика</span>
                        <h5>Техник тщательно изучает ваш
                            гаджет и тестирует на современном оборудовании</h5>
                    </div>
                    <div className="step-bosch second-comand">
                        <span >Консультация</span>
                        <h5>Вы можете оставить заявку
                            или позвонить сомстоятельно
                            для подробной консультации</h5>
                        <img   className="images-bosch2" src={ic2} />
                        <img  className="arrow-left" src={str} />
                        <span className="spans">02</span>
                    </div>
                    <div className="step-bosch first-comand">
                        <span className="spans">03</span>
                        <img src={str} />
                        <img className="images-bosch1" src={ic3} />
                        <span>Диагностика</span>
                        <h5>Техник тщательно изучает ваш
                            гаджет и тестирует на современном оборудовании</h5>
                    </div>
                    <div className="step-bosch second-comand">
                        <span>Консультация</span>
                        <h5>Вы можете оставить заявку
                            или позвонить сомстоятельно
                            для подробной консультации</h5>
                        <img  className="images-bosch2" src={ic4} />
                        <img  className="arrow-left" src={str} />
                        <span className="spans">04</span>
                    </div>
                    <div className="step-bosch first-comand">
                        <span className="spans">05</span>
                        <img src={str} />
                        <img className="images-bosch1" src={ic5} />
                        <span>Гарантия</span>
                        <h5>После того, как вы проверите
                            устройство, мы выписываем
                            гарантийный талон под печать
                            компании</h5>
                    </div>
                    <div className="step-bosch second-comand">
                        <span>Консультация</span>
                        <h5>Вы можете оставить заявку
                            или позвонить сомстоятельно
                            для подробной консультации</h5>
                        <img className="images-bosch2" src={ic6} />
                        <img className="arrow-left" src={str} />
                        <span className="spans">06</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Strelkali
