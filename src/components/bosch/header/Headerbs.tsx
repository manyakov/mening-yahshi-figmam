import "./Headerbs.scss"
import v1 from "../../../img/Vector (1).png"
import v2 from "../../../img/Vector (2).png"
import v3 from "../../../img/Vector (3).png"
import v4 from "../../../img/Vector (4).png"
import v5 from "../../../img/Vector (5).png"
import v6 from "../../../img/Vector (6).png"

const Headerbs = () => {
  return (
    <div>
      <div className="bacraund-beriladigan-div">
        <div className="tepadagi-div">
            <div className="tepadagi-divning-bolasi">
            <h1>Ремонт духового шкафа Bosch в Киеве</h1>

            <span>Считайте, что вопрос уже решен. Профессиональная поддержка всегда рядом, что бы Вам ни потребовалось</span>

            <div className="tugmalar-uchun">
            <div className="kok-tugma">Заказать обратный звонок</div>
            <div className="oq-sifat-tugma">Выбрать мастера</div>
            </div>
            </div>
        </div>
        <div className="pastdagi-div">
            <div className="pastni-oraydi">
                <div className="birinchi-ik">
                    <div><img className="img-fluid rs" src={v1} alt="tel" />
                    <span>Бесплатная диагностика</span></div>
                    <div><img className="img-fluid rs" src={v2} alt="tel" />
                    <span>Бесплатный выезд мастера</span></div>
                </div>
                <div className="ikkinchi-ik">
                    <div><img className="img-fluid rs" src={v3} alt="tel" />
                    <span>Ремонт за 1 день</span></div>
                   <div> <img className="img-fluid rs" src={v4} alt="tel" />
                    <span>Гарантия от 365 дней</span></div>
                </div>
                <div className="uchinchi-ik">
                    <div><img className="img-fluid rs" src={v5} alt="tel" />
                    <span>Опыт мастеров более 10 лет</span></div>
                    <div><img className="img-fluid rs" src={v6} alt="tel" />
                    <span>Персональный менеджер</span></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Headerbs
