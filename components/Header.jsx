import Image from "next/image";
import Link from "next/link";
import * as Style from "../styles/headerStyles";
import Dropbtn from "./Dropbtn";
import { useState, useEffect } from "react";

import api from "../services/api";
// export async function getStaticProps() {
//   api
//     .get(`https://kellek.com.br/?rest_route=/wp/v2/categories/`)
//     .then((response) => {
//       console.log(response.data.name);
//       return response.data.name;
//     });
//   return {
//     props: {},
//   };
// }

export default function Header() {
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
      .get(`https://cannalize.com.br/?rest_route=/wp/v2/categories/`)
      .then((response) => {
        setCategoria(response.data);
      });
  }, []);

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
