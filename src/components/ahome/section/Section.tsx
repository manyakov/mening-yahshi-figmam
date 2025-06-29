import { useEffect, useRef, useState } from "react";
import "./Section.scss";
import bos from "../.././../img/bosch.jpg";
import samsong from "../.././../img/16.png";
import asus from "../.././../img/asus.png";
import braun from "../.././../img/braun.png";
import b4 from "../.././../img/4.png";
import b5 from "../.././../img/5.png";
import b6 from "../.././../img/6.png";
import b7 from "../.././../img/7.png";
import b8 from "../.././../img/8.png";
import b9 from "../.././../img/9.png";
import b10 from "../.././../img/10.png";
import lg from "../.././../img/11.png";
import b12 from "../.././../img/12.png";
import b13 from "../.././../img/13.png";
import b14 from "../.././../img/14.png";
import b15 from "../.././../img/15.png";
import b17 from "../.././../img/17.png";
import b18 from "../.././../img/18.png";
import b19 from "../.././../img/19.png";
import b20 from "../.././../img/20.png";
import passs from "../.././../img/pass.png";
import { Link } from "react-router-dom";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "apple", label: "apple" },
  { value: "asus", label: "asus" },
  { value: "samsung", label: "samsung" },
  { value: "sony", label: "sony" },
  { value: "huawei", label: "huawei" },
];

const images = [
  { name: "bos", img: bos },
  { name: "samsong", img: samsong },
  { name: "asus", img: asus },
  { name: "lg", img: lg },
  { name: "braun", img: braun },
  { name: "b4", img: b4 },
  { name: "b5", img: b5 },
  { name: "b6", img: b6 },
  { name: "b7", img: b7 },
  { name: "b8", img: b8 },
  { name: "b9", img: b9 },
  { name: "b10", img: b10 },
  { name: "b12", img: b12 },
  { name: "b13", img: b13 },
  { name: "b14", img: b14 },
  { name: "b15", img: b15 },
  { name: "b17", img: b17 },
  { name: "b18", img: b18 },
  { name: "b19", img: b19 },
  { name: "b20", img: b20 }
];


const Section = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const ref = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (label: string) => {
    setSearchTerm(label);
    setIsOpen(false);
  };

  return (
    <div className="father-box container-fluid">
      <div className="input-qsm container">
        <h1>Выберите сервисный центр</h1>
        <div className="nav-3" ref={ref}>
          <div className="custom-select">
            <input
              type="text"
              className="form-control"
              placeholder="Производитель вашего устройства"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
            />
            <span className={`arrow ${isOpen ? "up" : "down"}`} />
          </div>

          {isOpen && (
            <ul className="options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <li
                    key={opt.value}
                    className="option"
                    onClick={() => handleSelect(opt.label)}
                  >
                    {opt.label}
                  </li>
                ))
              ) : (
                <li className="option disabled">Ничего не найдено</li>
              )}
            </ul>
          )}
        </div>

        <h3>Алфавитный указатель производителей</h3>
        <div className="alf">
          {[
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
            "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
            "U", "V", "W", "X", "Y", "Z", "А-Я", "Прочие"
          ].map((letter, i) => (
            <p key={i}>{letter}</p>
          ))}
        </div>
      </div>

   <div className="cards container">
  {images.slice(0, visibleCount).map(({ name, img }, index) => (
    <Link to={`/${name}`} key={index}>
      <img className="img-fluid" src={img} alt={name} />
    </Link>
  ))}
</div>

      {visibleCount < images.length && (
        <div className="show-more-btn container">
          <button onClick={() => setVisibleCount(visibleCount + 4)}>
            Показать ещё <img src={passs} alt="icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;
