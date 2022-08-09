import * as Style from "../../styles/headerStyles";
import Dropbtn from "../Dropbtn";
import Link from "next/link";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { MOBILE_WIDTH } from "../../src/utils/constants";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import { InputSearch } from "../InputSearch";
export default function NavMenu() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const [categoria, setCategoria] = useState([]);
  const cats = categoria.map(({ name, _links, id }) => {
    return (
      <Link
        href={history == "/categories" ? { id } : `categories/${id}`}
        key={name}
      >
        <a>{name}</a>
        {/* _links["wp:post_type"][0].href */}
      </Link>
    );
  });
  useEffect(() => {
    api
      .get(`https://kellek.com.br/?rest_route=/wp/v2/categories/`)
      .then((response) => {
        setCategoria(response.data);
      });
  }, []);
  return (
    <Style.Menu isDesktop={!isMobile}>
      <nav>
        <Dropbtn title="notícias">{cats}</Dropbtn>
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
      <InputSearch placeholder={"Pesquisar"} />
    </Style.Menu>
  );
}
