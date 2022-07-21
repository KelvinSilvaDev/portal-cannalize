import { colorTypes } from "./ColorTypes";

interface Types {
  type: "h1" | "h2" | "display1" | "display2" | "sml" | "md" | "lg";
}
export interface TextProps {
  type?: Types["type"];
  props?: any;
  bold?: boolean;
  color?: colorTypes;
  onClick?: () => void;
}
