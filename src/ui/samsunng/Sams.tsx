import React from 'react';
import Nav from '../../components/samsung/header/Nav';
import Navbar from '../../components/samsung/header/Navbar';
import CustomCarousel from '../../components/samsung/section2.1/Carousel';
import SamsungRepair from '../../components/samsung/section2.2/Section22';
import SamsungRepair2 from '../../components/samsung/section2.3/Section23';
import SectionRk from '../../components/samsung/sectionRk/SectionRk';
import SectionCard from '../../components/samsung/sectionCard/SectionCard';
import SectionTimer from '../../components/samsung/sectionTimer/SectionTimer';
import SectionCarousel from '../../components/samsung/sectionCarousel/SectionCarousel';
import SectionSrmt from '../../components/samsung/sectionSrmt/SectionSrmt';
import Samsc from '../../components/samsung/SectionSamsungCarousel/SectionSamsungCarousel';
import QizilCarousel from '../../components/samsung/sectionsms/QizilCarousel';
import Inputli from '../../components/samsung/sectionwhatever/Inputli';
import Loremli from '../../components/samsung/loremli/Loremli';
import Theend from '../../components/samsung/the end/Theend';

const Sams: React.FC = () => {
  return (
  <div className="samsss">
    <Nav />
    <CustomCarousel />
    <Navbar />
    <SamsungRepair />
    <SamsungRepair2 />
    <SectionRk />
    <SectionCard />
    <SectionTimer />
    <SectionSrmt />
    <SectionCarousel />
    <Samsc />
    <Loremli />
    <QizilCarousel />
    <Inputli />
    <Theend />
  </div>
  );
};

export default Sams;
