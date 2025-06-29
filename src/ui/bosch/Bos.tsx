import Bosrk from "../../components/bosch/bosrk/Bosrk"
import Uchtalik from "../../components/bosch/carouseljoyi/Uchtalik"
import Dodanirk from "../../components/bosch/dodanirk/Doda"
import Foiz from "../../components/bosch/foizlidiv/Foiz"
import FoizliningTepasidagiYozuv from "../../components/bosch/foizlidiv/FoizliningTepasidagiYozuv"
import Gridd from "../../components/bosch/gridda/Gridd"
import Headerbs from "../../components/bosch/header/Headerbs"
import Navbarbs from "../../components/bosch/header/Navbarbs"
import Inputlar from "../../components/bosch/inputlar/Inputlar"
import Kokcarousel from "../../components/bosch/kokcarousel/Kokcarousel"
import Ohiri from "../../components/bosch/ohiri/Ohir"
import Qosh from "../../components/bosch/qoshdiv/Qosh"
import Strelkali from "../../components/bosch/strelkalidiv/Strelkali"

const Bos = () => {
  return (
    <div>
      <Navbarbs />
      <Headerbs />
      <FoizliningTepasidagiYozuv />
      <Foiz />
      <Bosrk />
      <Strelkali />
      <Uchtalik />
      <Qosh />
      <Dodanirk />
      <Gridd />
      <Kokcarousel />
      <Inputlar />
      <Ohiri />
    </div>
  )
}

export default Bos
