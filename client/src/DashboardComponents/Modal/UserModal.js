import React from "react";
import { ModalContainer } from "../../components/ShareModal/ShareStyle";
import { ErrorMessage, Formik, Field } from "formik";
import { updateUser } from "../../store/actions/dashboard";
import { signup } from "../../store/actions/user";
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

const UserModal = ({ onClose, data }) => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <ModalContent>
        <Formik
          initialValues={{
            name: data != null ? data.name : "",
            email: data != null ? data.email : "",
            role: data != null ? data.role : "",
            password: data != null ? data.password : "",
            confirmPassword: data != null ? data.confirmPassword : "",
          }}
          onSubmit={async (values) => {
            if (data) {
              dispatch(updateUser(data._id, values));
            } else {
              dispatch(signup(values));
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <ModalForm>
                <ModalHeading>Create a User</ModalHeading>
                <FormField>
                  <Label htmlFor="name">name</Label>
                  <Field name="name" as={Input} type="text" />
                  <ErrorMessage name="name" component={Error} />
                </FormField>
                <FormField>
                  <Label htmlFor="email">email</Label>
                  <Field name="email" as={Input} type="email" />
                  <ErrorMessage name="email" component={Error} />
                </FormField>

                {data && (
                  <FormField>
                    <Label htmlFor="role">role</Label>
                    <Field name="role" as={Input} type="text" />
                    <ErrorMessage name="role" component={Error} />
                  </FormField>
                )}

                {!data && (
                  <FormField>
                    <Label htmlFor="password">Password</Label>
                    <Field name="password" as={Input} type="password" />
                    <ErrorMessage name="password" component={Error} />
                  </FormField>
                )}

                {!data && (
                  <FormField>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Field name="confirmPassword" as={Input} type="password" />
                    <ErrorMessage name="confirmPassword" component={Error} />
                  </FormField>
                )}
              </ModalForm>
              <ModalAction>
                <Cancel onClick={() => onClose(false)}>
                  <h3>Cancel</h3>
                </Cancel>
                <Create type="submit">
                  <h3>Create</h3>
                </Create>
              </ModalAction>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalContainer>
  );
};

export default UserModal;
