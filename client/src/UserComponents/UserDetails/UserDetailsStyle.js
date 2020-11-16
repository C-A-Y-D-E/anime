import styled from "styled-components";
import mediaQ from "../../mediaQueries";
export const UserDetailContainer = styled.div`
  width: 58rem;
  margin: 3rem auto;
  height: 60vh;
  ${mediaQ("lg")`
  width:40rem;
  `}
  ${mediaQ("md")`
  width:50%;
  `}
  ${mediaQ("sm")`
  width:90%;
  
  `}
`;

export const ImageUploadContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  align-self: flex-start;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 9rem;
  width: 9rem;
`;

export const EditImage = styled.label`
  position: absolute;
  background-color: var(--primary-color);
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  left: 72px;
  cursor: pointer;
`;
export const UserName = styled.h2`
  margin-left: 2rem;
`;
