import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";

export default function Home() {
  return( <>
    <Navbar />
    <FirstSection />
    
    <Carousel />
    <br />
    <hr />
    <br />
    <SecondSection />
    <br />
    <hr />
    <br />
    <ThirdSection />
    <FifthSection />
    <Footer />
  </>);
}
