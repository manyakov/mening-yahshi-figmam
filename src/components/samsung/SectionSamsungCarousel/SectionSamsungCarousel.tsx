import React, { useEffect, useState } from 'react';
import './SectionSamsungCarousel.scss';

import bcg from "../../../img/отзыв 7.png";
import dmr from "../../../img/Group 40.png";
import bcgm from "../../../img/отзыв 8.png";
import dmrm from "../../../img/описание.png";

interface Slide {
  id: number;
  image: string;
  avatar: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: dmr,
    avatar: bcg,
  },
  {
    id: 2,
    image: dmr,
    avatar: bcg,
  },
  {
    id: 3,
    image: dmr,
    avatar: bcg,
  },
  {
    id: 4,
    image: dmr,
    avatar: bcg,
  },
  {
    id: 5,
    image: dmr,
    avatar: bcg,
  },
  {
    id: 6,
    image: dmr,
    avatar: bcg,
  },
];

const Samsc: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl = isMobile ? dmrm : dmr;
  const imageUrl2 = isMobile ? bcgm : bcg;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-wrapper container">
      <h2 className='nvcrs'>Истории последних обращений в наш сервис</h2>
      <div className="carousel-contentsm">
        {/* Chap rasm */}
        <div className="carousel-left">
          <img src={imageUrl} alt="Left" />
        </div>

        {/* O'ng rasm */}
        <div className="carousel-right">
          <img src={imageUrl2} alt="Right" />
        </div>
      </div>

      <button className="nav-btn prev" onClick={prev}>‹</button>
      <button className="nav-btn next" onClick={next}>›</button>

      <div className="dots-wrapper">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Samsc;
