import styled from "styled-components";
export const Aside = styled.aside`
  width: ${({ isDesktop }) => (isDesktop ? "25%" : "100%")};
  float: ${({ isDesktop }) => (isDesktop ? "right" : "none")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  position: sticky;
  top: 0;
  div {
    width: 100%;
    padding: ${({ isDesktop }) => (isDesktop ? "0" : "0 0.2rem")};
    a {
      float: right;
      margin-right: 1rem;
    }

    div {
      width: 100%;
      header {
        h1 {
          font-family: "Oswald";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          text-transform: uppercase;

          color: #fb5f57;
        }
      }
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
