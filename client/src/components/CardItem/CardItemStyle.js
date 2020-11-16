import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const CardItem = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;

  &:hover {
    transform: translatey(-1rem);
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export const Rating = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: var(--primary-color);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  border: 1px solid #fff;

  @media only screen and (max-width: 360px) {
    & {
      height: 3rem;
      width: 3rem;
      font-size: 1rem;
    }
  }
`;
export const Type = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3rem;
  width: 5rem;

  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;

  @media only screen and (max-width: 360px) {
    & {
      height: 2.5rem;
      width: 3.5rem;
      font-size: 1rem;
    }
  }
`;
export const CardText = styled.figure`
  text-transform: capitalize;
  padding: 10px;
  color: #000;
  transition: all ease 0.5s;
  cursor: pointer;
`;
export const CardHeading = styled.h4`
  font-size: 1.5rem;
  ${mediaQ("xxs")`
  font-size:1.2rem;
  `}
`;
export const CardParagraph = styled.p`
  color: grey;
  font-size: 1.2rem;
  margin-top: 5px;
  letter-spacing: 1px;
  ${mediaQ("xxs")`
  font-size:1rem;
  `}
`;
