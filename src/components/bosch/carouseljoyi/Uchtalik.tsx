import React, { useState } from "react";
import "./Uchtalik.scss";

import anton from "../../../img/anton.png";
import pavel from "../../../img/pavel.png";

const masters = [
  {
    name: "Антон Гривасев",
    profession: "Мастер по ремонту бытовой техники",
    experience: "Стаж работы: 7 лет",
    rating: 4.6,
    reviews: 24,
    image: anton
  },
  {
    name: "Павел Матухно",
    profession: "Мастер по ремонту стиральных машин",
    experience: "Стаж работы: 3 года",
    rating: 5.0,
    reviews: 15,
    image: pavel
  },
  {
    name: "Антон Гривасев",
    profession: "Мастер по ремонту бытовой техники",
    experience: "Стаж работы: 7 лет",
    rating: 4.6,
    reviews: 24,
    image: anton
  }
];

const Uchtalik: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % masters.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + masters.length) % masters.length);
  };

  return (
    <div className="master-carousel">
      <h3 className="carousel-title">Мы подобрали лучших мастеров:</h3>

      <div className="carousel-container">
        <div className="cards-wrapper">
          {masters.map((master, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + masters.length) % masters.length
                ? "prev"
                : index === (currentIndex + 1) % masters.length
                ? "next"
                : "hidden";

            return (
              <div key={index} className={`card-box ${position}`}>
                <img
                  src={master.image}
                  alt={master.name}
                  className="master-image"
                />
                <div className="info">
                  <h5 className="master-name line">{master.name}</h5>
                  <p>{master.profession}</p>
                  <p className="line">{master.experience}</p>
                  <div className="rating">
                    <span className="stars">★ ★ ★ ★ ★</span>
                    <span className="score">
                      {master.rating} • {master.reviews} оценок
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     <div className="bottom-controls container">
  <div className="dots">
    {masters.map((_, i) => (
      <span
        key={i}
        className={`dot ${i === currentIndex ? "active" : ""}`}
      ></span>
    ))}
  </div>

  <div className="arrow left" onClick={goPrev}>
    {"<"}
  </div>

  <div className="arrow right" onClick={goNext}>
    {">"}
  </div>
</div>

    </div>
  );
};

export default Uchtalik;
