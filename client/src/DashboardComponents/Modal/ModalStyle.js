import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const ModalContent = styled.div`
  width: 50vw;
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  border-radius: 1rem;
  background: #fff;
  position: relative;
  z-index: 9999;

  ${mediaQ("lg")`
    width:70vw;
  `}
  ${mediaQ("md")`
    width:80vw;
  `}

  ${mediaQ("sm")`
    width:90vw;
    
  `}
`;

export const Form = styled.form``;

export const ModalAction = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column: 1/-1;
`;
export const Create = styled.button`
  border: none;
  background-color: var(--primary-color);
  padding: 2rem;
  display: flex;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  & h3 {
    font-weight: normal;
    font-size: 2rem;
    display: inline-block;
    margin-left: auto;
  }
`;
export const Cancel = styled(Create)`
  background-color: #fff;
  color: #000;
  border: 1px solid;

  & h3 {
    margin-left: 0;
  }
`;

export const ModalForm = styled.div`
  padding: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  grid-column: 1/2;

  ${mediaQ("sm")`
    padding: 2rem;
    gap: 2rem 1rem;
  `}
`;

export const ModalHeading = styled.h2`
  margin: 0 auto;
  display: inline-block;
  grid-column: 1/-1;
`;

export const ModalFormContent = styled.div`
  grid-column: 1/-1;
  font-size: 2rem;
  & h4 {
    margin-bottom: 1rem;
  }
  ${mediaQ("sm")`
    font-size: 1.5rem;
  `}
`;
