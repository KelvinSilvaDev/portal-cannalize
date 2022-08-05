import styled, { css } from "styled-components";

export const NavLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #fff;
`;

export const NavMobile = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  width: 100% !important;
  div {
    width: 100% !important;
    nav {
      width: 100% !important;
      div {
        div {
          width: 100% !important;
          padding: 0 6rem !important;
          button {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            width: 100% !important;
            font-size: 24px !important;
            color: #fff !important;
            background: none !important;
          }
          div {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            padding: 0 !important;
            background: #000 !important;
            a {
              color: #fff !important;
            }
          }
        }
      }
    }
  }
`;

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }
  > img {
    position: absolute;
    top: 1.25rem;
    left: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 0.9;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
      > nav {
        transform: scale(1);
      }
    `};
`;
