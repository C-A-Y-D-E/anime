import styled from "styled-components";
import mediaQ from "../../mediaQueries";
import { motion } from "framer-motion";
export const BannerImage = styled.div`
  /* background-image: ${({ src }) => (src ? `url(${src})` : null)}; */
  height: 80vh;
  width: 100%;

  filter: brightness(60%);

  ${mediaQ("sm")`
  height: 60vh;

  `};
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 10rem;
  color: #fff;

  ${mediaQ("sm")`
      bottom: 0;
      bottom: 2rem;
      left: 2rem;
  `}
`;

export const BannerHeading = styled.h2`
  font-size: 4rem;
  text-transform: capitalize;
  ${mediaQ("sm")`
  width:90%;
  `}
`;

export const BannerSummary = styled.summary`
  font-size: 2rem;
  width: 60%;
  margin: 1rem 0;

  ${mediaQ("sm")`
    width: 90%;
  `}
`;

export const Category = styled.ul`
  margin: 1.5rem 0;
`;

export const CategoryItem = styled.li`
  padding: 0.75rem 2rem;
  display: inline-block;
  font-size: 1.6rem;
  margin-right: 1rem;
  background-color: var(--primary-color);

  ${mediaQ("sm")`
     padding: 0.5rem 1rem;
      font-size: 1.2rem;
  `}
`;

export const Social = styled.ul`
  margin: 1.5rem 0;
  display: flex;
`;

export const SocialItem = styled(motion.li)`
  border: 1px solid #fff;
  border-radius: 50px;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-right: 1rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const SocialText = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
`;
