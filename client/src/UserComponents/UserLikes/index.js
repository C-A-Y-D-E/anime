import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { Heading } from "../UserBookmarks/UserBookmarkStyle";
import { List, ListContainer, LikesContainer } from "./UserLikesStyle";
const UserLikes = ({ likes }) => {
  return (
    <LikesContainer>
      <Heading>Favorites</Heading>
      <ListContainer>
        {likes.results.map((like) => (
          <List key={like._id}>
            <h3>{like.anime.title.toUpperCase()}</h3>
            <h3>{dayjs(`${like.likedAt}`).format("DD MMM YYYY")}</h3>
          </List>
        ))}
      </ListContainer>
    </LikesContainer>
  );
};
const mapStateToProps = (states) => ({
  likes: states.likes,
});
export default connect(mapStateToProps)(UserLikes);
