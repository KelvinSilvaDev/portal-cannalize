import styled from "styled-components";

export const TagsWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 18px;
  justify-content: ${({ isDesktop }) => (isDesktop ? "flex-start" : "center")};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 11px 25px;
  gap: 10px;
  width: 100%;

  a {
    color: #fb5f57;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 18px;
    gap: 10px;

    width: 86px;
    height: 38px;

    background: #f2f0ec;
    border-radius: 48px;
  }
  border-radius: 48px;
`;
