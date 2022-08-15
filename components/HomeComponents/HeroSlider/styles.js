import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ isDesktop }) => (isDesktop ? "5em" : "5em 1rem")};
  width: 100%;
`;

export const HeroText = styled.div`
  float: left;
  width: ${({ isDesktop }) => (isDesktop ? "50%" : "100%")};
  padding: 1rem;
  text-align: left;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
  }
  div {
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }
  div {
    span {
      p {
        strong {
          font-family: "Oswald";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;

          a {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
export const HeroImg = styled.div`
  float: right;
  width: ${({ isDesktop }) => (isDesktop ? "50%" : "100%")};
`;

export const HeroWrapp = styled.div`
  margin: ${({ isDesktop }) => (isDesktop ? "0rem 0 4rem 0" : "0rem")};
  display: flex;
  width: ${({ isDesktop }) => (isDesktop ? "95%" : "100%")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: block;
  height: 100%;
  object-fit: cover;

  .swiper-wrapper {
    height: ${({ isDesktop }) => (isDesktop ? "535px" : "")};
  }

  .swiper {
    width: 100%;
    //height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #2c2a32;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet-active {
    width: 17px !important;
    border-radius: 15px;
    height: 17px;
  }

  .swiper-pagination-bullet {
    background: #fb5f57;
    width: 17px;
    height: 17px;
  }
`;
