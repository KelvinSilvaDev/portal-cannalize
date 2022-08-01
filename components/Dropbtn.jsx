import Link from "next/link";
import * as Style from "../styles/DropbtnStyles";

export default function Dropbtn({ title, children }) {
  return (
    <Style.All>
      <div class="dropdown">
        <button class="dropbtn">{title}</button>
        <div class="dropdown-content">{children}</div>
      </div>
    </Style.All>
  );
}
