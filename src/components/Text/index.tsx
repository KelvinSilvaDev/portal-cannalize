/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import * as Styles from "./styles";
import { TextProps } from "../../utils/TextTypes";

function Texts({
  type = "md",
  children,
  bold,
  color,
  ...props
}: React.PropsWithChildren<TextProps>) {
  const handleTypeText = () => {
    switch (type) {
      case "h1":
        return <h1 {...props}>{children}</h1>;
      case "h2":
        return <h2 {...props}>{children}</h2>;
      default:
        return <p {...props}>{children}</p>;
    }
  };

  return (
    <Styles.Container type={type || "md"} color={color || "black"} bold={bold}>
      {handleTypeText()}
    </Styles.Container>
  );
}
export default Texts;
