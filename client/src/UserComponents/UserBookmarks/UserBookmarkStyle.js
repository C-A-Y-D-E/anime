import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const BookmarkContainer = styled.div`
  width: 100%;
  padding: 5rem 5em 3rem 5rem;
  ${mediaQ("sm")`
   padding: 3rem;
  `}

  ${mediaQ("xs")`
   padding: 1rem;
  `}
`;

export const BookmarkListContainer = styled.ul`
  height: 60vh;
  margin-top: 2rem;
  overflow-y: auto;
  /* ${mediaQ("sm")`
    overflow: hidden;
  `} */
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

export const BookmarkList = styled.li`
  display: grid;
  grid-template-columns: 20% 50% 20%;
  grid-column-gap: 2rem;
  margin-bottom: 2rem;
  ${mediaQ("md")`
   grid-column-gap: 1rem;
  `}
  ${mediaQ("sm")`
   grid-column-gap: 1.5rem;
  `}
`;
export const BookmarkImage = styled.img`
  grid-column: 1/2;
  border-radius: 10px;
  width: 100%;
  height: 13rem;
  object-fit: fill;
`;
export const BookmarkContent = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
`;
export const BookmarkHeading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  margin: 1rem 0;
  ${mediaQ("md")`
   font-size: 1.5rem;
  `}
  ${mediaQ("sm")`
   font-size: 1.8rem;
  `}
`;
export const Heading = styled.h2`
  font-size: 2rem;
  flex: 1;
  margin-top: 0.5rem;
  text-transform: capitalize;
`;
export const Paragraph = styled.p`
  font-size: 1.4rem;
  color: #403838;
  flex: 2;
  ${mediaQ("md")`
   font-size: 1.2rem;
   
  `}
  ${mediaQ("sm")`
   font-size: 1.2rem;
  `}
`;
export const BookmarkAction = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: var(--primary-color);
  justify-content: space-evenly;
  ${mediaQ("md")`
   font-size: 2rem;
  `}
  ${mediaQ("sm")`
   font-size: 2.6rem;
  `}
`;
