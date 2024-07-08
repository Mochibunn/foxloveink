import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
const Carousel = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      navigation={true}
      slidesPerView={5.5}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      modules={[A11y, Autoplay, Navigation, Scrollbar]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/english_lop"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/flemish_giant"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/bald_eagle"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/arctic_fox"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/holland_lop"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/feline"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/bear"
          alt="Placeholder image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://loremflickr.com/720/1280/hotot"
          alt="Placeholder image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
