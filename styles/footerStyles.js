import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
`;

export const Section = styled.section`
  width: 30%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 16px;
  div {
    display: flex;
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
