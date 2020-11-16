import React, { useState } from "react";
import {
  BookmarkContainer,
  BookmarkListContainer,
  BookmarkList,
  BookmarkImage,
  BookmarkHeading,
  BookmarkContent,
  BookmarkAction,
  Heading,
  Paragraph,
} from "./UserBookmarkStyle";
import { TiDeleteOutline, TiArrowForwardOutline } from "react-icons/ti";
import { connect } from "react-redux";
import { deleteBookmark } from "../../store/actions/user";
import ShareModal from "../../components/ShareModal";
import { Link } from "react-router-dom";

const UserBookmarks = ({ bookmarks, deleteBookmark }) => {
  const [showModal, setshowModal] = useState(false);
  const [setId, setsetId] = useState("");
  const deleteMark = (bookmark) => {
    deleteBookmark(bookmark);
  };
  const share = (id) => {
    setsetId(id);
    setshowModal(true);
  };

  return (
    <BookmarkContainer>
      <Heading>Bookmarks</Heading>
      <BookmarkListContainer>
        {bookmarks.map((bookmark) => (
          <BookmarkList key={bookmark._id}>
            <Link to={`/view/${bookmark._id}`}>
              <BookmarkImage src={bookmark.image_url} alt="tokyo" />
            </Link>
            <BookmarkContent>
              <BookmarkHeading>{bookmark.title}</BookmarkHeading>
              <Paragraph>{bookmark.description}</Paragraph>
            </BookmarkContent>
            <BookmarkAction>
              <TiArrowForwardOutline
                onClick={() => share(bookmark._id)}
                style={{ cursor: "pointer" }}
              />
              <TiDeleteOutline
                style={{ cursor: "pointer" }}
                onClick={() => deleteMark(bookmark._id)}
              />
            </BookmarkAction>
          </BookmarkList>
        ))}
      </BookmarkListContainer>
      {showModal ? (
        <ShareModal
          link={`${window.location.protocol}//${window.location.host}/${setId}`}
          onClose={() => setshowModal(false)}
        />
      ) : null}
    </BookmarkContainer>
  );
};

const mapStateToProps = (states) => ({
  bookmarks: states.user.user.bookmarks,
});
export default connect(mapStateToProps, { deleteBookmark })(UserBookmarks);
