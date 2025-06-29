import React, { useState } from 'react';
import './LgCarousel.scss'
import crasm from "../../../img/фонlg.png"

const images = [
  crasm,
  crasm,
  crasm,
];
const LgCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lg-carousel">
      <div
        className="carousel-slidelg"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="text-contentlg">
          <h2 className='h2'>Сервисный центр LG в Киеве</h2>
          <p>Ремонт и обслуживание техники от мастеров с 10-летним опытом</p>
          <div className="buttonss">
            <button className="btn btn-danger">ВЫБРАТЬ МАСТЕРА</button>
            <button className="btn btn-outlined">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</button>
          </div>
        </div>

        <div className="nav-btn-wrapper">
          <div className="nav-btnLg" onClick={prevSlide}>❮</div>
          <div className="nav-btnLg" onClick={nextSlide}>❯</div>
        </div>

        <div className="progress-indicatorr">
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

export default LgCarousel;