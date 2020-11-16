import styled from "styled-components";

import mediaQ from "../../mediaQueries";
export const ProfileContainer = styled.div`
  flex: 32rem 0 0;
  background-color: var(--primary-color);
  padding: 2rem 0;
  text-align: center;
  ${mediaQ("lg")`
  flex:20rem 0 0;
    
  `}
  ${mediaQ("sm")`
  display:none;
  `}
`;

export const ProfileList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;
export const ListItem = styled.li`
  margin: 1rem 0;
  transition: all 0.1s;
  border-right: ${({ active }) => (active ? "4px solid #fff " : "none")};

  &:hover {
    border-right: 4px solid #fff;
  }
`;
export const Item = styled.a`
  padding: 1rem 6rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: transform 0.4s;
  &:hover {
    transform: translatex(-10px);
  }
`;
