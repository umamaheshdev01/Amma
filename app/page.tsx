import Carousel from "@/components/carousel";
import FirstSection from "./(sections)/first-section/page";
import Navbar from "./(sections)/navbar/page";
import SecondSection from "./(sections)/second-section/page";
import ThirdSection from "./(sections)/third-section/page";
import FourthSection from "./(sections)/fourth-section/page";
import Pricing from "./(sections)/pricing/page";
import FifthSection from "./(sections)/fifth-section/page";
import Footer from "./(sections)/footer/page";

export default function Home() {
  return <div>
    <Navbar />
    <FirstSection />
    <Carousel />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Pricing />
    <FifthSection />
    <Footer />
  </div>;
}
