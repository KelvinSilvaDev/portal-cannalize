import Image from "next/image";
import * as Style from "../styles/headerStyles";

export default function Header() {
  return (
    <Style.Header>
      <div>
        <a href="/">
          <Image
            src="/assets/img/cannalize_logo.png"
            alt="Cannalize Logo"
            width={164}
            height={39}
          />
        </a>
      </div>
      <Style.MenuWrapp>
        <Style.ButtonTop>
          <button>COMO PODEMOS TE AJUDAR?</button>
        </Style.ButtonTop>
        <Style.Menu>
          <nav>
            <a href="/">notícias</a>
            <a href="/">medicina</a>
            <a href="/">guias</a>
            <a href="/">bem estar</a>
            <a href="/"> colunistas</a>
          </nav>
          <input type="search" name="busca" id="busca" />
        </Style.Menu>
      </Style.MenuWrapp>
    </Style.Header>
  );
}
