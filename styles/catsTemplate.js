import styled from "styled-components";

export const Cover = styled.div`
  display: block;
  margin: ${({ isDesktop }) => (isDesktop ? "0 16rem" : "0 1rem")};
  height: 100vh;
  div {
    margin: 1rem 0;
    .postContent {
      figure {
        margin: 0;
        width: 100% !important;
        img {
          width: 100%;
          height: auto;
        }
      }
      p {
        margin: 0;
        width: 100% !important;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .wrapp {
    display: flex;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
    .postData {
      float: left;
      p {
        display: flex;
        gap: 5px;
        div {
          p {
            color: #fb5f57;
            font-weight: 500;
          }
        }
      }
    }
    .fImage {
      width: 100%;
      float: right;
    }
  }
`;
