import Carousel from "../components/carouselComponent";
import Header from "../components/headerComponent";
import LandingComp from "../components/landingComponent";

let Landing = () => {
  return (
    <div className="h-[100vh]" id="landingBg">
      <Header />
      <div className="divider" />
      <LandingComp />
      <div className="divider" />
      <Carousel />
      <div className="divider" />
    </div>
  );
};

export default Landing;
