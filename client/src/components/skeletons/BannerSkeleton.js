import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  BannerImage,
  ContentContainer,
  BannerHeading,
  BannerSummary,
} from "../Banner/BannerStyle";

const BannerSkeleton = () => {
  return (
    <>
      <BannerImage style={{ filter: "none" }}>
        <Skeleton height="100%" width="100%" />
      </BannerImage>
      <ContentContainer>
        <BannerHeading>
          <Skeleton width={"300px"} />
        </BannerHeading>

        <BannerSummary>
          <Skeleton height={"15px"} />
          <Skeleton height={"15px"} />
          <Skeleton height={"15px"} />
        </BannerSummary>
      </ContentContainer>
    </>
  );
};

export default BannerSkeleton;
