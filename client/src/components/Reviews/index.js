import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { Form, FormField, Input } from "../../globalStyles";
import { css } from "styled-components/macro";
import { FiEdit, FiXCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getAnimeComments } from "../../store/actions/animes";
import { useSelector } from "react-redux";
import {
  addComment,
  deleteComment,
  updateComment,
} from "../../store/actions/user";
import { AnimatePresence } from "framer-motion";
import {
  UserImage,
  Name,
  ReviewHeading,
  ReviewListContainer,
  ReviewList,
  ReviewItem,
  ReviewContent,
  Review,
  ReviewActions,
} from "./ReviewsStyle";
const Reviews = ({ user, match }) => {
  const comments = useSelector((states) => states.animeComments);

  let userComment = comments.results.find(
    (comment) => comment.user._id === user._id
  );

  let dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(true);
  };

  useEffect(() => {
    dispatch(getAnimeComments(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <ReviewHeading>Reviews</ReviewHeading>

      {!userComment && (
        <Formik
          initialValues={{
            comment: "",
          }}
          onSubmit={async (values, actions) => {
            dispatch(addComment(match.params.id, values));
            actions.setFieldValue("comment", "");
          }}
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              css={`
                align-items: start;
                margin: 2rem 0 0 0;
                width: 100%;
              `}
            >
              <FormField
                css={`
                  display: flex;
                  align-items: center;
                `}
              >
                {user && (
                  <UserImage
                    src={`/public/img/users/${user.photo}`}
                    alt="image"
                  />
                )}
                <Field
                  name="comment"
                  placeholder="Add a public comment"
                  as={Input}
                  type="text"
                />
              </FormField>
            </Form>
          )}
        </Formik>
      )}

      {active && (
        <Formik
          initialValues={{
            comment: userComment != null ? userComment.comment : "" || "",
          }}
          onSubmit={async (values, actions) => {
            dispatch(updateComment(userComment._id, values));
            actions.setFieldValue("comment", values.comment);
            setActive(false);
          }}
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              css={`
                align-items: start;
                margin: 2rem 0 0 0;
                width: 100%;
              `}
            >
              <FormField
                css={`
                  display: flex;
                  align-items: center;
                `}
              >
                {user && (
                  <UserImage
                    src={`/public/img/users/${user.photo}`}
                    alt="image"
                  />
                )}
                <Field name="comment" as={Input} type="text" />
              </FormField>
            </Form>
          )}
        </Formik>
      )}

      <ReviewListContainer>
        <ReviewList>
          <AnimatePresence initial={false}>
            {userComment && (
              <ReviewItem
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ x: "-100%" }}
              >
                <UserImage
                  css={`
                    width: 5rem;
                    height: 5rem;
                  `}
                  src={`/public/img/users/${userComment.user.photo}`}
                  alt="image"
                />
                <ReviewContent>
                  <Name>{userComment.user.name}</Name>
                  <Review>{userComment.comment}</Review>
                </ReviewContent>

                <ReviewActions>
                  {!active ? (
                    <>
                      <FiEdit
                        css={`
                          margin-right: 2rem;
                          cursor: pointer;
                        `}
                        onClick={() => toggle()}
                      />

                      <FiXCircle
                        css={`
                          cursor: pointer;
                        `}
                        onClick={() => dispatch(deleteComment(userComment._id))}
                      />
                    </>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setActive(false)}
                    >
                      Cancel
                    </p>
                  )}
                </ReviewActions>
              </ReviewItem>
            )}

            {comments &&
              comments.results &&
              comments.results.map((comment) => {
                if (comment.user._id !== user._id) {
                  return (
                    <ReviewItem
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.5 }}
                      key={comment._id}
                    >
                      <UserImage
                        css={`
                          width: 5rem;
                          height: 5rem;
                        `}
                        src={`/public/img/users/${comment.user.photo}`}
                        alt="image"
                      />
                      <ReviewContent>
                        <Name>{comment.user.name}</Name>
                        <Review>{comment.comment}</Review>
                      </ReviewContent>
                    </ReviewItem>
                  );
                }
              })}
          </AnimatePresence>
        </ReviewList>
      </ReviewListContainer>
    </>
  );
};

export default Reviews;
