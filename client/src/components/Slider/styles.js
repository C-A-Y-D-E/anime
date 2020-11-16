import styled, { css } from "styled-components";
import mediaQ from "../../mediaQueries";
import { BannerHeading, BannerSummary } from "../Banner/BannerStyle";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  height: ${(props) => props.height || "500px"};
  ${mediaQ("sm")`
  height:400px;
  `}
  ${mediaQ("sm")`
  height:300px;
  `}
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const SliderItem = styled.div`
  position: relative;
  height: 500px;
  width: ${(props) => props.width + "px" || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Control = styled.div`
  position: absolute;

  bottom: 2rem;
  width: 40px;
  height: 40px;
  margin: 10px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 2rem;
    color: #fff;
  }
`;

export const ControlLeft = styled(Control)`
  right: 10rem;
  ${mediaQ("xs")`
    right:7rem
  `}
`;
export const ControlRight = styled(Control)`
  right: 5rem;
  ${mediaQ("xs")`
    right:2rem
  `}
`;

export const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(70%);

  & img {
    object-fit: cover;
  }
`;
export const SliderContent = styled.div`
  position: absolute;
  color: #fff;
  top: 50%;
  left: 8rem;
  transform: translateY(-50%);
  ${mediaQ("sm")`
  left: 5rem;
  `}
  ${mediaQ("sm")`
  top: 30%;
  left:2rem;
  `}
`;
export const Heading = styled(BannerHeading)`
  /* word-spacing: 100vw; */
  font-size: 5rem;
  font-weight: normal;
  ${mediaQ("sm")`
  font-size:3rem;
  `}
  ${mediaQ("sm")`
  font-size:2rem;
  `}
`;
export const Paragraph = styled(BannerSummary)`
  width: 40%;
  ${mediaQ("sm")`
  font-size:1.6rem;
  width:80%;
  `}
  ${mediaQ("xs")`
    font-size:1.4rem;
  width:80%;
  `}
`;
