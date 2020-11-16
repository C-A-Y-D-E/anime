import styled from "styled-components";
import mediaQ from "../../mediaQueries";

export const Tab = styled.div`
  margin-top: 4rem;
`;
export const HeaderContainer = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Header = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const HeaderItem = styled.li`
  font-size: 2rem;
  list-style: none;
  position: relative;
  border-bottom: ${({ active }) =>
    active ? ".8rem solid var(--primary-color)" : ".8rem solid transparent"};
  cursor: pointer;
  font-weight: normal;
  margin-right: 5rem;
  &:last-child {
    width: 60%;
  }
  &:last-child {
    margin-right: 0rem;
    margin-left: auto;
  }
  ${mediaQ("md")`
    font-size: 1.8rem;
    margin-right: 3rem ;
  `}

  ${mediaQ("sm")`
    font-size: 1.5rem;
    margin-right: 3rem;
  `}
  ${mediaQ("xs")`
    font-size: 1.3rem;
    margin-right: 1.5rem;
  `}
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 35rem;
  row-gap: 2rem;
  column-gap: 2rem;
  margin: 4rem 0;
  ${mediaQ("xl")`
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
column-gap: 1rem;
row-gap: 2rem;
`}
  ${mediaQ("lg")`
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
column-gap: 1rem;
row-gap: 2rem;
`}


  ${mediaQ("sm")`
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
grid-auto-rows: 25rem;
`}

  ${mediaQ("xs")`
grid-template-columns: repeat(2, minmax(150px, 1fr));
`}
${mediaQ("xxs")`
grid-template-columns: repeat(2, minmax(100px, 1fr));
grid-auto-rows: 20rem;
`}
`;
