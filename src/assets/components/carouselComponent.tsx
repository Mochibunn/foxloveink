import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Image} from "@nextui-org/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useState } from "react";

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

  const imageShuffle: string[] = images
    .map((value: string) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const [currentImage, setImage] : any = useState("");

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const handleOpen = (image : any) => {
    setImage(image);
    onOpen();
  }


  const settings = {
    responsive: {
      superLargeDesktop: {
        breakpoint: {
          max: 9000,
          min: 3000,
        },
        items: 7,
        partialVisibilityGutter: 50,
        slidesToSlide: 5,
      },
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 7,
        partialVisibilityGutter: 40,
        slidesToSlide: 3,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
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
        slidesToSlide: 2,
      },
    },
    rtl: false,
    rewind: false,
    infinite: true,
    showDots: false,
    swipeable: true,
    draggable: false,
    centerMode: true,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // autoPlaySpeed: 5000,
    // focusOnSelect: false,
    // shouldResetAutoplay: true,
    customTransition: isMobile
      ? "transform 300ms ease-in-out"
      : "transform 500ms ease-out",
    rewindWithAnimation: false,
    removeArrowOnDeviceType: ["mobile", "tablet"],
    // autoPlay: false,
  };

  return (
    <Carousel {...settings}>
      {imageShuffle.map((image: string) => {
        return (
          <>
          <div
            className="flex flex-col justify-center min-h-full px-4 "
            key={image.indexOf(image)}
          >
            <Image src={image} alt="Artwork example" className="py-auto" />
          </div>
          </>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
