import {Swiper , SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "./Carousel.scss";
import image1 from "../assets/First.jpg"
import image2 from "../assets/Second.jpg"
import image3 from "../assets/Third.jpg"
import image4 from "../assets/4.jpg"
import image5 from "../assets/5.jpg"
import image6 from "../assets/6.jpg"
import image7 from "../assets/7.jpg"
const slides=[image1 ,image2,image3,image4,image5,image6,image7];

export const Carousel =()=>
<Swiper
centeredSlides
slidesPerView="auto"
effect="coverflow"
loop
coverflowEffect={{
    rotate:50,
    stretch:0,
    depth:100,
    modifier:1,
    slideShadows:true,
}}
modules={[EffectCoverflow]}
>
    <div className="swiper-wrapper">
        {slides.map((slide)=>(
            <SwiperSlide style={{backgroundImage:`url(${slide})`,
        }}
        />
        ))}
    </div>
</Swiper>
