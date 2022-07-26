import { MOBILE_WIDTH } from "../../../src/utils/constants";
import useMediaQuery from "../../../src/hooks/useMediaQuery";
import Colunists from "../../Colunists";
import RealStories from "../../RealStories";
import Link from "../../Link/";
import * as Style from "./styles";

export default function Aside() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  return (
    <Style.Aside isDesktop={!isMobile}>
      <div>
        <div>
          <header>
            <h1>DOS NOSSOS COLUNISTAS</h1>
          </header>
          <section>
            <ul>
              <Colunists />
            </ul>
          </section>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>AQUI VAI UMA PUBLICIDADE</h3>
        </div>
        <div>
          <header>
            <h1>
              Histórias Reais<Link href="/">Envie a sua &rarr;</Link>
            </h1>
          </header>
          <section>
            <ul>
              <RealStories />
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>AQUI VAI MAIS UMA PUBLICIDADE</h3>
            </div>
          </section>
        </div>
      </div>
    </Style.Aside>
  );
}
