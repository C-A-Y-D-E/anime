import React from "react";
import { ModalContainer } from "../../components/ShareModal/ShareStyle";
import { ErrorMessage, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
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
import { updateEpisode, postEpisode } from "../../store/actions/dashboard";
const modalRoot = document.querySelector("#modal-root");
const EpisodeModal = ({ onClose, data }) => {
  const dispatch = useDispatch();
  return createPortal(
    <ModalContainer>
      <ModalContent>
        <Formik
          initialValues={{
            anime: data != null ? data.anime : "",
            title: data != null ? data.title : "",
            episode_no: data != null ? data.episode_no : "",
            season: data != null ? data.season : "",
            episode_img: data != null ? data.episode_img : "",
            video_url: data != null ? data.video_url : "",
            description: data != null ? data.description : "",
          }}
          onSubmit={async (values) => {
            if (data) {
              dispatch(updateEpisode(values.anime, values));
              onClose(false);
            } else {
              dispatch(postEpisode(values.anime, values));
              onClose(false);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <ModalForm>
                <ModalHeading>Add a New Episode</ModalHeading>
                <FormField>
                  <Label htmlFor="anime">Anime</Label>
                  <Field name="anime" as={Input} type="text" />
                  <ErrorMessage name="anime" component={Error} />
                </FormField>
                <FormField>
                  <Label htmlFor="title">name</Label>
                  <Field name="title" as={Input} type="text" />
                  <ErrorMessage name="title" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="episode_no">episode</Label>
                  <Field name="episode_no" as={Input} type="number" />
                  <ErrorMessage name="episode_no" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="season">season</Label>
                  <Field name="season" as={Input} type="number" />
                  <ErrorMessage name="season" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="episode_img">Episode URL</Label>
                  <Field name="episode_img" as={Input} type="url" />
                  <ErrorMessage name="episode_img" component={Error} />
                </FormField>

                <FormField>
                  <Label htmlFor="video_url">video URL</Label>
                  <Field name="video_url" as={Input} type="url" />
                  <ErrorMessage name="video_url" component={Error} />
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

export default EpisodeModal;
