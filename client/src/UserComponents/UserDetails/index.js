import React from "react";
import {
  ImageUploadContainer,
  EditImage,
  UserName,
  UserDetailContainer,
  Image,
} from "./UserDetailsStyle";

import {
  FormField,
  Label,
  Input,
  InputUpload,
  Button,
  Form,
  Error,
} from "../../globalStyles";

import { Heading } from "../UserBookmarks/UserBookmarkStyle";

import { FiEdit2 } from "react-icons/fi";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { updateMe } from "../../store/actions/user";
import { css } from "styled-components/macro";
const UserDetail = ({ updateMe, user }) => {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .required("User Must have name")
      .min(3, "Name must be greater than 3 Character"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
  });
  return (
    <UserDetailContainer>
      <Heading style={{ border: "none" }}>Your Account Settings</Heading>
      <Formik
        enableReinitialize={true}
        validationSchema={userSchema}
        initialValues={{
          name: `${user.name}`,
          email: `${user.email}`,
          photo: `${user.photo}`,
        }}
        onSubmit={async (values) => {
          const formvalues = new FormData();
          formvalues.append("name", values.name);
          formvalues.append("email", values.email);
          formvalues.append("photo", values.photo);
          updateMe(formvalues);
        }}
      >
        {({ isSubmitting, handleSubmit, setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            css={`
              margin: 2rem 0 0 0;
              width: 100%;
            `}
          >
            <ImageUploadContainer>
              <Image alt="user" src={`public/img/users/${user.photo}`} />
              <EditImage htmlFor="photo">
                <FiEdit2
                  css={`
                    font-size: 1.5rem;
                    color: white;
                  `}
                />
                <InputUpload
                  name="photo"
                  id="photo"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
              </EditImage>
              <UserName>{user.name}</UserName>
            </ImageUploadContainer>

            <FormField>
              <Label>Name</Label>
              <Field name="name" as={Input} type="text" />
              <ErrorMessage name="name" component={Error} />
            </FormField>

            <FormField>
              <Label>Email</Label>
              <Field name="email" as={Input} type="email" />
              <ErrorMessage name="email" component={Error} />
            </FormField>

            <Button
              radius="true"
              background="true"
              disable={isSubmitting}
              css={`
                align-self: start;
                margin-top: 2rem;
              `}
              type="submit"
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </UserDetailContainer>
  );
};

const mapStateToProps = (states) => ({
  user: states.user.user,
});

export default connect(mapStateToProps, { updateMe })(UserDetail);
