import { memo, useMemo } from "react";
import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

import { useSectionMovies } from "../../hooks/useSectionMovies";

import "swiper/css";
import "./Section.scss";

export interface ISection {
  title: string;
  keyword: string;
  showSections: boolean;
}

function Section({ keyword, title, showSections }: ISection) {
  const { data, isLoading } = useSectionMovies(keyword, showSections);

  const carouselItems = useMemo(() => {
    if (showSections && !!data && !isLoading) {
      return data
        .filter(({ primaryImage }) => !!primaryImage)
        .map(({ id, primaryImage }) => (
          <SwiperSlide key={id} className="card-item">
            <Image src={primaryImage.url} alt={primaryImage.caption.plainText} />
          </SwiperSlide>
        ));
    }

    return Array.from(Array(10)).map((el, index) => (
      <SwiperSlide key={index} className="card-item-skeleton">
        <Skeleton />
      </SwiperSlide>
    ));
  }, [data, showSections, isLoading]);

  return (
    <Container className="section-container">
      {(showSections && <h3 className="section-title">{title}</h3>) || (
        <Skeleton height={16} width={200} className="section-title" />
      )}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {carouselItems}
      </Swiper>
    </Container>
  );
}

export default memo(Section);
