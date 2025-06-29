import "./NavbarHead.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import playstation from "../../../../img/playstation.png";
import strelka from "../../../../img/strelka.png";
import strelka2 from "../../../../img/arrowhome.png";
import png from "../../../../img/1.png"
import png2 from "../../../../img/2.png"
import png3 from "../../../../img/3.png"


const NavbarHead = () => {
  return (
    <div className="big-father container-fluid">
          <div className="father-box d-flex container">
      <div className="left">
        <h1>Сервисные центры техники в Киеве</h1>
        <h4>Подбор сервисных центров по вашему производителю</h4>
      </div>
      <div className="right position-relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={3000}
          stopOnHover
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow left-arrow"
              >
                <img src={strelka} alt="str" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow right-arrow"
              >
                <img style={{
                  width:10
                }} src={strelka2} alt="sttr2" />
              </button>
            )
          }
        >
          <div>
            <img src={playstation} alt="Slide 1" />
          </div>
          <div>
            <img src={playstation} alt="Slide 1" />
          </div>
          <div>
            <img src={playstation} alt="Slide 1" />
          </div>
        </Carousel>
      </div>
          </div>
          <div className="svvh d-flex container">
            <div className="i1" >
              <img src={png} alt="ssa" style={{width:230, height:120}} />
            </div>
            <div className="i2" >
              <img src={png2} alt="ssa" style={{width:230, height:120}} />
            </div>
            <div className="i3" >
              <img src={png3} alt="ssa" style={{width:230, height:120}} />
            </div>
          </div>
    </div>
  );
};

export default NavbarHead;
