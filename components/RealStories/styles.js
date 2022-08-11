import styled from "styled-components";

export const AutorContent = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
`;

export const FirstStory = styled.div`
  a {
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      .image {
        width: 100% !important;
      }
      .storyContent {
        span {
          strong {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;

            color: #2c2a32;
          }
        }
      }
    }
  }
`;

export const StoryGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  .gridItem {
    flex-basis: 50%;
    a {
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        display: flex;
        align-items: stretch;
        align-content: flex-start;
        flex-wrap: nowrap;
        justify-content: center;
        flex-direction: column;
        .image {
          width: 100% !important;
        }
        .storyContent {
          padding-left: 0 !important;
        }
      }
    }
  }
`;
