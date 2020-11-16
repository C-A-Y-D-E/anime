import styled from "styled-components";
import mediaQ from "../../mediaQueries";
import { FiSearch } from "react-icons/fi";
export const Input = styled.input`
  padding: 0.5rem 3rem 0.5rem 2rem;
  height: 4.5rem;
  border: 1px solid #dadada;
  border-radius: 5px;
  width: 100%;
  font-size: 2rem;
  font-family: Montserrat;
  font-weight: normal;
  z-index: 2;
  position: relative;

  ${mediaQ("sm")`
    height: 4rem;
    font-size: 1.2rem;
    padding: 0.5rem 3rem .5rem 1rem;
  `}
  ${mediaQ("xs")`
    height: 3.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 3rem .5rem 1rem;
  `}
`;
export const Search = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  ${mediaQ("sm")`
    top: 8px;
  right: 10px;
  `}
`;
export const SearchIcon = styled(FiSearch)`
  font-size: 2.5rem;
  color: var(--primary-color);
  ${mediaQ("sm")`
    font-size: 2rem;
  `}
`;

export const SearchList = styled.ul`
  border: 1px solid #dadada;
  border-top: none;
  position: absolute;
  top: 4.4rem;
  width: 100%;
  z-index: 1;
  background-color: #fff;
`;

export const SearchItem = styled.li`
  display: flex;
  align-items: center;
  ${mediaQ("sm")`
    margin:1rem;
  `}
`;
export const SearchImage = styled.div`
  height: 8rem;
  width: 8rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
  margin: 1rem 2rem;
  ${mediaQ("sm")`
    display:none;
  `}
`;
export const ItemTitle = styled.p`
  text-transform: uppercase;
`;
