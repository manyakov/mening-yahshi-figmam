import "./Foiz.scss"
import i1 from "../../../img/icon1.png"
import i2 from "../../../img/icon2.png"
import i3 from "../../../img/icon3.png"
import i4 from "../../../img/icon4.png"
import i5 from "../../../img/icon5.png"
import i6 from "../../../img/icon6.png"


import f84 from "../../../img/84f.png"
import f80 from "../../../img/80f.png"
import f74 from "../../../img/74f.png"
import f85 from "../../../img/85f.png"
import f76 from "../../../img/76f.png"
import f87 from "../../../img/87f.png"


const Foiz = () => {
  return (
    <div>
      <div className="orab-turadi">
        <div className="iktalikni-oraydi1">
        <div className="foiz-84">
            <div className="iconkasi-div">
                <img src={i1} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f84} alt="84" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Не включается</span>
            </div>
        </div>
        <div className="foiz-80">
            <div className="iconkasi-div">
                <img src={i2} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f80} alt="80" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Не нагревается</span>
            </div>
        </div>
        </div>

        <div className="iktalikni-oraydi2">
        <div className="foiz-74">
            <div className="iconkasi-div">
                <img src={i3} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f74} alt="74" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Духовой шкаф греет частично</span>
            </div>
        </div>
        <div className="foiz-85">
            <div className="iconkasi-div">
                <img src={i4} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f85} alt="85" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Перегревается</span>
            </div>
        </div>
        </div>

        <div className="iktalikni-oraydi3">
        <div className="foiz-76">
            <div className="iconkasi-div">
                <img src={i5} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f76} alt="84" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Имеет посторонний запах</span>
            </div>
        </div>
        <div className="foiz-87">
            <div className="iconkasi-div">
                <img src={i6} alt="i1" />
            </div>
            <div className="iktali-rasmlar">
                <img className="img-fluid" src={f87} alt="84" />
                <div className="uzun-div"></div>
            </div>
            <div className="past-yozuvlari">
                <span>Конвекция снижает температуру в духовке</span>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Foiz
