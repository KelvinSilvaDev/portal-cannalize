import styled from "styled-components";

export const FirstGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem;
  gap: 16px;
  flex-flow: ${({ isDesktop }) => (isDesktop ? "row nowrap" : "column nowrap")};

  .card {
    cursor: pointer;

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
    flex-basis: ${({ isDesktop }) => (isDesktop ? "50%" : "100%")};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Grid = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem;
  gap: 16px;
  flex-flow: ${({ isDesktop }) => (isDesktop ? "row wrap" : "column nowrap")};

  .card {
    cursor: pointer;

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
    flex-basis: ${({ isDesktop }) => (isDesktop ? "25%" : "100%")};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
