import * as Style from "./styles";
import { MOBILE_WIDTH } from "../../../src/utils/constants";
import useMediaQuery from "../../../src/hooks/useMediaQuery";
import Link from "../../Link";

export default function HeroTags({ category }) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const isActive = console.log("ativou");
  return (
    <Style.TagsWrapp isDesktop={!isMobile}>
      <Style.Tags isDesktop={!isMobile}>
        {category.map(({ id, name }) => (
          <Link key={id} href="/" isActive={isActive}>
            {name}
          </Link>
        ))}
      </Style.Tags>
    </Style.TagsWrapp>
  );
}
