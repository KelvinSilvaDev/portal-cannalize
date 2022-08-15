import styled from "styled-components";

export const ContainerInput = styled.div`
  width: auto;
  min-height: 47px;
  position: relative;
  .wrapper-icon {
    position: absolute;
    transition: transform 0.3s;
    right: 16px;
    top: 16px;
    padding-left: 3rem;
    svg {
      filter: invert(88%) sepia(09%) saturate(0%) hue-rotate(86deg)
        brightness(118%) contrast(119%);
    }
  }
`;

export const WrapperInput = styled("input")`
  border-radius: 3rem;
  background: gray;
  padding: 0 7px 0 7px;
  border: 2px solid #115850;
  min-height: 48px;
  box-shadow: 0 0 0 0.2px inset;
  color: #115850;
  font-weight: 300;
  width: 100%;

  &:focus {
    outline: none;
    background: white;
    border-color: red;
    box-shadow: 0 0 2px red;
  }

  &:-webkit-autofill {
    background: -internal-light-dark(black, white) !important;
    -webkit-text-fill-color: #000;
  }

  ::placeholder {
    color: black;
    font-weight: lighter;
  }
`;
