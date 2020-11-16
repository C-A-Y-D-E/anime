import React from "react";
import { ButtonLink } from "../../globalStyles";
import { ErrorContainer, ErrorHeading } from "./ErrorStyle";
const ErrorPage = ({ status }) => {
  const renderError = (status) => {
    switch (status) {
      case 400:
        return (
          <ErrorContainer media="https://media.giphy.com/media/l3q2K5jinAlChoCLS/source.gif">
            <ErrorHeading>400</ErrorHeading>
            <span>Bad Request</span>
          </ErrorContainer>
        );

      case 500:
        return (
          <ErrorContainer media="https://media.giphy.com/media/zyclIRxMwlY40/source.gif">
            <ErrorHeading>500</ErrorHeading>
            <span>Internal Server Error</span>
          </ErrorContainer>
        );
      case 403:
        return (
          <ErrorContainer media="https://media.giphy.com/media/l2Je3CjIvDr0X2yn6/source.gif">
            <ErrorHeading>403</ErrorHeading>
            <span>Forbidden</span>
          </ErrorContainer>
        );

      default:
        return (
          <ErrorContainer media="https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif">
            <ErrorHeading>404</ErrorHeading>
            <span>Page Not Found</span>
          </ErrorContainer>
        );
    }
  };

  return (
    <>
      {renderError(status)}
      <ButtonLink to="/">Go To Home</ButtonLink>
    </>
  );
};

export default ErrorPage;
