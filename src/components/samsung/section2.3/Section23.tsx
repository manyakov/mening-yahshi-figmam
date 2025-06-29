import { useEffect, useState } from "react";
import "../section2.2/Section22.scss";

import pelisos from "../../../img/pelisos.png"
import Парогенератор from "../../../img/Парогенератор.png"
import Гладильная from "../../../img/13hq_thumbnail 1.png"
import Стиральная from "../../../img/Стиральная машина.png"
import Сушильная from "../../../img/Сушильная машина.png"
import Посудомоечная from "../../../img/Посудомоечная машина.png"
import Холодильник from "../../../img/Холодильник.png"
import Духовой from "../../../img/Духовой шкаф.png"
import Варочная from "../../../img/Варочная панель.png"
import Кухонная from "../../../img/Кухонная вытяжка.png"
import Микроволновая from "../../../img/Микроволновая печь.png"
import Кондиционер from "../../../img/Кондиционер.png"
import savol from "../../../img/вопросы.png"
import savol1 from "../../../img/1 вопрос.png"

const allCategories = [
  "Бытовая техника",
  "Цифровая техника",
  "Компьютерная техника",
  "ТВ и Аудио",
];

const items = [
  { name: "pelisos", image: pelisos, category: "Бытовая техника" },
  { name: "Парогенератор", image: Парогенератор, category: "Бытовая техника" },
  { name: "", image:Гладильная, category: "Бытовая техника" },
  { name: "Стиральная машина", image: Стиральная, category: "Бытовая техника" },
  { name: "Сушильная машина", image: Сушильная, category: "Бытовая техника" },
  { name: "Посудомоечная машина", image: Посудомоечная, category: "Бытовая техника" },
  { name: "Холодильник", image: Холодильник, category: "Бытовая техника" },
  { name: "Духовой шкаф", image: Духовой, category: "Бытовая техника" },
  { name: "Варочная панель", image: Варочная, category: "Бытовая техника" },
  { name: "Кухонная вытяжка", image: Кухонная, category: "Бытовая техника" },
  { name: "Микроволновая печь", image: Микроволновая, category: "Бытовая техника" },
  { name: "Кондиционер", image: Кондиционер, category: "Бытовая техника" },

  { name: "Смартфон", image: Кондиционер, category: "Цифровая техника" },
  { name: "Планшет", image: Микроволновая, category: "Цифровая техника" },
  { name: "Умные часы", image: Кухонная, category: "Цифровая техника" },

  { name: "Ноутбук", image: Варочная, category: "Компьютерная техника" },
  { name: "Монитор", image: Духовой, category: "Компьютерная техника" },
  { name: "Принтер", image: Холодильник, category: "Компьютерная техника" },

  { name: "Телевизор", image: Посудомоечная, category: "ТВ и Аудио" },
  { name: "Саундбар", image: Сушильная, category: "ТВ и Аудио" },
  { name: "Домашний кинотеатр", image: Стиральная, category: "ТВ и Аудио" },
];

export default function SamsungRepair2() {
  const [activeTab, setActiveTab] = useState("Бытовая техника");
  const [screenCategories, setScreenCategories] = useState(allCategories);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      const newScreenCategories = ["Бытовая техника", "Цифровая техника"];
      setScreenCategories(newScreenCategories);
      if (!newScreenCategories.includes(activeTab)) {
        setActiveTab("Бытовая техника");
      }
    } else {
      setScreenCategories(allCategories);
    }
  };

  handleResize(); 

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [activeTab, allCategories]);

  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <div className="repair-wrapper container">
        <h2 className="qandaydr" style={{
            maxWidth:670,
            marginTop:200
        }}>Ответьте на 3 вопроса и получите подарок от нашего сервисного центра</h2>
        <img className="img-fluid" src={savol} style={{
            marginTop:20,
            marginBottom:70
        }} alt="salov" width={250} />
        <img className="img-fluid" src={savol1} style={{
            display:"block"
        }} alt="salov" width={400} />
      <div className="tabssm">
        {screenCategories.map((cat) => (
          <div
            key={cat}
            className={`tabsm ${cat === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="items">
        {filteredItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
