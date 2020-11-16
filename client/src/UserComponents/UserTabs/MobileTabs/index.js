import React from "react";
import { FiUser, FiHeart, FiBookmark } from "react-icons/fi";

import styled from "styled-components";
import mediaQ from "../../../mediaQueries";
export const MobTabContainer = styled.div`
  display: none;
  ${mediaQ("sm")`
  
  position: fixed;
  bottom: 1px;
  left: 0;
  right: 0;

  font-size: 3rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding:1rem 0;
  align-items:center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  `}
`;
const Item = styled.div`
  color: ${({ active }) => (active ? "var(--primary-color)" : null)};
  height: 100%;
  cursor: pointer;
`;

const MobTab = ({ toggle, active }) => {
  return (
    <MobTabContainer>
      <Item
        active={active === "profile" ? true : false}
        onClick={() => toggle("profile")}
      >
        <FiUser />
      </Item>

      <Item
        active={active === "likes" ? true : false}
        onClick={() => toggle("likes")}
      >
        <FiHeart />
      </Item>
      <Item
        active={active === "bookmarks" ? true : false}
        onClick={() => toggle("bookmarks")}
      >
        <FiBookmark />
      </Item>
    </MobTabContainer>
  );
};

export default MobTab;
