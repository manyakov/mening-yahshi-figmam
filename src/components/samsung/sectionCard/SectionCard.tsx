import React from "react";
import "./SectionCard.scss";
import brr from "../../../img/Rectangle 1112.png"
import ikr from "../../../img/Rectangle 1113.png"
import uchr from "../../../img/Rectangle 1114.png"
import trr from "../../../img/Rectangle 1115.png"

interface Step {
  number: string;
  text: string;
  img: string;
  dark: number;
  light: number;
}
const steps: Step[] = [
  {
    number: "01",
    text: "9 из 10 продуктов мы чиним за 1 день",
    img: brr,
    dark: 25,
    light: 75,
  },
  {
    number: "02",
    text: "После ремонта техника проходит контроль качества по 26 пунктам",
    img: ikr,
    dark: 50,
    light: 50,
  },
  {
    number: "03",
    text: "Диагностика 0 грн, даже в случае отказа от ремонта",
    img: uchr,
    dark: 75,
    light: 25,
  },
  {
    number: "04",
    text: "Наш менеджер будет держать вас в курсе всех этапов работы",
    img: trr,
    dark: 100,
    light: 0,
  },
];





const StepsSection: React.FC = () => {
  return (
    <section className="step-box">
      <div className="step-box__wrapper container">
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div className="col-12 col-sm-6 col-lg-3 step-box__column" key={index}>
              <div className="step-box__card text-center">
                <div className="step-box__number">{step.number}</div>
                <div className="step-box__text">{step.text}</div>
                <div className="step-box__line">
                  <div className="line-dark" style={{ width: `${step.dark}%` }}></div>
                  <div className="line-light" style={{ width: `${step.light}%` }}></div>
                </div>
                <div className="step-box__image">
                  <img src={step.img} alt={`step ${step.number}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

