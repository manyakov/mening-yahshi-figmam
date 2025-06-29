import { useState } from 'react';
import './Inputli.scss';

const Inputli = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="feedback-form">
      <h2><b>Мы будем рады вашему отзыву </b></h2>
      <span>Введено символов 0 / 1000</span>
      <textarea
        placeholder="Отзыв"
        maxLength={1000}
        className="feedback-textarea"
      ></textarea>
      <div className="feedback-rowsm">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Номер телефона" />
      </div>
      <div className="feedback-rowsm">
        <input type="text" placeholder="Ваш сервисный центр" />
        <input type="text" placeholder="Имя вашего мастера" />
      </div>
      <div className="rating-section">
        <label>Ваша оценка</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`star-wrapper ${rating >= star ? 'active' : ''}`}
              onClick={() => setRating(star)}
            >
              <span className="star">★</span>
            </button>
          ))}
        </div>
      </div>
      <div className="button-row">
        <button className="submit">ОТПРАВИТЬ</button>
        <button className="cancel">ОТМЕНА</button>
      </div>
    </div>
  );
};

export default Inputli;