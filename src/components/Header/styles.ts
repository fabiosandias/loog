import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;
export const HeaderContent = styled.div`
  width: 1000px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  width: 100px;
  height: 70px;
  > img {
    width: 100px;
    height: 70px;
  }
`;

export const LogOutAndSwitch = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
export const SwitchBox = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    margin: 10px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
`;
export const LogOutBox = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > button {
    font-size: 15px;
    border: none;
    color: ${(props) => props.theme.colors.white};
    background: none;
    margin-top: 10px;
  }
`;
