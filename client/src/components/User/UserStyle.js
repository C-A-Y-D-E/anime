import styled from "styled-components";
import { FiMinus } from "react-icons/fi";
export const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Bookmark = styled.div`
  width: 100%;
`;

export const BookmarkItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
`;

export const BookmarkImage = styled.<ButtonLink`
  border: none;
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
`;

export const BookmarkHeading = styled.h4`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const BookmarkDelete = styled(FiMinus)`
  margin-left: auto;
  margin-right: 1rem;
`;
