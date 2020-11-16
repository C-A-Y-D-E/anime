import React from "react";
import { BsChat, BsBookmarkPlus } from "react-icons/bs";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FiThumbsUp } from "react-icons/fi";

import {
  like,
  dislike,
  addBookmark,
  deleteBookmark,
} from "../../store/actions/user";
import { connect } from "react-redux";
import { css } from "styled-components/macro";
import LazyLoad from "react-lazyload";
import {
  BannerImage,
  ContentContainer,
  BannerHeading,
  BannerSummary,
  Category,
  CategoryItem,
  Social,
  SocialItem,
  SocialText,
} from "./BannerStyle";

const Banner = ({
  anime,
  like,
  dislike,
  addBookmark,
  deleteBookmark,
  openModal,
  likes,
  bookmarks,
}) => {
  const postLike = async (animeId) => {
    like(animeId);
  };
  const deleteLike = async (animeId) => {
    dislike(animeId);
  };

  const removeBookmark = (id) => {
    deleteBookmark(id);
  };

  const likebyUser = () => {
    if (likes && likes.results.find((like) => like.anime._id === anime._id)) {
      return true;
    }
    return false;
  };

  const bookmarkByUser = () => {
    if (bookmarks && bookmarks.find((bookmark) => bookmark._id === anime._id)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <BannerImage>
        <LazyLoad style={{ height: "100%" }}>
          <picture>
            <source
              media="(max-width:768px)"
              srcSet={
                anime.cover_url && anime.cover_url.replace(".jpg", "l.jpg")
              }
            />

            <img
              src={anime.cover_url}
              height="100%"
              width="100%"
              alt={anime.title}
              css={`
                object-fit: cover;
              `}
            />
          </picture>
        </LazyLoad>
      </BannerImage>
      <ContentContainer>
        <BannerHeading>{anime.title}</BannerHeading>
        <BannerSummary>{anime.description}</BannerSummary>
        <Category>
          {anime.category &&
            anime.category.map((cat) => (
              <CategoryItem key={cat}>
                <span>{cat}</span>
              </CategoryItem>
            ))}
        </Category>

        <Social>
          {likebyUser() ? (
            <SocialItem
              whileHover={{ scale: 1.1 }}
              css={`
                background-color: var(--primary-color);
              `}
              onClick={() => deleteLike(anime.id)}
            >
              <FiThumbsUp />
              <SocialText>{anime.likes}</SocialText>
            </SocialItem>
          ) : (
            <SocialItem
              whileHover={{ scale: 1.1 }}
              onClick={() => postLike(anime.id)}
            >
              <FiThumbsUp />
              <SocialText>{anime.likes}</SocialText>
            </SocialItem>
          )}
          <SocialItem whileHover={{ scale: 1.1 }}>
            <BsChat />
            <SocialText>{anime.comments ? anime.comments : 0}</SocialText>
          </SocialItem>
          <SocialItem
            whileHover={{ scale: 1.1 }}
            onClick={() => openModal(true)}
          >
            <TiArrowForwardOutline />
          </SocialItem>
          {bookmarkByUser() ? (
            <SocialItem
              css={`
                background-color: var(--primary-color);
              `}
              onClick={() => removeBookmark(anime.id)}
            >
              <BsBookmarkPlus />
            </SocialItem>
          ) : (
            <SocialItem
              whileHover={{ scale: 1.1 }}
              onClick={() => addBookmark(anime.id)}
            >
              <BsBookmarkPlus />
            </SocialItem>
          )}
        </Social>
      </ContentContainer>
    </>
  );
};

export default connect(null, { like, dislike, addBookmark, deleteBookmark })(
  Banner
);
