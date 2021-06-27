import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxLogin = styled.div`
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 20px;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > label > input {
      padding: 15px;
      width: 100%;
      margin-bottom: 20px;
    }
    > button {
      padding: 15px;
      width: 100%;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      font-size: 20px;
      border: none;
    }
  }
`;

export const BoxImg = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 80px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 80px;
    height: 50px;
  }
`;
