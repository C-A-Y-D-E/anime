import React from "react";
import { SliderItem, SliderImage } from "../Slider/styles";
import Skeleton from "react-loading-skeleton";

const SliderSkeletion = () => {
  return (
    <SliderItem>
      <SliderImage style={{ filter: "none" }}>
        <Skeleton height={"100%"} width={"100%"} />
      </SliderImage>
    </SliderItem>
  );
};

export default SliderSkeletion;
