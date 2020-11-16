import React, { useState, useEffect } from "react";
import { ButtonLink } from "../../globalStyles";
import { css } from "styled-components/macro";
import mediaQ from "../../mediaQueries";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import LazyLoad from "react-lazyload";

import {
  SliderItem,
  SliderContainer,
  SliderWrapper,
  ControlLeft,
  ControlRight,
  SliderImage,
  SliderContent,
  Heading,
  Paragraph,
} from "./styles";

const Slider = ({ items }) => {
  const width = useWindowWidth();
  const [page, setPage] = useState(0);

  return (
    <LazyLoad>
      <SliderContainer className={"slider-instance"} height={"500px"}>
        <SliderWrapper
          width={width * items.results.length}
          style={{
            transform: `translateX(${-(page * width)}px)`,
            transition: "transform ease-out 0.30s",
            width: width * items.results.length + "px",
          }}
        >
          {items &&
            items.results.map((i, index) => {
              return (
                <Slide
                  key={i.id}
                  last={index === items.results.length - 1}
                  index={index}
                  item={i}
                  width={width}
                />
              );
            })}
        </SliderWrapper>

        <div>
          {page > 0 ? (
            <ControlLeft onClick={() => setPage(page - 1)}>
              <FiChevronLeft />
            </ControlLeft>
          ) : (
            ""
          )}

          {page < items.results.length - 1 ? (
            <ControlRight onClick={() => setPage(page + 1)}>
              <FiChevronRight />
            </ControlRight>
          ) : (
            ""
          )}
        </div>
      </SliderContainer>
    </LazyLoad>
  );
};

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

const Slide = ({ item, width }) => {
  return (
    <SliderItem width={width}>
      <SliderImage>
        <LazyLoad style={{ height: "100%" }}>
          <picture>
            <source
              media="(max-width:768px)"
              srcSet={item.cover_url.replace(".jpg", "l.jpg")}
            />

            <img
              src={item.cover_url}
              height="100%"
              width="100%"
              alt={item.title}
              loading="lazy"
            />
          </picture>
        </LazyLoad>
      </SliderImage>
      <SliderContent>
        <Heading>{item.title}</Heading>
        <Paragraph>{item.description}</Paragraph>
        <ButtonLink
          to={`/view/${item._id}`}
          white="true"
          css={`
            font-size: 3rem;
            margin-top: 1rem;
            ${mediaQ("sm")`
            font-size:2rem;
            `}
            ${mediaQ("xs")`
            font-size:1.5rem;
            padding:1rem 2rem;
            `}
          `}
        >
          Watch Now
        </ButtonLink>
      </SliderContent>
    </SliderItem>
  );
};

export default Slider;
