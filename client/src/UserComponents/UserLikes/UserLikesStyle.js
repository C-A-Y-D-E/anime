import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const LikesContainer = styled.div`
  width: 100%;
  padding: 5rem 5em 3rem 5rem;
  ${mediaQ("sm")`
   padding: 3rem;
  `}

  ${mediaQ("xs")`
   padding: 1rem;
  `}
`;

export const List = styled.div`
  border: 1px solid var(--primary-color);
  display: grid;
  /* justify-content: space-between; */
  grid-template-columns: 1fr auto;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  ${mediaQ("sm")`
  font-size:1.2rem;
  `}
  ${mediaQ("xs")`
  font-size:1rem;
  `}
`;
export const ListContainer = styled.div`
  margin-top: 2rem;
  overflow-y: auto;
  height: 60vh;
  padding-right: 2rem;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: var(--primary-color);
  }
`;
