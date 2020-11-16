import React from "react";
import { css } from "styled-components/macro";

import { createPortal } from "react-dom";
import {
  ModalContainer,
  ModalContent,
  ModalListContainer,
  ModalItem,
  CopyLink,
  CancelModal,
} from "./ShareStyle";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { Input, FormHeading } from "../../globalStyles";
const modalRoot = document.querySelector("#modal-root");
const text = "Watch Anime Ads FREE!!";
const ShareModal = ({ link, onClose }) => {
  const copy = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    let text = document.querySelector("#copy");
    let copytext = document.querySelector("#copied-text");

    try {
      await navigator.clipboard.writeText(text.value);
      copytext.textContent = "Copied to clipboard";
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return createPortal(
    <ModalContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <ModalContent>
        <FormHeading
          css={`
            margin: 0 0 2rem 0;
            font-size: 2rem;
            border-bottom: none;
          `}
        >
          Share Anime
        </FormHeading>
        <CancelModal onClick={onClose}>
          <span></span>
          <span></span>
        </CancelModal>
        <ModalListContainer>
          <ModalItem
            href={`https://www.facebook.com/sharer.php?u=${link}`}
            target="_blank"
            style={{ color: "blue" }}
          >
            <FaFacebook />
          </ModalItem>
          <ModalItem
            href={`https://twitter.com/intent/tweet?text=${link}.
            &hashtags=anime,watch,free`}
            target="_blank"
            style={{ color: "#0C85D0" }}
          >
            <FaTwitter />
          </ModalItem>
          <ModalItem
            href={`https://plus.google.com/share?url=${link}`}
            target="_blank"
            style={{ color: "#D62516" }}
          >
            <FaGooglePlusG />
          </ModalItem>
          <ModalItem
            href={`https://api.whatsapp.com/send?text=${text}%0A${link}`}
            target="_blank"
            style={{ color: "#27851A" }}
          >
            <FaWhatsapp />
          </ModalItem>
          <ModalItem
            href={`https://t.me/share/url?url=${link}&text=${text}`}
            target="_blank"
            style={{ color: "#28A8E9" }}
          >
            <FaTelegramPlane />
          </ModalItem>
        </ModalListContainer>

        <CopyLink>
          <p style={{ marginBottom: "1rem" }}>Or copy link</p>
          <Input id="copy" value={link} readOnly />
          <span
            onClick={copy}
            css={`
              position: absolute;
              right: 10px;
              bottom: 15px;
              font-size: 1.5rem;
              color: var(--primary-color);
              cursor: pointer;
            `}
          >
            Copy
          </span>
        </CopyLink>
        <span id="copied-text"></span>
      </ModalContent>
    </ModalContainer>,
    modalRoot
  );
};

export default ShareModal;
