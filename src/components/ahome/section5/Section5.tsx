import "./Section5.scss";
import rey from "../../../img/рейтинг.png";
import reym from "../../../img/рейтингm.png";
import strelka from "../../../img/strelka.png";
import strelka2 from "../../../img/arrow.png";
import { useEffect, useState } from "react";
import rasm from "../../../img/Ellipse 31.png"
import rasm2 from "../../../img/Ellipse 31-1.png"
import rasm3 from "../../../img/Ellipse 31-2.png"
import iconka from "../../../img/Group.png"


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
    name: "Марина Алексеева",
    role: "Клиент сервисного центра",
    brand: "HP",
    master: "Олег Иванов",
    date: "03.10.2021",
    img: rasm3,
    stars: 5,
  },
];

const Section5 = () => {
  const [index, setIndex] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // boshlanishida holatni tekshir
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl = isMobile ? reym : rey;

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const mainReview = reviews[index];
  const nextReview = reviews[(index + 1) % reviews.length];

  return (
    <div className="father-box container d-flex">
      <div className="left">
        <h2>Отзывы</h2>
        <img className="img-fluid rating-img" src={imageUrl} alt="reyting" />
        <button className="bttn">ОСТАВИТЬ ОТЗЫВ</button>
        <button className="bttn1">ЧИТАТЬ ВСЕ ОТЗЫВЫ</button>
      </div>

      <div className="right">
        <div className="carousel-box">
          <div className="review-card back-card">
              <div className="divider"></div>
            <p>“{nextReview.text}”</p>
              <img src={nextReview.img} alt={nextReview.name} />
            <div className="reviewer">
              <div>
                <strong>{nextReview.name}</strong>
                <p>
                  {nextReview.role} <b>{nextReview.brand}</b>
                  <br />
                  Мастер <b>{nextReview.master}</b>
                </p>
              </div>
            </div>
            <div className="bottom">
              <span>{nextReview.date}</span>
              <span>{"⭐".repeat(nextReview.stars)}</span>
            </div>
          </div>

        <img className="iconka-img" src={iconka} alt="bi" />
          <div className="review-card front-card">
            <div className="divider"></div>
            <p className="rasmning-tepasidagi">“{mainReview.text}”</p>
              <img src={mainReview.img} alt={mainReview.name} />
            <div className="reviewer">
              <div>
                <strong>{mainReview.name}</strong>
                <p>
                  {mainReview.role} <b>{mainReview.brand}</b>
                  <br />
                  Мастер <b>{mainReview.master}</b>
                </p>
              </div>
            </div>
            <div className="bottom">
              <span>{mainReview.date}</span>
              <span>{"⭐".repeat(mainReview.stars)}</span>
            </div>
          </div>

          <button className="custom-arrow left-arrow" onClick={prev}>
            <img src={strelka} alt="prev" />
          </button>
          <button className="custom-arrow right-arrow" onClick={next}>
            <img src={strelka2} alt="next" />
          </button>

          <div className="dots">
            {reviews.map((_, i) => (
              <span key={i} className={i === index ? "active" : ""}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
