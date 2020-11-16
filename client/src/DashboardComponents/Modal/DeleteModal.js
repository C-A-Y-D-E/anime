import React from "react";
import { ModalContainer } from "../../components/ShareModal/ShareStyle";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { css } from "styled-components/macro";
import {
  ModalContent,
  ModalAction,
  Create,
  Cancel,
  ModalForm,
  ModalHeading,
  ModalFormContent,
} from "./ModalStyle";

const modalRoot = document.querySelector("#modal-root");
const DeleteModal = ({ onClose, name, id, deleteItem }) => {
  const dispatch = useDispatch();
  const deleteData = () => {
    dispatch(deleteItem(id));
    onClose(false);
  };
  return createPortal(
    <ModalContainer>
      <ModalContent>
        <ModalForm>
          <ModalHeading
            css={`
              margin: 0;
              font-size: 2.5rem;
            `}
          >
            Delete for all eternity
          </ModalHeading>
          <ModalFormContent>
            <h4>
              <span
                css={`
                  color: red;
                `}
              >
                WARNING
              </span>{" "}
              :This action CANNOT be undone{" "}
            </h4>
            <div>
              <span
                css={`
                  text-transform: uppercase;
                `}
              >
                {name}
              </span>{" "}
              will be permanently deleted
            </div>
          </ModalFormContent>
        </ModalForm>
        <ModalAction>
          <Cancel onClick={() => onClose(false)}>
            <h3>Cancel</h3>
          </Cancel>
          <Create onClick={deleteData}>
            <h3>Delete</h3>
          </Create>
        </ModalAction>
      </ModalContent>
    </ModalContainer>,
    modalRoot
  );
};

export default DeleteModal;
