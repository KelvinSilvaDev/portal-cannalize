import React from "react";
import { colorTypes } from "../../utils/ColorTypes";
import { formatDate } from "../../utils/formatters";
import Texts from "../Text";
import * as Style from "./styles";

export interface CardNewsProps {
  imageUrl: string;
  alt?: string;
  title: string;
  publishedAt: Date;
  fontColor?: colorTypes;
}

function CardNews({
  imageUrl,
  alt,
  title,
  publishedAt,
  fontColor,
}: CardNewsProps) {
  return (
    <Style.Container>
      <img src={imageUrl} alt={alt} />
      <span className="title">
        <Texts type="h2" bold color={fontColor || "tertiary"}>
          {title}
        </Texts>
      </span>
      <Texts type="md" color="black">
        {formatDate(publishedAt)}
      </Texts>
    </Style.Container>
  );
}

export default CardNews;
