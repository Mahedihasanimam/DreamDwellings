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
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
const Home = () => {
  const [card,setCard]=useState([])
  useEffect(()=>{
   fetch('realstate.json')
    .then(res=>res.json())
    .then(data=>setCard(data))
  },[])
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
<div className="my-20 text-center" data-aos="fade-up"
     data-aos-duration="3000">
  <h1 className="text-4xl font-bold "> Top Listed Estate</h1>
  <p className="opacity-70"> we offers luxury properties with modern amenities and breathtaking views in prime locations worldwide</p>
</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {
            card.map((carditem,idx)=><SingleCard key={idx} carditem={carditem}></SingleCard>)
          }
      </div>
    </div>
  );
};

export default Home;
