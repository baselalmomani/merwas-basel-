import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import Video from "./components/Video/Video";
import SectionAboutUs from "./components/SectionAboutUs/SectionAboutUs";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionPartners from "./components/SectionPartners/SectionPartners";
import SectionContactUs from "./components/SectionContactUs/SectionContactUs";
import Map from "./components/Map/Map";

export default function Home() {
  return (
    <main>
      <Banner />
      <OurServices />
      <Video />
      <SectionAboutUs />
      <SectionServices />
      <SectionPartners />
      <SectionContactUs />
      <Map />
    </main>
  );
}
