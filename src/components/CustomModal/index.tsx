import React from "react";

import { Container, ModalButtons, ModalContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
  showModal: boolean;
  handleModal: (showModal: boolean) => void;
}
const CustomModal = ({ showModal, handleModal, children }: IProps) => {
  return (
    <Container className={`modal ${showModal ? "active" : ""}`}>
      <ModalContainer>
        <h2>Detalhe do usuário</h2>
        {children}
        <ModalButtons>
          <button type="button" onClick={() => handleModal(false)}>
            Fechar
          </button>
        </ModalButtons>
      </ModalContainer>
    </Container>
  );
};

export default CustomModal;
