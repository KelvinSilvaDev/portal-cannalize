import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  align-items: flex-end;
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
