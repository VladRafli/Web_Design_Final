import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../img/forest-931706.jpg";

export default function Home() {
  return (
    <>
      <section className="landing container-fluid my-3">
        {/*********************************************************
         * Using React Responsive Carousel Library
         * https://github.com/leandrowd/react-responsive-carousel
         *********************************************************/}
        <Carousel
          autoPlay={true}
          dynamicHeight={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          <img src={image} alt="Slide 1" />
          <img src={image} alt="Slide 2" />
          <img src={image} alt="Slide 3" />
        </Carousel>
      </section>
    </>
  );
}
