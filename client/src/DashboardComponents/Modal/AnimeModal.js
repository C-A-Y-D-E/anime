import React from "react";
import { ModalContainer } from "../../components/ShareModal/ShareStyle";
import { createPortal } from "react-dom";
import { ErrorMessage, Formik, Field } from "formik";
import { updateAnime, addAnime } from "../../store/actions/dashboard";
import { useDispatch } from "react-redux";
import {
  ModalContent,
  Form,
  ModalAction,
  Create,
  Cancel,
  ModalForm,
  ModalHeading,
} from "./ModalStyle";
import { FormField, Label, Input } from "../../globalStyles";
const modalRoot = document.querySelector("#modal-root");
const AnimeModal = ({ onClose, data }) => {
  const dispatch = useDispatch();
  return createPortal(
    <ModalContainer>
      <ModalContent>
        <Formik
          initialValues={{
            title: data != null ? data.title : "",
            category: "",
            rating: data != null ? data.rating : "",
            duration: data != null ? data.duration : "",
            image_url: data != null ? data.image_url : "",
            cover_url: data != null ? data.cover_url : "",
            description: data != null ? data.description : "",
          }}
          onSubmit={async (values) => {
            values.category = values.category.split(",");

            if (data) {
              dispatch(updateAnime(data._id, values));
              onClose(false);
            } else {
              dispatch(addAnime(values));
              onClose(false);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <ModalForm>
                <ModalHeading>Post a New Anime</ModalHeading>
                <FormField>
                  <Label htmlFor="title">Name</Label>
                  <Field name="title" as={Input} type="text" />
                  <ErrorMessage name="title" component={Error} />
                </FormField>
                <FormField>
                  <Label htmlFor="category">Category</Label>
                  <Field name="category" as={Input} type="text" />
                  <ErrorMessage name="category" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="rating">Rating</Label>
                  <Field name="rating" as={Input} type="number" />
                  <ErrorMessage name="rating" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="duration">duration</Label>
                  <Field name="duration" as={Input} type="number" />
                  <ErrorMessage name="duration" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="image_url">image</Label>
                  <Field name="image_url" as={Input} type="url" />
                  <ErrorMessage name="image_url" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="cover_url">Cover</Label>
                  <Field name="cover_url" as={Input} type="url" />
                  <ErrorMessage name="cover_url" component={Error} />
                </FormField>

                <FormField style={{ gridColumn: "1/-1" }}>
                  <Label htmlFor="description">description</Label>
                  <Field name="description" as={Input} type="text" />
                  <ErrorMessage name="description" component={Error} />
                </FormField>
              </ModalForm>
              <ModalAction>
                <Cancel onClick={() => onClose(false)}>
                  <h3>Cancel</h3>
                </Cancel>
                <Create type="submit">
                  <h3>{data ? "Edit" : "CREATE"}</h3>
                </Create>
              </ModalAction>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalContainer>,
    modalRoot
  );
};

export default AnimeModal;
