import { MOBILE_WIDTH } from "../../../src/utils/constants";
import useMediaQuery from "../../../src/hooks/useMediaQuery";
import * as Style from "./styles";
export default function Newsletter() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  return (
    <Style.Wrapp isDesktop={!isMobile}>
      <div className="title">
        <h1>ASSINE NOSSA NEWSLETTER!</h1>
        <p>Fique por dentro de tudo que acontece</p>
      </div>
      <div className="formNL">
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <button type="submit">Assinar</button>
        </form>
      </div>
    </Style.Wrapp>
  );
}
