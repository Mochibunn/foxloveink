import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";

const CarouselComp = () => {
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

  const imageShuffle = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const settings = {
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 6,
        partialVisibilityGutter: 40,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 3,
        partialVisibilityGutter: 30,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 3,
        partialVisibilityGutter: 30,
        slidesToSlide: 1,
      },
    },
    rtl: false,
    rewind: false,
    infinite: true,
    showDots: false,
    centerMode: true,
    autoPlaySpeed: 5000,
    focusOnSelect: true,
    customTransition: "transform 3000ms ease-out",
    rewindWithAnimation: false,
    removeArrowOnDeviceType: ["mobile", "tablet"],
    autoPlay: isMobile ? false : true,
    shouldResetAutoplay: true,
    draggable: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeable: true,
  };
  return (
    <Carousel {...settings}>
      {imageShuffle.map((image: string) => {
        return (
          <div className="flex flex-col justify-center min-h-full px-4 ">
            <img src={image} alt="Placeholder image" className="py-auto" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
