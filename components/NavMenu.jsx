import * as Style from "../styles/headerStyles";
import Dropbtn from "./Dropbtn";
import Link from "next/link";
import api from "../services/api";
import { useState, useEffect } from "react";
import { MOBILE_WIDTH } from "../src/utils/constants";
import useMediaQuery from "../src/hooks/useMediaQuery";
export default function NavMenu() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const [categoria, setCategoria] = useState([]);
  const cats = categoria.map(({ name, _links }) => {
    return (
      <a href={_links["wp:post_type"][0].href} key={name}>
        {name}
      </a>
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
        <Dropbtn title="notícias">
          {/* {categoria.map(({ name, _links }) => {
                <Link href={_links["wp:post_type"][0].href}>
                  <a>{name}</a>;
                </Link>;
              })} */}
          {cats}
          {/* <Link href="/">
                <a>Olá</a>
              </Link> */}
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
        <input type="search" name="busca" id="busca" placeholder="Pesquisar" />
      </nav>
    </Style.Menu>
  );
}
