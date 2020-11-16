import React from "react";
import {
  CardItem,
  CardImage,
  Rating,
  Type,
  CardText,
  CardHeading,
  CardParagraph,
} from "./CardItemStyle";
import history from "../../history";
import LazyLoad from "react-lazyload";
const Card = ({ anime }) => {
  return (
    <CardItem>
      <CardImage onClick={() => history.push(`/view/${anime.id}`)}>
        <LazyLoad style={{ height: "100%" }} offset={100}>
          <picture>
            <source
              media="(max-width:768px)"
              srcSet={anime.image_url.replace(".jpg", "m.jpg")}
            />
            <source
              media="(max-width:480px)"
              srcSet={anime.image_url.replace(".jpg", "t.jpg")}
            />
            <img
              alt="Card"
              src={anime.image_url}
              style={{ objectFit: "cover", backgroundPosition: "center" }}
              height="100%"
              width="100%"
              loading="lazy"
            />
          </picture>
        </LazyLoad>
        <Rating>
          <span>{anime.rating}</span>
        </Rating>
        <Type>
          <span>SUB</span>
        </Type>
      </CardImage>
      <CardText>
        <CardHeading>{anime.title.toUpperCase()}</CardHeading>
        <CardParagraph>155 Episodes</CardParagraph>
      </CardText>
    </CardItem>
  );
};

export default Card;
