import Image from "next/image";
import Link from "../Link/";
import { MOBILE_WIDTH } from "../../src/utils/constants";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import * as Style from "../../styles/footerStyles";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              sizes="
                              (min-width: 75em) 33vw,
                              (min-width: 48em) 50vw,
                              100vw
                              "
            />
          </Link>
          <div>
            <Link href="/">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </Link>
            <Link href="/">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </Link>
            <Link href="/">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </Link>
          </div>
        </div>
      </Style.Header>
      <Style.Section isDesktop={!isMobile}>
        <div>
          <div>
            <h4>A Cannalize</h4>
            <ul>
              <li>Sobre Nós &rarr;</li>
              <li>Contato &rarr;</li>
              <li>Política de privacidade &rarr;</li>
              <li>Solicitação de remoção de imagem &rarr;</li>
              <li>Termos e condições de uso &rarr;</li>
            </ul>
          </div>
          <div>
            <h4>Faça parte</h4>
            <ul>
              <li>Anucie &rarr;</li>
              <li>Especialistas Cannalize &rarr;</li>
              <li>Envie sua história &rarr;</li>
            </ul>
          </div>
        </div>
      </Style.Section>
    </footer>
  );
}
