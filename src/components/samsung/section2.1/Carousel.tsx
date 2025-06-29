import React, { useState } from 'react';
import './Carousel.scss';
import crasm from "../../../img/Rectangle 122.png"

const images = [
  crasm,
  crasm,
  crasm,
];
const SamsungCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="samsung-carousel">
      <div
        className="carousel-slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="text-contentsm">
          <h2>Сервисный центр Samsung в Киеве</h2>
          <p>Ремонт и обслуживание техники от мастеров с 10-летним опытом</p>
          <div className="buttonssm">
            <button className="btn btn-light rounded-btn">ВЫБРАТЬ МАСТЕРА</button>
            <button className="btn btn-outline-light rounded-btn">ЗАКАЗАТЬ ЗВОНОК</button>
          </div>
        </div>

        <div className="nav-btn-wrapper">
          <button className="nav-btn" onClick={prevSlide}>❮</button>
          <button className="nav-btn" onClick={nextSlide}>❯</button>
        </div>

        <div className="progress-indicator">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`bar ${idx === currentIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SamsungCarousel;