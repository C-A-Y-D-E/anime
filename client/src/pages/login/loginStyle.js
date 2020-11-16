import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaQ from "../../mediaQueries";

export const FormMain = styled.main`
  width: 30vw;
  min-width: 55rem;
  margin: 50px auto;
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  border-radius: 5px;

  padding: 3rem;
  ${mediaQ("sm")`
    width:auto;
    margin:5rem 2rem;
    min-width:auto;
  `}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  margin: 0 auto;
  ${mediaQ("sm")`
    width:100%;
    
  `}
`;

export const FormHeading = styled.h2`
  align-self: start;
  font-size: 3rem;
  border-bottom: 0.8rem solid var(--primary-color);
  margin: 0.5rem 0 2rem 0;
  display: inline-block;
`;

export const FormField = styled.div`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;
export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  display: inline-block;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 1rem 1.75rem;
  font-size: 1.5rem;
  display: block;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  font-family: inherit;

  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #bbb;
  }
`;

export const Forgot = styled(Link)`
  margin-left: auto;
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const SignupNavigate = styled.div`
  margin: 2rem auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  & h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;
