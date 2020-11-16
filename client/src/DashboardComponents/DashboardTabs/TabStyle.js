import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const TabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #e5e5e5;
  height: 8rem;
  border-radius: 5px;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 2rem;

  ${mediaQ("md")`
  
    height:6rem;
  `}

  ${mediaQ("xs")`
  
  height:5rem;
`}
`;

export const TabItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) =>
    background ? "var(--primary-color)" : null};
  color: ${({ background }) => (background ? "#fff" : `#000`)};

  &:not(:last-child) {
    border-right: 1px solid #a3a3a3;
  }

  & h2 {
    display: inline-block;
    font-size: 4rem;
    font-weight: normal;
    ${mediaQ("md")`

    font-size: 2rem;
  
  
  `}
  }
`;
