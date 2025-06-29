import "./Gridd.scss"
import gr1 from "../../../img/gr1.png"
import gr2 from "../../../img/gr2.png"
import gr3 from "../../../img/gr3.png"
import gr4 from "../../../img/gr4.png"

const Gridd = () => {
  return (
    <div>
      <div className="kotta-div-bos">
        <div className="gridlarbos">
            <div className="tepadagisi">
                <img className="img-fluid" src={gr1} alt="grrrr" />
                <img style={{
                    marginTop:100
                }} className="kook img-fluid" src={gr2} alt="grrrr" />
            </div>
            <div className="pastdagisi">
                <img className="img-fluid" style={{
                    marginTop:-40
                }} src={gr3} alt="hahsah" />
                <img className="img-fluid" src={gr4} alt="hahah" />
            </div>
        </div>
        <div className="textlar">
            <h1>Мы отличаемся четырьмя преимуществами</h1>
            <span>Вся электробытовая техника этого бренда отличается высоким качеством сборки и долговечностью эксплуатации. Однако при отсутствии сервисного обслуживания и регулярной профилактики, рабочий ресурс духового шкафа снижается. При аварийных поломках, мы не рекомендуем пробовать разобрать технику и устранить неисправность своими силами. Это усложняет диагностику и увеличивает стоимость устранения неисправности. Позвоните в наш сервисный центр, и ремонт посудомоечной машины Бош будет выполнен в день обращения на дому заказчика.</span>
            <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  )
}

export default Gridd
