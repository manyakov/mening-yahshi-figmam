import React, { useState } from "react";
import "./Section2.scss";
import btt from "../../../img/kukhonnaya_tekhnika 1.png"
import kbt from "../../../img/pngwing 1.png"
import kt from "../../../img/pngegg (2) 1.png"
import ot from "../../../img/printersSamsung 1.png"
import ip from "../../../img/pngegg 1.png"
import st from "../../../img/pngwing 2.png"
import et from "../../../img/pngwing 4.png"
import ekt from "../../../img/pngwing 5.png"
import est from "../../../img/tech-09 1.png"
import aud from "../../../img/pngwing 8.png"
import ko from "../../../img/pngwing 6.png"
import gt from "../../../img/pngwing 7.png"
import rch from "../../../img/smartwatchsSamsung 1.png"
import ut from "../../../img/pngwing 11.png"
import strelka from "../../../img/strelka.png";
import strelka2 from "../../../img/arrow.png";

const categories = [
  { label: "Бытовая техника", image: btt },
  { label: "Крупная бытовая техника", image: kbt },
  { label: "Компьютерная техника", image: kt },
  { label: "Офисная техника", image: ot },
  { label: "Игровые приставки", image: ip },
  { label: "Цифровая техника", image: st },
  { label: "Электро-транспорт", image: et },
  { label: "Климатическая техника", image: ekt },
  { label: "Строительная техника", image: est },
  { label: "Аудиотехника", image: aud },
  { label: "Концертное оборудование", image: ko },
  { label: "Садовая техника", image: gt },
  { label: "Ремонт часов", image: rch },
  { label: "Уходовая техника", image: ut },
];

const Section2: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setSelectedIndex(null);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setSelectedIndex(null);
    }
  };

  const filteredCategories = () => {
    if (step === 1) return categories;
    if (step === 2)
      return categories.filter(c =>
        ["Компьютерная техника", "Цифровая техника", "Аудиотехника"].includes(c.label)
      );
    if (step === 3)
      return categories.filter(c =>
        ["Бытовая техника", "Крупная бытовая техника"].includes(c.label)
      );
    return [];
  };

  const selectedCategory = selectedIndex !== null ? filteredCategories()[selectedIndex] : null;

  return (
    <div className="repair-category-selector container">
      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">{step}/3</p>
      </div>

      <h2 className="title">Что чиним?</h2>

      {selectedCategory ? (
        <div className="category-detail-view">
          <div className="category-card active">
            <img src={selectedCategory.image} alt={selectedCategory.label} className="category-image" />
            <span className="category-label">{selectedCategory.label}</span>
          </div>
        </div>
      ) : (
        <div className="category-grid row">
          {filteredCategories().map((cat, index) => (
            <div key={index} className="crd col-6 col-sm-6 col-md-3 col-lg-2">
              <div
                className={`category-card ${selectedIndex === index ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                <img src={cat.image} alt={cat.label} className="category-image" />
                <span className="category-label">{cat.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="navigation-buttons">
        <button className="left" onClick={handleBack} disabled={step === 1}><img src={strelka} alt="sttr2" /></button>
        <button className="right" onClick={handleNext} disabled={step === 3}><img src={strelka2} alt="sttr2" /></button>
      </div>
    </div>
  );
};

export default Section2;
