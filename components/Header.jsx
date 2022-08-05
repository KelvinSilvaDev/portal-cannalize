import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import { useState, useEffect } from "react";
import { MenuMobile } from "./MenuMobile";
import { MOBILE_WIDTH } from "../src/utils/constants";
import useMediaQuery from "../src/hooks/useMediaQuery";
import * as Style from "../styles/headerStyles";

import api from "../services/api";
import NavMenu from "./NavMenu";
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
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const [menuIsVisible, setMenuIsVisible] = useState();
  // const [categoria, setCategoria] = useState([]);
  // const cats = categoria.map(({ name, _links }) => {
  //   return (
  //     <a href={_links["wp:post_type"][0].href} key={name}>
  //       {name}
  //     </a>
  //   );
  // });
  // useEffect(() => {
  //   api
  //     .get(`https://cannalize.com.br/?rest_route=/wp/v2/categories/`)
  //     .then((response) => {
  //       setCategoria(response.data);
  //     });
  // }, []);

  return (
    <Style.Header isDesktop={!isMobile}>
      <div className="logoWrapp">
        <Link href="/">
          <Image
            src="/assets/img/cannalize_logo.png"
            alt="Cannalize Logo"
            width={164}
            height={39}
          />
        </Link>
      </div>
      <Style.MenuWrapp isDesktop={!isMobile}>
        <Style.ButtonTop isDesktop={!isMobile}>
          <button>COMO PODEMOS TE AJUDAR?</button>
        </Style.ButtonTop>
        <NavMenu />
        <Style.MenuMobileTogler
          isDesktop={!isMobile}
          menuIsVisible={menuIsVisible}
        >
          {/* <a href="#" onClick={() => setMenuIsVisible(true)}>
            a
          </a> */}
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuIsVisible(true)}
          />
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </Style.MenuMobileTogler>
      </Style.MenuWrapp>
    </Style.Header>
  );
}
