import styled from "styled-components";
import mediaQ from "../../mediaQueries";
import { motion } from "framer-motion";
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: max-content;
  row-gap: 2rem;
  column-gap: 2rem;
  margin: 4rem 0;

  ${mediaQ("md")`
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
column-gap: 1rem;
row-gap: 2rem;
`}
  ${mediaQ("sm")`
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

`}

  ${mediaQ("xs")`
grid-template-columns: repeat(2, minmax(150px, 1fr));

`}
${mediaQ("xxs")`
grid-template-columns: 1fr;
`}
`;
export const CardItem = styled(motion.article)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
`;
export const CardImage = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  filter: brightness(60%);
  & div img {
    border-radius: 10px;
  }
`;
export const CardContent = styled.div`
  text-transform: capitalize;
  padding: 10px;
  margin-bottom: 10px;
  color: #000;
  transition: all ease 0.5s;
  cursor: pointer;

  ${mediaQ("md")`
  height: 5rem;
  `}
`;
export const CardHeading = styled.h4`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  ${mediaQ("md")`
font-size: 1.2rem;

`}

  @media only screen and (max-width: 360px) {
    & {
      font-size: 1.1rem;
    }
  }
`;
export const CardSubHeading = styled.p`
  color: grey;
  font-size: 1.5rem;
  color: #000;
  margin-top: 5px;

  ${mediaQ("xs")`
font-size: 1rem;

`}
`;
