import React, { useState } from "react";
import axios from "axios";
import {
  FormField,
  Form,
  Label,
  Input,
  FormHeading,
  FormMain,
  SignupNavigate,
} from "../../pages/login/loginStyle";
import { ButtonLink, Button } from "../../globalStyles";
import { ErrorMessage, Formik, Field } from "formik";
import { store } from "react-notifications-component";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  return (
    <FormMain>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);

          axios
            .post(`/api/v1/users/resetpassword/${id}`, values)
            .then((res) => setLoading(false))
            .catch((err) => {
              store.addNotification({
                title: "Try Again",
                message: `${err.response.data.message}`,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 2000,
                  onScreen: true,
                },
                slidingExit: {
                  duration: 800,
                  timingFunction: "ease-out",
                  delay: 0,
                },
              });
              setLoading(false);
            });
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormHeading>Reset ?</FormHeading>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Resetting your password is easy. Enter your new password
            </p>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Field name="password" as={Input} type="password" />
              <ErrorMessage name="password" component={Error} />
            </FormField>
            <FormField>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Field name="confirmPassword" as={Input} type="confirmPassword" />
              <ErrorMessage name="confirmPassword" component={Error} />
            </FormField>

            <Button
              style={{
                alignSelf: "start",
                marginTop: "2rem",
                width: "100%",
              }}
              white="true"
              //   disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </Button>
          </Form>
        )}
      </Formik>

      <SignupNavigate>
        <h4>Did you remembered your password?</h4>
        <ButtonLink to="/login" background="true" radius="50px">
          Login
        </ButtonLink>
      </SignupNavigate>
    </FormMain>
  );
};

export default ResetPassword;
