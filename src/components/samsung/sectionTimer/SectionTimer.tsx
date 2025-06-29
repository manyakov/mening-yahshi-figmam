import React, { useEffect, useState } from 'react';
import './SectionTimer.scss';
import sogot from "../../../img/Слой 1 1.png"

const SectionTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 soat

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const hours = formatTime(Math.floor(timeLeft / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  return (
   <div>
     <div className="countdown-wrapper container">
      <p className="countdown-title">До конца акции осталось</p>
    <div className="countdown-box shadow">
  <div className="time-groupsm">
    <span className="time">{hours}</span>
    <span className="label">часов</span>
  </div>
  <div className="time-groupsm">
    <span className="time">{minutes}</span>
    <span className="label">минут</span>
  </div>
  <div className="time-groupsm">
    <span className="time">{seconds}</span>
    <span className="label">секунд</span>
  </div>
</div>

      <button className="btn-discount">ПОЛУЧИТЬ СКИДКУ</button>
    </div>
    <img style={{
        marginTop:79
    }} className='img-fluid' src={sogot} alt="sogot" />
   </div>
  );
};

export default SectionTimer;
