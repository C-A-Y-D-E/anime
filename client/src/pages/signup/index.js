import React from "react";
import {
  FormField,
  Form,
  Label,
  Input,
  FormHeading,
  FormMain,
  SignupNavigate,
  Error,
} from "../login/loginStyle";
import { ButtonLink, Button } from "../../globalStyles";
import { store } from "react-notifications-component";
import { signup } from "../../store/actions/user";
import * as Yup from "yup";
import { ErrorMessage, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const Signup = ({ location }) => {
  const dispatch = useDispatch();
  const { loading, isAuth, error } = useSelector((states) => states.user);
  const { state } = location;
  const signupSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").required("Name Required"),
    email: Yup.string().email("Invalid email").required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be 8 digit or greater!")
      .required("Password Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
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
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          dispatch(signup(values));
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormHeading>Signup</FormHeading>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Field name="name" as={Input} type="text" />
              <ErrorMessage name="name" component={Error} />
            </FormField>

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

            <FormField>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Field name="confirmPassword" as={Input} type="password" />
              <ErrorMessage name="confirmPassword" component={Error} />
            </FormField>

            <Button
              disabled={loading}
              style={{
                alignSelf: "start",
                marginTop: "2rem",
              }}
              white="true"
            >
              {loading ? "Signing..." : "Signup"}
            </Button>
          </Form>
        )}
      </Formik>

      <SignupNavigate>
        <h4>Have an Account?</h4>
        <ButtonLink to="/login" background="true" radius="50px" style={{}}>
          Login
        </ButtonLink>
      </SignupNavigate>
    </FormMain>
  );
};

export default Signup;
