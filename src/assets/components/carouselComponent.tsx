import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  const images: string[] = [
    "/src/assets/images/gallery/6_Characters.png",
    "/src/assets/images/gallery/Back_to_School_Bun.png",
    "/src/assets/images/gallery/Birthday_baby.png",
    "/src/assets/images/gallery/bunny.png",
    "/src/assets/images/gallery/Bunny_brush.png",
    "/src/assets/images/gallery/Chibi_Neck_Romancin.png",
    "/src/assets/images/gallery/Couples_photo.png",
    "/src/assets/images/gallery/Defender.png",
    "/src/assets/images/gallery/Dol_Ref_Sheet.png",
    "/src/assets/images/gallery/Fonx_and_Byuny_Halloween_23.png",
    "/src/assets/images/gallery/Fox_and_Bun.png",
    "/src/assets/images/gallery/Friend_Viking_Group.png",
    "/src/assets/images/gallery/glasses.png",
    "/src/assets/images/gallery/goop1.png",
    "/src/assets/images/gallery/Harem.png",
    "/src/assets/images/gallery/Kit_Furry.png",
    "/src/assets/images/gallery/Kit_loves_bunnies.jpg",
    "/src/assets/images/gallery/kit_n_bunny.png",
    "/src/assets/images/gallery/Kit_Sketches6.png",
    "/src/assets/images/gallery/Mochi__Riv_final.png",
    "/src/assets/images/gallery/Mochi_Piggyback_ride.png",
    "/src/assets/images/gallery/NecroBun.png",
    "/src/assets/images/gallery/Sello_Full.png",
    "/src/assets/images/gallery/Sello_Glasses.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    accessibility: true,
    arrows: true,
    autoplay: true,
    centerMode: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide: false,
    swipe: false,
    touchThreshold: 100,
    focusOnSelect: true,
    waitForAnimate: false,
    variableWidth: false,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <div className="min-h-full px-4">
            <img src={image} alt="Placeholder image" className="py-auto"/>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
