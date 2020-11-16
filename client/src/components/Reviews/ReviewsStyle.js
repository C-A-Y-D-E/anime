import styled from "styled-components";
import { motion } from "framer-motion";
export const UserImage = styled.img`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  margin-right: 2rem;
`;
export const Name = styled.h3`
  font-size: 1.5rem;
`;
export const ReviewHeading = styled.h3`
  display: inline-block;
  font-size: 3rem;
  border-bottom: 0.8rem solid var(--primary-color);
`;

export const ReviewListContainer = styled.div`
  margin: 2rem 0;
`;
export const ReviewList = styled.div``;
export const ReviewItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Review = styled.p`
  font-size: 1.5rem;
`;
export const ReviewActions = styled.div`
  font-size: 2rem;
  margin-left: auto;
  color: var(--primary-color);
`;
