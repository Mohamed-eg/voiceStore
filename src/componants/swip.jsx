import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {EffectCoverflow,Autoplay,Navigation,Pagination} from "swiper";
import "swiper/swiper-bundle.css";
import shoes1 from '../img/pngwing.com 1.png';
import shoes2 from '../img/pngwing.com 2.png';
import shoes3 from '../img/pngwing.com 3.png';
import shoes4 from '../img/pngwing.com 4.png';
import shoes5 from '../img/pngwing.com 5.png';
import shoes6 from '../img/pngwing.com 6.png';
SwiperCore.use([EffectCoverflow,Navigation,Pagination,Autoplay]);
function Swip() {
    const Imgslides =[shoes1,shoes2,shoes3,shoes4,shoes5,shoes6]
  const slides = [];
  for (let i = 0; i < 6; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={Imgslides[i]} alt={`Slide${i}`} />
      </SwiperSlide>
    );
  }

  return (
    <div className="Swip">
      <Swiper id="main" tag="section" wrapperTag="ul" 
      effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        navigation={true}>
        {slides}
      </Swiper>
    </div>
  );
}

export default Swip;
