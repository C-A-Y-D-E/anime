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
import { useSelector } from "react-redux";
import { ButtonLink, Button } from "../../globalStyles";
import { ErrorMessage, Formik, Field } from "formik";
import { store } from "react-notifications-component";
import { Redirect } from "react-router-dom";
const ForgotPassword = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const { isAuth } = useSelector((states) => states.user);

  const { state } = location;
  if (isAuth) {
    return <Redirect to={state ? state.from.pathname : "/"} />;
  }
  return (
    <FormMain>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);

          axios
            .post("/api/v1/users/forgotpassword", values)
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
            <FormHeading>Forgot ?</FormHeading>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Don’t worry! Resetting your password is easy. just type your email
              you registered
            </p>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Field name="email" as={Input} type="email" />
              <ErrorMessage name="email" component={Error} />
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

export default ForgotPassword;
