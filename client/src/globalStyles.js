import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import mediaQ from "./mediaQueries";
const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#FA9D3E;
    --plyr-color-main:#FA9D3E;
}
*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%
}

a{
  text-decoration:none
}
a:active,a:visited,a:link{
  color:#000;
}

body{
    font-family: 'Montserrat', sans-serif;
    height:100vh;
}


`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 180rem;
  margin-right: auto;
  margin-left: auto;
  /* padding-right: 5rem;
  padding-left: 5rem; */
  position: relative;
  @media screen and (max-width: 99.1rem) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media only screen and (max-width: 600px) {
    & {
      padding: 0 1rem;
      margin-top: 1rem !important;
    }
  }
`;

export const Section = styled(Container)`
  margin-top: 4rem;
  ${mediaQ("")}
`;

export const Button = styled.button`
  background-color: ${({ background }) =>
    !background ? `var(--primary-color)` : "#fff"};
  border: none;
  border-radius: ${({ radius }) => (!radius ? `5px` : radius)};
  outline: none;
  color: ${({ white }) => (white ? "#fff" : "#000")};
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: ${({ border }) =>
    !border ? `1px solid var(--primary-color)` : "1px solid #000"};
  transition: transform 0.2s;
  text-decoration: none;
  display: inline-block;
  position: relative;
  /* &:hover {
    background-color: ${({ background }) =>
    !background ? `#fff` : `var(--primary-color)`};
    color: ${({ white }) => (white ? "#000" : "#fff")};
  } */
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonLink = styled(Link)`
  background-color: ${({ background }) =>
    !background ? `var(--primary-color)` : "#fff"};
  border: none;
  border-radius: ${({ radius }) => (!radius ? `5px` : radius)};
  outline: none;
  color: ${({ white }) => (white ? "#fff" : "#000")} !important;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: ${({ border }) =>
    !border ? `1px solid var(--primary-color)` : "1px solid #000"};
  transition: transform 0.2s;
  text-decoration: none;
  display: inline-block;

  /* &:hover {
    background-color: ${({ background }) =>
    !background ? `#fff` : `var(--primary-color)`};
    color: ${({ white }) => (white ? "#000" : "#fff")};
  } */
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const FormField = styled.div`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;
export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  display: inline-block;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
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
export const InputUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const FormUploadContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const FormHeading = styled.h2`
  align-self: start;
  font-size: 3rem;
  border-bottom: 0.8rem solid var(--primary-color);
  margin: 0.5rem 0 2rem 2rem;
  display: inline-block;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;
export default GlobalStyle;
