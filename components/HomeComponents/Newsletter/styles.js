import styled from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  align-items: center;
  justify-content: center;
  padding: 5.7rem 0;
  gap: 25px;
  width: 100%;
  height: 232px;
  background: linear-gradient(180deg, #2c2a32 0%, #000000 100%);
  .title {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    h1 {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 47px;
      text-transform: uppercase;
      color: #fe7a41;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  .formNL {
    display: flex;
    height: 100%;
    input {
      background: #f2f0ec;
      padding-left: 1rem;
      border: none;
      height: 100%;
      border-radius: 8px;
    }
    button {
      margin-left: 16px;
      color: #fff;
      cursor: pointer;
      background: #fe7a41;
      padding: 1rem;
      border: 1px solid #fe7a41;
      border-radius: 8px;
    }
  }
`;
