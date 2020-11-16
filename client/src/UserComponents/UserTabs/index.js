import React from "react";
import { ProfileList, ListItem, ProfileContainer, Item } from "./UserTabsStyle";
import { FiUser, FiHeart, FiBookmark } from "react-icons/fi";

const userProfile = ({ toggle, active }) => {
  return (
    <ProfileContainer>
      <ProfileList>
        <ListItem
          active={active === "profile" ? true : false}
          onClick={() => toggle("profile")}
        >
          <Item>
            <FiUser style={{ marginRight: "1rem" }} /> User Info
          </Item>
        </ListItem>
        <ListItem
          active={active === "likes" ? true : false}
          onClick={() => toggle("likes")}
        >
          <Item>
            <FiHeart style={{ marginRight: "1rem" }} /> Favorites
          </Item>
        </ListItem>
        <ListItem
          active={active === "bookmarks" ? true : false}
          onClick={() => toggle("bookmarks")}
        >
          <Item>
            <FiBookmark style={{ marginRight: "1rem" }} /> Bookmarks
          </Item>
        </ListItem>
      </ProfileList>
    </ProfileContainer>
  );
};

export default userProfile;
