import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 18.75rem;
  height: 27rem;
  padding: 0 0.75rem;
  margin-bottom: 1rem;
  text-align: center;

  .title {
    margin-bottom: auto;
  }

  div > span.sc-papXJ.nIduD {
    margin-bottom: auto !important;
  }

  & img {
    width: 17.25rem;
    height: 17.25rem;
    min-width: 17.25rem;
    min-height: 17.25rem;
    max-width: 17.25rem;
    max-height: 17.25rem;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
  }

  & h2 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align: center;
    justify-self: flex-start;
    margin-bottom: auto;
  }

  & p {
    font-size: 1rem;
    text-align: center;
    font-weight: lighter;
    line-height: 1.25rem;
    color: #000;
    margin-top: auto !important;
  }
`;
