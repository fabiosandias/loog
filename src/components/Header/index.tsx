import { FunctionComponent, useContext } from "react";
import { logoImageBase64 } from "utils/constants";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import useAuthContext from "hooks/UseAuthContext";
import {
  Container,
  HeaderContent,
  Logo,
  LogOutAndSwitch,
  SwitchBox,
  LogOutBox,
} from "components/Header/styles";

const Header: FunctionComponent = () => {
  const { colors } = useContext(ThemeContext);
  const { toggleTheme, theme, logOut, user } = useAuthContext();

  return (
    <>
      <Container>
        <HeaderContent>
          <Logo>
            <img src={logoImageBase64} alt="" />
          </Logo>
          <LogOutAndSwitch>
            <SwitchBox>
              <span>Light</span>
              <label>
                <Switch
                  onChange={() => toggleTheme()}
                  checked={theme.title === "light" ? false : true}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={15}
                  width={50}
                  handleDiameter={25}
                  offColor={shade(0.2, colors.primary)}
                  onColor={shade(0.2, colors.black)}
                />
              </label>
              <span>Dart</span>
            </SwitchBox>
            <LogOutBox>
              Olá, {user.name}
              <button onClick={logOut} type="button">
                Sair
              </button>
            </LogOutBox>
          </LogOutAndSwitch>
        </HeaderContent>
      </Container>
    </>
  );
};

export default Header;
