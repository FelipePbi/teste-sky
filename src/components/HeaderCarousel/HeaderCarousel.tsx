import { useMemo } from "react";
import { Image } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./HeaderCarousel.scss";

export interface IHeaderCarousel {
  items: {
    imageUrl: string;
    imageAlt: string;
    id: string;
  }[];
}

function HeaderCarousel({ items }: IHeaderCarousel) {
  const carouselItems = useMemo(
    () =>
      items.map(({ id, imageUrl, imageAlt }) => (
        <SwiperSlide key={id}>
          <Image src={imageUrl} alt={imageAlt} fluid />
        </SwiperSlide>
      )),
    [items]
  );

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: -35,
        depth: 80,
        modifier: 2.5,
        slideShadows: true,
      }}
      effect="coverflow"
      modules={[EffectCoverflow]}
      pagination={{ el: ".swiper-pagination", clickable: true }}
    >
      {carouselItems}

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}

export default HeaderCarousel;
