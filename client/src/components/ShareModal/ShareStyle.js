import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQ from "../../mediaQueries";
export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const CancelModal = styled.span`
  position: absolute;
  height: 3rem;
  width: 3rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  right: 1.5rem;
  top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & span {
    height: 2px;
    width: 1.5rem;
    background-color: #fff;
    display: inline-block;
    position: absolute;
    &:first-of-type {
      transform: rotate(-45deg);
    }
    &:last-of-type {
      transform: rotate(45deg);
    }
  }
`;

export const ModalContent = styled.div`
  max-width: 58rem;
  width: 50vw;
  padding: 3rem 5rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background: #fff;
  position: relative;
  z-index: 9999;
  ${mediaQ("lg")`
    width:70vw;
  `}

  ${mediaQ("sm")`
    width:90vw;
    padding: 2rem;
  `}
`;
export const ModalListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalItem = styled.a`
  border-radius: 50%;
  border: 1px solid #dadada;
  height: 5rem;
  width: 5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  color: #000;

  &::visited,
  &::active {
    color: currentColor;
  }

  &:hover {
    transform: translatey(-5px);
  }

  ${mediaQ("xs")`
    height: 4rem;
  width: 4rem;
  `}
`;

export const CopyLink = styled.div`
  margin-top: 2rem;
  position: relative;

  & input {
    ${mediaQ("sm")`
    font-size:1.2rem;
  `}
    ${mediaQ("xs")`
    font-size:.8rem;
  `}
  }
  & span {
    ${mediaQ("sm")`
    bottom:12px;
    font-size:1.5rem;
  `}
    ${mediaQ("xs")`
    bottom:10px;
    font-size:1rem;
  `}
  }
`;
