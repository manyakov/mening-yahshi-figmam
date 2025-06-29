import "./Section4.scss"
import ezrs from "../../../img/изображение.png"
const Section4 = () => {
  return (
    <div className="container">
        <h1 className="navqsm">О платформе</h1>
      <div className="father-box d-flex">
       <div className="left">
        <img src={ezrs} alt="yomonam ezdi shu rasm" />
       </div>
        <div className="right">
            <span>Наша платформа – это надежный информационный ресурс для поиска лучших исполнителей по ремонту техники.</span>
            <span>Основная цель нашего онлайн-сервиса – предоставить пользоваетелям возможность безопасно ремонтировать свою технику в проверенных сервисных центрах. Функцию проверки мы берем на себя и рекомендуем вам только надежные сервисные центры, отмечая их специальным значком и формируя рейтинг сервисов на основе отзывов клиентов.</span>
        </div>
      </div>
    </div>
  )
}

export default Section4
