import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MOBILE_WIDTH } from "../../../src/utils/constants";
import useMediaQuery from "../../../src/hooks/useMediaQuery";
import Link from "../../Link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import * as Style from "./styles";

export default function HeroSlider(swiperPost) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  return (
    <Style.HeroWrapp isDesktop={!isMobile}>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          pagination={true}
          modules={[Pagination]}
          isDesktop={!isMobile}
        >
          {swiperPost.swiperPost.map(
            ({ id, title, excerpt, yoast_head_json, date_gmt, _embedded }) => (
              <SwiperSlide key={id} isDesktop={!isMobile}>
                <Style.HeroText isDesktop={!isMobile}>
                  <h1>{title.rendered}</h1>
                  <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                  <div>
                    <span>
                      <p>
                        <strong>
                          {format(
                            new Date(date_gmt),
                            `dd 'de' MMMM 'de' yyyy`,
                            {
                              locale: ptBR,
                            }
                          )}
                          , por{" "}
                          <Link href="/">{_embedded?.author[0].name}</Link>
                        </strong>
                      </p>
                    </span>
                  </div>
                </Style.HeroText>
                <Style.HeroImg isDesktop={!isMobile}>
                  <Image
                    src={yoast_head_json.og_image[0].url}
                    layout="responsive"
                    width={100}
                    height={75}
                    alt="teste"
                    sizes="
                              (min-width: 75em) 33vw,
                              (min-width: 48em) 50vw,
                              100vw
                              "
                    priority
                  />
                </Style.HeroImg>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </Style.HeroWrapp>
  );
}
