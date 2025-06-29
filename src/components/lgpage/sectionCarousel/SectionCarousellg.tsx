import React, { useEffect, useState } from "react";
import "./SectionCarousellg.scss";
import r1b from "../../../img/Rectangle66lg.png"
import r2b from "../../../img/Rectangle66lg(1).png"

interface Master {
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviews: number;
  image: string;
}

const masters: Master[] = [
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 4.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 4.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 3.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 3.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 3.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 3.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
  {
    name: "Антон Грисевич",
    title: "Мастер по ремонту бытовой техники",
    experience: "7 лет",
    rating: 3.8,
    reviews: 24,
    image: r1b
  },
  {
    name: "Павел Матухно",
    title: "Мастер по ремонту стиральных машин",
    experience: "3 года",
    rating: 5.0,
    reviews: 15,
    image: r2b
  },
];

const SectionCarousellg: React.FC = () => {
 const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - visibleCards + masters.length) % masters.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + visibleCards) % masters.length);
  };

  const visibleMasters = masters.slice(index, index + visibleCards).concat(
    masters.slice(0, Math.max(0, index + visibleCards - masters.length))
  );

  return (
    <div className="carousel-container">
      <h2>Мы подобрали лучших мастеров:</h2>
      <div className="carousel">
        {visibleMasters.map((master, i) => (
          <div className="card" key={i}>
            <img src={master.image} alt={master.name} className="card-image" />
            <div className="card-info">
              <h3>{master.name}</h3>
              <div className="line-gray1"></div>
              <p>{master.title}</p>
              <p>Стаж работы: {master.experience}</p>
              <div className="line-gray"></div>
              <div className="ratinglg">
                <span>{"★".repeat(Math.round(master.rating))}</span>
                <span className="rating-textlg">{master.rating} • {master.reviews} оценок</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controlslg">
        <button onClick={handlePrev} className="navlg prevlg">❮</button>
        <button onClick={handleNext} className="navlg nextlg">❯</button>
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(masters.length / visibleCards) }, (_, i) => (
          <span key={i} className={`dot ${i === Math.floor(index / visibleCards) ? "active" : ""}`}></span>
        ))}
      </div>
     
    </div>
  );
};

export default SectionCarousellg;
