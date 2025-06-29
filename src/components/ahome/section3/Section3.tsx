import React from "react";
import "./Section3.scss";
import rasm1 from "../../../img/Ellipse 2.png";
import rasm2 from "../../../img/Ellipse 1.png";
import rasm3 from "../../../img/Ellipse 2-1.png";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    number: "01",
    title: "Быстрый поиск исполнителя",
    description:
      "Поможем легко и быстро найти сервис, который сможет справиться с задачей качественно",
    image: rasm1,
  },
  {
    number: "02",
    title: "Гарантия и качество",
    description:
      "Только проверенные сервисные центры, высококлассные специалисты, официальные поставщики и лицензионное ПО",
    image: rasm2,
  },
  {
    number: "03",
    title: "Реальные отзывы",
    description:
      "Мы составили собственную систему рейтинга специалистов на основе отзывов от реальных клиентов",
    image: rasm3,
  },
];

const Section3: React.FC = () => {
  const getLineClass = (index: number) => {
    if (index === 0) return "left";
    if (index === 1) return "center";
    return "right";
  };

  return (
    <section className="why-us container">
      <h2 className="why-us-title">Почему нас выбирают</h2>
      <p className="why-us-subtitle">С нами выгодно, быстро, качественно</p>
      <div className="why-us-cards">
        {features.map((feature, idx) => (
          <div className="why-us-card" data-number={feature.number} key={idx}>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
            <div className={`card-line ${getLineClass(idx)}`}>
              <span />
              <span />
              <span />
            </div>
            <img src={feature.image} alt={feature.title} className="card-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
 