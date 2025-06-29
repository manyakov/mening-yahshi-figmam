import { useEffect, useRef, useState } from "react";
import "./LgNav.scss";
import logo from "../../../img/2108662082.png"

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "калиновка", label: "Калиновка" },
  { value: "калины", label: "Калины" },
  { value: "калуш", label: "Калуш" },
  { value: "каменец-Подольский", label: "Каменец-Подольский" },
  { value: "каменица", label: "Каменица" },
];

const LgNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="nav-father d-flex justify-content-between align-items-center">
      <div className="nav-1 d-none d-md-flex gap-4">
        <h5 className="m-0">О платформе</h5>
        <h5 className="m-0">Контакты</h5>
        <h5 className="m-0">88008008000</h5>
      </div>

      <div className="nav-22">
        <img className="img-fluid" src={logo} alt="samso" />
      </div>

      <div className="nav-3" ref={ref}>
        <div className="custom-select">
          <input
            type="text"
            className="form-control"
            placeholder="Ваш город"
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
    </div>
  );
};

export default LgNav;
