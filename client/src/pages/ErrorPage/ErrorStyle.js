import styled from "styled-components";

export const ErrorContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-size: 5rem;
  user-select: none;
  background-image: ${({ media }) =>
    media
      ? `url(${media})`
      : `url('https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif)`};
`;

export const ErrorHeading = styled.h1`
  color: transparent;
  font-size: 6rem;
  margin: 0;
  -webkit-text-stroke: 2px white;
`;
