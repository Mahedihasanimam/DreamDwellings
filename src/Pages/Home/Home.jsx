import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade } from "swiper/modules";
import Slide1 from "../../slider/Slide1";
import Slider2 from "../../slider/Slider2";
import Slider3 from "../../slider/Slider3";
import Slider4 from "../../slider/Slider4";
const Home = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Slide1></Slide1>
        </SwiperSlide>
        <SwiperSlide>
          <Slider2></Slider2>
        </SwiperSlide>
        <SwiperSlide>
          <Slider3></Slider3>
        </SwiperSlide>
        <SwiperSlide>
          <Slider4></Slider4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
