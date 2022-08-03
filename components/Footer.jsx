import Image from "next/image";
import Link from "next/link";
import * as Style from "../styles/footerStyles";

export default function Footer() {
  return (
    <footer>
      <Style.Header>
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
      <Style.Section>
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
