import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;

export const HeroWrapp = styled.div`
  margin: 0rem 0 4rem 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: block;
  height: 100%;
  object-fit: cover;

  .swiper-wrapper {
    height: 500px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
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

export const MenuWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  nav {
    display: flex;
    gap: 5px;
  }
`;
export const ButtonTop = styled.div``;

export const Grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem;
  gap: 16px;
  flex-flow: row wrap;

  .card {
    cursor: pointer;
    border: 0.05rem solid #e5e5e5;
    border-radius: 8px;
    padding: 1rem;
    //min-height: 350px;
    :hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
    h1 {
      font-size: 20px;
    }
  }
  div {
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
  }
`;

export const TagsWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 11px 25px;
  gap: 10px;

  a {
    color: #fb5f57;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 18px;
    gap: 10px;

    width: 86px;
    height: 38px;

    background: #f2f0ec;
    border-radius: 48px;
  }
  border-radius: 48px;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  padding: 5em;
  width: 100%;
`;

export const HeroText = styled.div`
  float: left;
  width: 50%;
  padding: 1rem;
`;
export const HeroImg = styled.div`
  float: right;
  width: 50%;
`;

export const Article = styled.article`
  width: 75%;
  float: left;
`;

export const Aside = styled.aside`
  width: 25%;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  position: sticky;
  top: 0;
  div {
    width: 100%;
    a {
      float: right;
      margin-right: 1rem;
    }

    div {
      width: 100%;
      section {
        ul {
          overflow-y: auto;
          padding-left: 0;
          li {
            list-style: none;
            div {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              align-content: center;

              div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                align-content: center;
                gap: 8px;
                :first-of-type {
                  width: 35%;
                }
                &:last-of-type {
                  padding-bottom: 1rem;
                  padding-left: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;
