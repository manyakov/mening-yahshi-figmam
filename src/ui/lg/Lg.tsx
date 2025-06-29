import LgNavbar from "../../components/lgpage/header/Navbarlg"
import LgNav from "../../components/lgpage/header/Navlg"
import Loremli from "../../components/lgpage/loremli/Loremli"
import LgCarousel from "../../components/lgpage/section2.1/Carousel"
import LgRepair from "../../components/lgpage/section2.2/Section22lg"
import LgRepair2 from "../../components/lgpage/section2.3/Section23"
import StepsSectionlg from "../../components/lgpage/sectionCard/SectionCardlg"
import SectionCarousellg from "../../components/lgpage/sectionCarousel/SectionCarousellg"
import Lgsc from "../../components/lgpage/SectionlgCarousel/SectionlgCarousel"
import SectionRklg from "../../components/lgpage/sectionRk/SectionRklg"
import LgQizilCarousel from "../../components/lgpage/sectionsms/LgQizilCarousel"
import SectionSrmtlg from "../../components/lgpage/sectionSrmt/SectionSrmtlg"
import DiscountBanner from "../../components/lgpage/sectionTimer/DiscountBanner"
import Inputlilg from "../../components/lgpage/sectionwhatever/Inputlilg"
import Theendlg from "../../components/lgpage/the end/Theend"


const Lg = () => {
  return (
    <div>
      <LgNav />
      <LgCarousel />
      <LgNavbar />
      <LgRepair />
      <LgRepair2 />
      <SectionRklg />
      <StepsSectionlg />
      <DiscountBanner />
      <SectionSrmtlg />
      <SectionCarousellg />
      <Lgsc />
      <Loremli />
      <LgQizilCarousel />
      <Inputlilg />
      <Theendlg />
    </div>
  )
}

export default Lg
