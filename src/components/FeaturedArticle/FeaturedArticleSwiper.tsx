import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FeaturedArticle } from "./FeaturedArticle";
import { FeaturedArticleInterface } from "./FeaturedArticle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export interface FeaturedArticleSwiperInterface {
  featuredArticles: FeaturedArticleInterface[];
}

export const FeaturedArticleSwiper = (
  props: FeaturedArticleSwiperInterface
) => {
  return (
    <Wrapper>
      <Header>
        <Title>{"Featured"}</Title>
      </Header>
      <SwiperContainer>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {props.featuredArticles.map((article, index) => (
            <SwiperSlide key={index}>
              <FeaturedArticle
                image={article.image}
                title={article.title}
                href={article.href}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--background-color-primary);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  flex-direction: row;
  gap: 8px;

  @media only screen and (min-width: 1025px) {
    padding-bottom: 8px;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: var(--title-mobile);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  font-size: var(--header-mobile);
  @media only screen and (min-width: 1025px) {
    font-size: var(--header-desktop);
  }
`;

const SwiperContainer = styled.div`
  .swiper-pagination-horizontal {
    display: flex !important;
    justify-content: space-around !important;
    width: 90px !important;
    border-radius: 90px !important;
    padding: 10px !important;
    bottom: 0 !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    height: fit-content !important;
    background-color: var(--background-color-secondary) !important;

    @media only screen and (min-width: 1025px) {
      width: 150px !important;
    }
  }

  .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px) !important;
    background-color: #e0e2e8 !important;
    width: 12px !important;
    height: 12px !important;
  }
  .swiper-button-prev {
    display: none !important;
    @media only screen and (min-width: 1025px) {
      display: unset !important;
      color: #212122 !important;
      top: var(--swiper-navigation-top-offset, 42%) !important;
    }
  }
  .swiper-button-next {
    display: none !important;
    @media only screen and (min-width: 1025px) {
      display: unset !important;
      color: #212122 !important;
      top: var(--swiper-navigation-top-offset, 42%) !important;
    }
  }
`;
