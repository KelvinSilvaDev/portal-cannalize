import styled from "styled-components";

export const TagsWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin: ${({ isDesktop }) => (isDesktop ? "0px" : "0 1rem")};
  gap: 16px;
  overflow-x: ${({ isDesktop }) => (isDesktop ? "scroll" : "auto")};
  ::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 1rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 18px;
  justify-content: ${({ isDesktop }) =>
    isDesktop ? "flex-start" : "flex-start"};
  flex-wrap: ${({ isDesktop }) => (isDesktop ? "wrap" : "nowrap")};
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

    height: 38px;
    background: ${({ isActive }) => (isActive ? "#f2f0ec" : "")};
    border: ${({ isActive }) =>
      isActive ? "1px solid #f2f0ec" : "1px solid #f2f0ec"};
    border-radius: 48px;
  }
  border-radius: 48px;
`;
