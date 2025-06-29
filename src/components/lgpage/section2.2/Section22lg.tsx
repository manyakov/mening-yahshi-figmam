import { useEffect, useState } from "react";
import "./LgRepair.scss";

import Холодильник from "../../../img/ga-b459smum-holodilnik-lg-2_600_thumbnail 1.png"
import pelisos from "../../../img/стиральная_thumbnail 1.png"
import Парогенератор from "../../../img/Сушильная машина.png"
import Стиральная from "../../../img/179357025_w640_h640_mikrovolnovaya-pech-lg 1.png"
import Сушильная from "../../../img/tovar107715_thumbnail 1.png"
import Посудомоечная from "../../../img/духовка 1.png"
import Духовой from "../../../img/варочная панель 1.png"
import Варочная from "../../../img/910d6c61ced9f3e6d29cc95b85354145 1.png"
import Кухонная from "../../../img/png-transparent-air-conditioning-lg-electronics-Сплит-систем_thumbnail 1.png"
import Микроволновая from "../../../img/large_02_thumbnail 1.png"
import Кондиционер from "../../../img/вытяжка 1.png"

const allCategories = [
  "Бытовая техника",
  "IT продукты",
  "ТВ / Аудио / Видео",
];

const items = [
  // Бытовая техника
  { name: "Холодильник ", image: Варочная, category: "Бытовая техника" },
  { name: "Стиральная машина", image: pelisos, category: "Бытовая техника" },
  { name: "Сушильная машина", image: Парогенератор, category: "Бытовая техника" },
  { name: "Стиральная машина", image: Стиральная, category: "Бытовая техника" },
  { name: "Сушильная машина", image: Сушильная, category: "Бытовая техника" },
  { name: "Посудомоечная машина", image: Посудомоечная, category: "Бытовая техника" },
  { name: "Духовой шкаф", image: Духовой, category: "Бытовая техника" },
  { name: "Варочная панель", image: Холодильник, category: "Бытовая техника" },
  { name: "Кухонная вытяжка", image: Кухонная, category: "Бытовая техника" },
  { name: "Микроволновая печь", image: Микроволновая, category: "Бытовая техника" },
  { name: "Кондиционер", image: Кондиционер, category: "Бытовая техника" },

  // IT продукты
  { name: "Смартфон", image: "smartphone.jpg", category: "IT продукты" },
  { name: "Планшет", image: "tablet.jpg", category: "IT продукты" },
  { name: "Умные часы", image: "smartwatch.jpg", category: "IT продукты" },


  // ТВ / Аудио / Видео
  { name: "Телевизор", image: "tv.jpg", category: "ТВ / Аудио / Видео" },
  { name: "Саундбар", image: "soundbar.jpg", category: "ТВ / Аудио / Видео" },
  { name: "Домашний кинотеатр", image: "home-theater.jpg", category: "ТВ / Аудио / Видео" },
];

export default function LgRepair() {
  const [activeTab, setActiveTab] = useState("Бытовая техника");
  const [screenCategories, setScreenCategories] = useState(allCategories);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenCategories(["Бытовая техника", "IT продукты"]);
        if (!screenCategories.includes(activeTab)) {
          setActiveTab("Бытовая техника");
        }
      } else {
        setScreenCategories(allCategories);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, screenCategories]);

  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <div className="repair-wrapper container">
      <h1>Мы осуществляем ремонт техники <b>Samsung</b> всех видов</h1>
      <p className="subtitle">
        Чтобы ни произошло с Вашей техникой мы всегда постараемся найти самое оптимальное решение<br />
        для восстановления её работоспособности и внешнего вида, обслужим и осуществим настройку
      </p>

      <div className="tabslg">
        {screenCategories.map((cat) => (
          <div
            key={cat}
            className={`tablg ${cat === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="itemsl">
        {filteredItems.map((item, index) => (
          <div className="iteml" key={index}>
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
