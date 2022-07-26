import styled from "styled-components";
import { MAX_PAGE_WIDTH } from "../src/utils/constants";

export const Cover = styled.div`
  display: block;
  max-width: ${MAX_PAGE_WIDTH};
  margin: ${({ isDesktop }) => (isDesktop ? "50px auto" : "0 1rem")};
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
