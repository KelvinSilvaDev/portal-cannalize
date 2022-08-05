import Image from "next/image";
import Link from "next/link";
import { MOBILE_WIDTH } from "../src/utils/constants";
import useMediaQuery from "../src/hooks/useMediaQuery";
import * as Style from "../styles/footerStyles";

export default function Footer() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  return (
    <footer>
      <Style.Header isDesktop={!isMobile}>
        <div>
          <Link href="/">
            <Image
              src="/assets/img/cannalize_logo.png"
              alt="Cannalize Logo"
              width={164}
              height={39}
            />
          </Link>
        </div>
      </Style.Header>
      <Style.Section isDesktop={!isMobile}>
        <div>
          <div>
            <h4>A Cannalize</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
            </ul>
          </div>
          <div>
            <h4>Faça parte</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
              <li>Sobre Nós</li>
            </ul>
          </div>
        </div>
      </Style.Section>
    </footer>
  );
}
