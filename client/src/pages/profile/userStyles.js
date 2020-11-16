import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const UserLayout = styled.div`
  background-color: #fff;
  max-width: 120rem;

  margin: 8rem auto;
  /* min-height: 100vh; */
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  display: flex;

  ${mediaQ("lg")`
     width: 100wv;
     margin:8rem 4rem;
  `}
  ${mediaQ("sm")`
  margin:3rem 1rem;
  `}
`;
