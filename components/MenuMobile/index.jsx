import Image from "next/image";
import { useEffect } from "react";
import NavMenu from "../NavMenu/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Container, NavMobile, NavLink } from "./styles";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      {/* <Image
        src="/assets/svg/mobileTogler.svg"
        width={24}
        height={24}
        onClick={() => setMenuIsVisible(false)}
      /> */}
      {/* <a onClick={() => setMenuIsVisible(false)}>a</a> */}
      {/* <a href="#" onClick={() => setMenuIsVisible(false)}>X</a> */}
      <FontAwesomeIcon icon={faX} onClick={() => setMenuIsVisible(false)} />
      <NavMobile>
        <NavMenu />
      </NavMobile>
    </Container>
  );
}
