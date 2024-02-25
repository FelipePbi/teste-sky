import { useMemo } from "react";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "@uidotdev/usehooks";
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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

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
      grabCursor={!isSmallDevice}
      centeredSlides={!isSmallDevice}
      loop={!isSmallDevice}
      slidesPerView={"auto"}
      spaceBetween={10}
      coverflowEffect={
        !isSmallDevice
          ? {
              rotate: 0,
              stretch: -35,
              depth: 80,
              modifier: 2.5,
              slideShadows: true,
            }
          : undefined
      }
      effect={!isSmallDevice ? "coverflow" : "slide"}
      modules={[EffectCoverflow]}
      className="header-wip"
    >
      {carouselItems}
    </Swiper>
  );
}

export default HeaderCarousel;
