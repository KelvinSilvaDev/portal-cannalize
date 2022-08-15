import { MOBILE_WIDTH } from "../../src/utils/constants";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import * as Style from "../../styles/DropbtnStyles";

export default function Dropbtn({ title, children }) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  return (
    <Style.All isDesktop={!isMobile}>
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    </Style.All>
  );
}
