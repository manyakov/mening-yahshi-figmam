import Foot from "../../components/ahome/footer/Foot"
import NavbarHead from "../../components/ahome/header/nav-head/NavbarHead"
import Navbar from "../../components/ahome/header/navbar/Navbar"
import Section from "../../components/ahome/section/Section"
import Section2 from "../../components/ahome/section2/Section2"
import Section3 from "../../components/ahome/section3/Section3"
import Section4 from "../../components/ahome/section4/Section4"
import Section5 from "../../components/ahome/section5/Section5"
import SectionEnd from "../../components/ahome/sectionEnd/SectionEnd"
import Sems from "../../components/ahome/sems/Semis"

const Glavniy = () => {
  return (
    <div>
      <Navbar />
           <div className="container">
      <NavbarHead />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <SectionEnd />
      <Sems />

           </div>
      <Foot />
    </div>
  )
}

export default Glavniy
