import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  //display: ${({ isDesktop }) => (isDesktop ? "flex" : "block")};
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  .logoWrapp {
    cursor: pointer;
  }
`;

export const MenuWrapp = styled.div`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  align-items: ${({ isDesktop }) => (isDesktop ? "flex-end" : "center")};
  width: 100%;
  justify-content: ${({ isDesktop }) =>
    isDesktop ? "center" : "space-between"};

  gap: 16px;
`;

export const Menu = styled.div`
  display: flex;
  float: ${({ isDesktop }) => (isDesktop ? "none" : "left")};
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 5px 64px;
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 13px;
    gap: 67px;

    width: 300px;
    height: 54px;

    background: #f2f0ec;
    border-radius: 8px;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  nav {
    display: ${({ isDesktop }) => (isDesktop ? "flex" : "none")};
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    gap: 5px;
    align-items: center;
  }
`;

export const MenuMobileTogler = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? "none" : "flex")};
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: flex-end;
  align-items: right;
  float: ${({ isDesktop }) => (isDesktop ? "none" : "right")};
  svg {
    float: left;
    width: ${({ isDesktop }) => (isDesktop ? "15%" : "35px")};
  }
  img {
    fill: #000;
  }
  /* @media (min-width: 800px) {
    display: none !important;
  } */
`;
export const ButtonTop = styled.div`
  button {
    float: ${({ isDesktop }) => (isDesktop ? "none" : "left")};
    background: #fe7a41;
    border: none;
    padding: 16px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    font-family: Oswald;
    width: ${({ isDesktop }) => (isDesktop ? "auto" : "200px")};
    //margin-right: ${({ isDesktop }) => (isDesktop ? "0" : "8px")};
  }
`;
