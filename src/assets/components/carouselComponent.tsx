import Marquee from "react-fast-marquee";

const Carousel = () => {
  

  
  return (
    <Marquee autoFill={false} pauseOnHover={true}>
      <img src="https://picsum.photos/200" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/flemish_giant" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/bald_eagle" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/arctic_fox" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/holland_lop" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/feline" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/bear" alt="Placeholder image" />
      <img src="https://loremflickr.com/200/200/hotot" alt="Placeholder image" />
    </Marquee>
  );
}

export default Carousel;