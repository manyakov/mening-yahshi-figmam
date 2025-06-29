import React, { useState } from "react";
import "./Semis.scss";
import soroq from "../../../img/Frame 23.png"

interface Message {
  id: number;
  question: string;
}

const Sems: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      question: "Что делать, если состояние устройства после ремонта меня не устраивает?",
    },
    {
      id: 2,
      question: "В процессе ремонта сервисный центр сообщил, что стоимость и/или сроки необходимо увеличить. Что делать?",
    },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAdd = () => {
    if (newQuestion.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        question: newQuestion,
      };
      setMessages([...messages, newMsg]);
      setNewQuestion("");
    }
  };

  return (
    <div className="s-wrapper">
        <h1 style={{
            fontWeight:550
        }}>Часто задаваемые вопросы</h1>
        <span style={{
            marginBottom:50,
            maxWidth:530,
            textAlign:"center"
        }}>Все ваши часто задаваемые вопросы о нашем сервисе. Если не нашли ответ, Вы можете задать его через форму обратной связи</span>
      <div className="s-grid">
        {messages.map((msg) => (
          <div key={msg.id} className="s-card">
            <div className="s-icon-wrapper">
              <span className="s-icon"><img src={soroq} alt="roroq" /></span>
            </div>
            <div className="s-question">{msg.question}</div>
            <button className="s-read-more">ЧИТАТЬ ОТВЕТ</button>
          </div>
        ))}
      </div>

      <button className="s-ask-btn" onClick={() => setShowInput(!showInput)}>
        ЗАДАТЬ СВОЙ ВОПРОС
      </button>

      {showInput && (
        <div className="s-input-area">
          <input
            type="text"
            placeholder="Ваш вопрос..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button onClick={handleAdd}>Добавить</button>
        </div>
      )}
    </div>
  );
};

export default Sems;
