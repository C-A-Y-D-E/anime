import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 35rem;
  row-gap: 2rem;
  column-gap: 2rem;
  /* margin: 4rem 0; */
  /* margin-top: -4rem; */
  ${mediaQ("xl")`
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-auto-rows: 35rem;
column-gap: 1rem;
row-gap: 2rem;
`}
  ${mediaQ("lg")`
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

`}


  ${mediaQ("sm")`
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
grid-auto-rows: 25rem;
`}

  ${mediaQ("xs")`
grid-template-columns: repeat(2, minmax(150px, 1fr));
grid-auto-rows: 20rem;
`}
${mediaQ("xxs")`
grid-template-columns: repeat(2, minmax(100px, 1fr));
grid-auto-rows: 20rem;
`}
`;

export const CardItem = styled.div`
  position: relative;
  transition: transform 0.5s;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translatey(-1rem);
  }
`;
export const CardTitle = styled.h3`
  font-size: 3rem;
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  right: 2rem;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);

  ${mediaQ("xl")`
  font-size: 2.5rem;

  `}

  ${mediaQ("md")`
 font-size:2.5rem;
 left:2rem;
 bottom:2rem;
 line-height:1.5;
 
  `}
   ${mediaQ("sm")`
 font-size:1.5rem;
 left:2rem;
 bottom:2rem;
 line-height:1.5;
 
  `}
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: brightness(70%);
  border-radius: 5px;
`;
