import React from "react";
import {
  CardItem,
  CardImage,
  CardText,
  CardHeading,
  CardParagraph,
  Rating,
} from "../CardItem/CardItemStyle";
import Skeleton from "react-loading-skeleton";
const CardItemSkeleton = () => {
  return (
    <>
      <CardItem style={{ boxShadow: "none" }}>
        <CardImage>
          <Skeleton height={"100%"} width={"100%"} />
          <Rating style={{ backgroundColor: "transparent" }}>
            <Skeleton circle height={"100%"} width={"100%"} />
          </Rating>
        </CardImage>

        <CardText>
          <CardHeading>
            <Skeleton height={10} width={150} />
          </CardHeading>
          <CardParagraph>
            <Skeleton height={10} width={100} />
          </CardParagraph>
        </CardText>
      </CardItem>
    </>
  );
};

export default CardItemSkeleton;
