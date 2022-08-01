import Link from "next/link";
import * as Style from "../styles/DropbtnStyles";

export default function Dropbtn({ title, children }) {
  return (
    <Style.All>
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    </Style.All>
  );
}
