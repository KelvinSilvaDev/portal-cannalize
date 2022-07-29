import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
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

  div {
    h1 {
      font-size: 20px;
    }
    flex-basis: 15%;
    display: flex;
    flex-direction: column;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  padding: 5em;
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
