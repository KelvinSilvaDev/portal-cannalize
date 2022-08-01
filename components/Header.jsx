import Image from "next/image";
import Link from "next/link";
import * as Style from "../styles/headerStyles";
import Dropbtn from "./Dropbtn";

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
            <Dropbtn title="notícias">
              <Link href="/">
                <a>Olá</a>
              </Link>
            </Dropbtn>
            <Dropbtn title="medicina">
              <Link href="/">
                <a>Olá</a>
              </Link>
            </Dropbtn>
            <Dropbtn title="guias">
              <Link href="/">
                <a>Olá</a>
              </Link>
            </Dropbtn>
            <Dropbtn title="bem estar">
              <Link href="/">
                <a>Olá</a>
              </Link>
            </Dropbtn>
            <Dropbtn title="colunistas">
              <Link href="/">
                <a>Olá</a>
              </Link>
            </Dropbtn>
          </nav>
          <input
            type="search"
            name="busca"
            id="busca"
            placeholder="Pesquisar"
          />
        </Style.Menu>
      </Style.MenuWrapp>
    </Style.Header>
  );
}
