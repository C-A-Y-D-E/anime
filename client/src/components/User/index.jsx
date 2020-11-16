import React from "react";
import {
  BookmarkContainer,
  Bookmark,
  BookmarkItem,
  BookmarkImage,
  BookmarkHeading,
  BookmarkDelete,
} from "./UserStyle";

const User = () => {
  return (
    <BookmarkContainer>
      <Bookmark>
        <BookmarkItem>
          <BookmarkImage>
            <img
              style={{ width: "4rem" }}
              src="images/profile.jpg"
              alt="anime"
            />
          </BookmarkImage>
          <BookmarkHeading>Tokyo Ghoul</BookmarkHeading>
          <BookmarkDelete />
        </BookmarkItem>
        <BookmarkItem>
          <BookmarkImage>
            <img
              style={{ width: "4rem" }}
              src="images/profile.jpg"
              alt="anime"
            />
          </BookmarkImage>
          <BookmarkHeading>Tokyo Ghoul</BookmarkHeading>
          <BookmarkDelete />
        </BookmarkItem>
        <BookmarkItem>
          <BookmarkImage>
            <img
              style={{ width: "4rem" }}
              src="images/profile.jpg"
              alt="anime"
            />
          </BookmarkImage>
          <BookmarkHeading>Tokyo Ghoul</BookmarkHeading>
          <BookmarkDelete />
        </BookmarkItem>
      </Bookmark>
    </BookmarkContainer>
  );
};

export default User;
