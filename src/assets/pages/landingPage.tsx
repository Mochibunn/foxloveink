import Carousel from "../components/carouselComponent";
import Header from "../components/headerComponent";
import LandingComp from "../components/landingComponent";

const Landing = () => {
  return (
    <div className="h-[100vh] relative" id="landingBg">
      <Header />
      <LandingComp />
      <div className="divider" />
      <div className="my-6">
      <Carousel />
      </div>
      <div className="divider" />
    </div>
  );
};

export default Landing;
