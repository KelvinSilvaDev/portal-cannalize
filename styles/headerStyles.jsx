import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  div {
    cursor: pointer;
  }
`;

export const MenuWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 5px 64px;
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 13px;
    gap: 67px;

    width: 300px;
    height: 54px;

    background: #f2f0ec;
    border-radius: 8px;
    border: none;
  }
  nav {
    display: flex;
    gap: 5px;
  }
`;
export const ButtonTop = styled.div`
  button {
    background: #fe7a41;
    border: none;
    padding: 16px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
