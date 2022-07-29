import Image from "next/image";
import Link from "next/link";
import * as Style from "../styles/headerStyles";

export default function Header() {
  return (
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
      <Style.MenuWrapp>
        <Style.ButtonTop>
          <button>COMO PODEMOS TE AJUDAR?</button>
        </Style.ButtonTop>
        <Style.Menu>
          <nav>
            <Link href="/">notícias</Link>
            <Link href="/">medicina</Link>
            <Link href="/">guias</Link>
            <Link href="/">bem estar</Link>
            <Link href="/"> colunistas</Link>
          </nav>
          <input type="search" name="busca" id="busca" />
        </Style.Menu>
      </Style.MenuWrapp>
    </Style.Header>
  );
}
