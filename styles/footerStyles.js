import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 64px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    div {
      a {
        .iconWrapper {
          border: 1px solid black;
          border-radius: 50%;
          padding: 0.25rem;
          width: 20px;
          height: 20px;
          display: flex;
          padding: 0.8rem;
          justify-content: center;
          svg {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export const Section = styled.section`
  width: ${({ isDesktop }) => (isDesktop ? "50%" : "100%")};
  float: right;
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  justify-content: stretch;
  align-items: center;
  gap: 16px;
  div {
    display: flex;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    align-items: flex-start;
    justify-content: flex-end;
    padding-right: 2rem;
    gap: 32px;
    font-family: "Inter", sans-serif;
    ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-left: 0;
      list-style: none;
      li {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      h4 {
        color: #c3c3c3;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;
