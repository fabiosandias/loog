import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
`;
export const HomeHeader = styled.div`
  width: 1000px;
  height: 100px;
  display: flex;
`;

export const SelectSearch = styled.div`
  width: 350px;
  height: 60px;
  margin-right: 30px;

  > select {
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 20px;
    font-size: 20px;
    width: 100%;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const InputSearch = styled.div`
  width: calc(100% - 380px);
  height: 60px;

  > input {
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 20px;
    font-size: 20px;
    width: 100%;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const HomeContent = styled.div`
  width: 1000px;
`;

export const HomeContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > button {
    background: ${(props) => props.theme.colors.primary};
    padding: 10px 50px;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 30px;
  }
`;
