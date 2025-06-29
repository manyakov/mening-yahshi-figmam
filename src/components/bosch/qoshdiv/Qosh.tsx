import { useState } from 'react'; 
import "./Qosh.scss";
import qosh from "../../../img/qosh.png"
interface IService {
  name: string;
  price: string;
}

const Qosh = () => {
  const initialServices: IService[] = [
    { name: "Вызов мастера", price: "бесплатно" },
    { name: "Замена электронного модуля управления", price: "1255452144 грн" },
    { name: "Замена термодатчика (термостат)", price: "1255452144 грн" },
    { name: "Замена вентилятора охлаждения", price: "1255452144 грн" },
    { name: "Замена переключателя", price: "1255452144 грн" },
  ];

  const [services, setServices] = useState<IService[]>(initialServices);


  const handleAddService = () => {

    const newService: IService = {
      name: "Замена термодатчика (термостат)",
      price: "1255452144 грн"
    };
    setServices(prevServices => [...prevServices, newService]);
  };

  return (
    <div className="remont-bosch">
      <h1>Цены на ремонт духового шкафа Bosch</h1>
      <p>Окончательная стоимость зависит от сложности выполняемых работ, состояния и конструктивных особенностей духового шкафа</p>
      <div className="cost-bosch">
        <img src={qosh} alt="Bosch Oven" />
        <div className="cost-bosch-right">
          <div className="cost-bosch-right-top">
            <h3>Наименование услуги</h3>
            <h3>Стоимость</h3>
          </div>
          <div className="cost-bosch-right-middle">
          
            {services.map((service, index) => (
              <div className="items-bosch" key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </div>
            ))}
            <div className="items-bosch" onClick={handleAddService}>
              <i>+</i>
              <span>Больше услуг</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qosh;
