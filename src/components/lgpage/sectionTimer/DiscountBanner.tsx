import { useEffect, useState } from 'react';
import './DiscountBanner.scss';

const DiscountBanner = () => {
  const [secondsLeft, setSecondsLeft] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
    <div className="discount-bannerr ">
      <div className="top-section">
        <div className="text-contentlg">
          <p>
            Оставьте заявку <br />
            в течение <strong>1 часа</strong> <br />
            и получите <br />
            <span className="highlight">СКИДКУ 15%</span>
          </p>
        </div>

        <div className="timer-overlaylg">
          <span>{formatTime(secondsLeft)}</span>
        </div>
      </div>


      <div className="bottom-section">
        <div className="chaptomon">
        <small className="text-mutedd">
          Скидка предоставляется при первом обращении в сервис
        </small>
        <button className="btn btn-danger">ПОЛУЧИТЬ СКИДКУ</button>
        </div>
        <div className="ongt">
          <small className='dokonsa'>До конца акции осталось</small>

        </div>
      </div>
    </div>

    </div>
  );
};

export default DiscountBanner;
