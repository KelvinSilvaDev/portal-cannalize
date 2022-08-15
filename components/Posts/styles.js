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
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 120%;
      /* or 43px */

      color: #fff;
    }
    div {
      div {
        p {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;

          color: #3d3d3d;
        }
      }
    }
  }
  div {
    flex-basis: ${({ isDesktop }) => (isDesktop ? "50%" : "100%")};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #CardPostAuthor {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    color: #fff;
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
    display: flex;
    align-items: flex-start;

    //min-height: 350px;
    :hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
    h1 {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
    }
    div {
      #postExcerpt {
        p {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          color: #fff;
        }
      }
      div {
        p {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;

          color: #fb5f57;
        }
      }
    }
  }
  div {
    flex-basis: ${({ isDesktop }) => (isDesktop ? "30%" : "100%")};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #CardPostAuthor {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    color: #d9d9d9;
  }
`;
