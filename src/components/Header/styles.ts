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
  width: 180px;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
export const SwitchBox = styled.div`
  width: 50px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogOutBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
