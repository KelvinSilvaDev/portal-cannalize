import React, { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";
import * as Style from "./styles";

export function InputSearch({ value, width, zIndex, ...props }) {
  return (
    <>
      <Style.ContainerInput width={width} style={{ zIndex }}>
        <Style.WrapperInput type="text" value={value} {...props} />
        <span className="wrapper-icon">
          <FiSearch />
        </span>
      </Style.ContainerInput>
    </>
  );
}
