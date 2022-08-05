import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
`;

export const Section = styled.section`
  width: ${({ isDesktop }) => (isDesktop ? "30%" : "100%")};
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

    font-family: "Inter", sans-serif;
    ul {
      padding-left: 0;
      list-style: none;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
