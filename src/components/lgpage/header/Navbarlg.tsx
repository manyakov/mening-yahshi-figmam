import "./LgNavbar.scss"
import png from "../../../img/60.png"
import png2 from "../../../img/50.png"
import png3 from "../../../img/lg1.png"

const LgNavbar = () => {
  return (
    <div className="ota-quti"> 
         <div className="svvv">
            <div className="i11" >
              <img src={png} alt="ssa" style={{width:220, height:120}} />
            </div>
            <div className="i21" >
              <img src={png2} alt="ssa" style={{width:260, height:120}} />
            </div>
            <div className="i31" >
              <img src={png3} alt="ssa" style={{width:200, height:120}} />
            </div>
          </div>
    </div>
  )
}

export default LgNavbar
