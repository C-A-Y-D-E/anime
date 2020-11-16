import React from "react";
import {
  FormField,
  Form,
  Label,
  Input,
  FormHeading,
  FormMain,
  Forgot,
  SignupNavigate,
  Error,
} from "./loginStyle";
import { ButtonLink, Button } from "../../globalStyles";

import { login } from "../../store/actions/user";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { store } from "react-notifications-component";

import { Redirect } from "react-router-dom";

const Login = ({ location }) => {
  const dispatch = useDispatch();
  const { loading, isAuth, error } = useSelector((states) => states.user);
  const { state } = location;
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: Yup.string()
      .min(8, "Must be greater than 8")
      .required("Please enter your password"),
  });
  if (isAuth) {
    return <Redirect to={state ? state.from.pathname : "/"} />;
  }
  if (error) {
    store.addNotification({
      title: "Try Again",
      message: `${error}`,
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
  }

  return (
    <FormMain>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormHeading>Login</FormHeading>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Field name="email" as={Input} type="email" />
              <ErrorMessage name="email" component={Error} />
            </FormField>

            <FormField>
              <Label htmlFor="password">Password</Label>
              <Field name="password" as={Input} type="password" />
              <ErrorMessage name="password" component={Error} />
            </FormField>
            <Forgot to="/forgot-password">Forgot your password?</Forgot>

            <Button
              style={{
                alignSelf: "start",
              }}
              white="true"
              disabled={loading}
            >
              {loading ? "Logging..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>

      <SignupNavigate>
        <h4>Dont have an account?</h4>
        <ButtonLink to="/signup" background="true" radius="50px">
          Signup
        </ButtonLink>
      </SignupNavigate>
    </FormMain>
  );
};

export default Login;
