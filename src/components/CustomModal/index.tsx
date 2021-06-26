import React from "react";

import { Container, ModalButtons, ModalContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
  showModal: boolean;
  index: number;
  handleModal: (showModal: boolean, index: number) => void;
}
const CustomModal = ({ showModal, index, handleModal, children }: IProps) => {
  return (
    <Container className={`modal ${showModal ? "active" : ""}`}>
      <ModalContainer>
        <h2>Titulo</h2>
        {children}
        <ModalButtons>
          <button type="button" onClick={() => handleModal(false, index)}>
            Fechar
          </button>
        </ModalButtons>
      </ModalContainer>
    </Container>
  );
};

export default CustomModal;
