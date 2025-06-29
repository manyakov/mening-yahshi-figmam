import { useEffect, useState, useMemo } from "react";
import "./Section22.scss";

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

const allCategoriesStatic = [
  "Бытовая техника",
  "Цифровая техника",
  "Компьютерная техника",
  "ТВ и Аудио",
];

const items = [
  { name: "", image: pelisos, category: "Бытовая техника" },
  { name: "Парогенератор", image: Парогенератор, category: "Бытовая техника" },
  { name: "Гладильная система", image: Гладильная, category: "Бытовая техника" },
  { name: "Стиральная машина", image: Стиральная, category: "Бытовая техника" },
  { name: "Сушильная машина", image: Сушильная, category: "Бытовая техника" },
  { name: "Посудомоечная машина", image: Посудомоечная, category: "Бытовая техника" },
  { name: "Холодильник", image: Холодильник, category: "Бытовая техника" },
  { name: "Духовой шкаф", image: Духовой, category: "Бытовая техника" },
  { name: "Варочная панель", image: Варочная, category: "Бытовая техника" },
  { name: "Кухонная вытяжка", image: Кухонная, category: "Бытовая техника" },
  { name: "Микроволновая печь", image: Микроволновая, category: "Бытовая техника" },
  { name: "Кондиционер", image: Кондиционер, category: "Бытовая техника" },

  { name: "Pelisos", image: pelisos, category: "Цифровая техника" },
  { name: "Планшет", image: Варочная, category: "Цифровая техника" },
  { name: "Умные часы", image: Кондиционер, category: "Цифровая техника" },

  { name: "Ноутбук", image: Кухонная, category: "Компьютерная техника" },
  { name: "Монитор", image: Сушильная, category: "Компьютерная техника" },
  { name: "Принтер", image: Стиральная, category: "Компьютерная техника" },

  { name: "Телевизор", image: Парогенератор, category: "ТВ и Аудио" },
  { name: "Саундбар", image: Микроволновая, category: "ТВ и Аудио" },
  { name: "Домашний кинотеатр", image: Духовой, category: "ТВ и Аудио" },
];

export default function SamsungRepair() {
  const allCategories = useMemo(() => allCategoriesStatic, []);
  const [activeTab, setActiveTab] = useState("Бытовая техника");
  const [screenCategories, setScreenCategories] = useState(allCategories);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const mobileCategories = ["Бытовая техника", "Цифровая техника"];

      if (isMobile) {
        if (JSON.stringify(screenCategories) !== JSON.stringify(mobileCategories)) {
          setScreenCategories(mobileCategories);
        }
      } else {
        if (JSON.stringify(screenCategories) !== JSON.stringify(allCategories)) {
          setScreenCategories(allCategories);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [allCategories, screenCategories]);

  useEffect(() => {
    if (!screenCategories.includes(activeTab)) {
      setActiveTab(screenCategories[0]);
    }
  }, [screenCategories, activeTab]);

  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <div className="repair-wrapper container">
      <h1>Мы осуществляем ремонт техники <b>Samsung</b> всех видов</h1>
      <p className="subtitle">
        Чтобы ни произошло с Вашей техникой мы всегда постараемся найти самое оптимальное решение<br />
        для восстановления её работоспособности и внешнего вида, обслужим и осуществим настройку
      </p>

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

      <div className="not-found">
        <h3>Не нашли свой вид техники?</h3>
        <p>
          Наши специалисты бесплатно вас проконсультируют и ответят на все вопросы по телефону
          88008008000 или Вы можете оставить заявку и наш специалист свяжется с Вами в течение 1 часа
        </p>
        <button>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </div>
  );
}
