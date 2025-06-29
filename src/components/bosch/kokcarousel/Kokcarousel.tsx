// TSX file with qcr- prefix for all custom classNames
import "./Kokcarousel.scss";
import rey from "../../../img/bosrey.png";
import reym from "../../../img/рейтингlg.png";
import strelka from "../../../img/strelka.png";
import { useEffect, useState } from "react";
import rasm from "../../../img/фотоsm.png";
import rasm2 from "../../../img/фотоsm1.png";
import iconka from "../../../img/bosga.png";

const reviews = [
  {
    id: 1,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Александр Меньшов",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Николай Антоненко",
    date: "19.12.2021",
    img: rasm,
    stars: 5,
  },
  {
    id: 2,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Владимир Повелецкий",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Илья Сахаров",
    date: "11.11.2021",
    img: rasm2,
    stars: 4,
  },
  {
    id: 3,
    text: "Спасибо за спасённый ноутбук! Обратился за профессиональной чисткой после разлитого на ноут чая, сделали быстро и качественно, всё объяснили и рассказали, как действовать в таких случаях. Очень рекомендую!",
    name: "Владимир Повелецкий",
    role: "Клиент сервисного центра",
    brand: "Samsung",
    master: "Илья Сахаров",
    date: "11.11.2021",
    img: rasm2,
    stars: 4,
  },
];

const Kokcarousel = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl = isMobile ? reym : rey;

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const mainReview = reviews[index];
  const nextReview = reviews[(index + 1) % reviews.length];

  return (
    
      <div className="rangbos">
    <div className="qcr-ota-box container d-flex">
      <div className="qcr-chap">
        <h2>Отзывы</h2>
        <img className="img-fluid qcr-reyting-rasm" src={imageUrl} alt="reyting" />
        <div className="d-flex">
        <button className="qcr-otziv-btn-bos">ОСТАВИТЬ ОТЗЫВ</button>
        <button className="qcr-hammasi-btn-bos">ЧИТАТЬ ВСЕ ОТЗЫВЫ</button>
        </div>
      </div>

      <div className="qcr-ong-bos">
        <div className="qcr-karusel-quti-bos">
          <div className="qcr-sharh-karta-bos qcr-orqa-karta-bos">
            <div className="qcr-ajratgich"></div>
            <p>“{nextReview.text}”</p>
            <img src={nextReview.img} alt={nextReview.name} />
            <div className="qcr-sharhlovchi">
              <div>
                <strong>{nextReview.name}</strong>
                <p>
                  {nextReview.role} <b>{nextReview.brand}</b>
                  <br />
                  Мастер <b>{nextReview.master}</b>
                </p>
              </div>
            </div>
            <div className="qcr-pastki">
              <span>{nextReview.date}</span>
              <span>{"★".repeat(nextReview.stars)}</span>
            </div>
          </div>

          <img className="qcr-belgi-rasm" src={iconka} alt="bi" />

          <div className="qcr-sharh-karta-bos qcr-old-karta">
            <div className="qcr-ajratgich"></div>
            <p>“{mainReview.text}”</p>
            <img src={mainReview.img} alt={mainReview.name} />
            <div className="qcr-sharhlovchi">
              <div>
                <strong>{mainReview.name}</strong>
                <p>
                  {mainReview.role} <b>{mainReview.brand}</b>
                  <br />
                  Мастер <b>{mainReview.master}</b>
                </p>
              </div>
            </div>
            <div className="qcr-pastki">
              <span>{mainReview.date}</span>
              <span>{"★".repeat(mainReview.stars)}</span>
            </div>
          </div>

          <button className="qcr-strelka qcr-chap-strelka" onClick={prev}>
            <img src={strelka} alt="prev" />
          </button>
          <button className="qcr-strelka qcr-ong-strelka" onClick={next}>
            <img src={strelka} alt="next" />
          </button>

          <div className="qcr-nuqtalar">
            {reviews.map((_, i) => (
              <span key={i} className={i === index ? "active" : ""}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Kokcarousel;
