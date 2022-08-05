import styled from "styled-components";

export const Cover = styled.div`
  display: block;
  margin: ${({ isDesktop }) => (isDesktop ? "0 16rem" : "0 1rem")};
  div {
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
          width: ${({ isDesktop }) => (isDesktop ? "" : "100%")} !important;
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
    }
    .fImage {
      width: 100%;
      float: right;
    }
  }
`;
