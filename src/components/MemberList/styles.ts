import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
    border: 1px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
    padding: 5px 5px 5px 30px;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

export const Oranization = styled.div`
  flex: 1;
`;

export const Username = styled.div`
  flex: 1;
`;

export const LinkGitHub = styled.a`
  flex: 1;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
`;
export const ButtonView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px 0 0;

  > button {
    width: 30px;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    border: none;

    height: 30px;
    font-size: 22px;
  }
`;

export const UserDetail = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding-top: 30px;
`;
export const BoxLeft = styled.div`
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.colors.primary};

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }
`;
export const BoxRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  span {
    color: ${(props) => props.theme.colors.black};
    text-align: left;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;

    > span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
