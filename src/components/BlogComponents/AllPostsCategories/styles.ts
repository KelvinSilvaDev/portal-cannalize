import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContainerNews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
  flex-wrap: wrap;
`;
export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    text-align: left;
  }

  & + div {
    margin-top: 50px;
  }
`;

export const SeeMore = styled.span`
  margin-top: 20px;
  a {
    p {
      display: flex;

      svg {
        margin-left: 10px;
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;
