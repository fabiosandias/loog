import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 8;

  > .modal-container {
  }

  &.active {
    display: flex;
  }
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 16px 24px;
  width: 600px;

  > & h2 {
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;
  }
`;

export const ModalButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  width: 100%;

  > button {
    background: ${(props) => props.theme.colors.primary};
    border: none;

    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    line-height: 24px;
    margin-left: 16px;
    padding: 10px 20px;
  }
`;
