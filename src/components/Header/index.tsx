import { FunctionComponent } from "react";
import { logoImageBase64 } from "utils/constants";
import Switch from "react-switch";

import {
  Container,
  HeaderContent,
  Logo,
  LogOutAndSwitch,
  SwitchBox,
  LogOutBox,
} from "./styles";

const Header: FunctionComponent = () => (
  <>
    <Container>
      <HeaderContent>
        <Logo>
          <img src={logoImageBase64} alt="" />
        </Logo>
        <LogOutAndSwitch>
          <SwitchBox>
            <label>
              <Switch onChange={() => {}} checked={true} />
            </label>
          </SwitchBox>
          <LogOutBox>
            <button type="button">Sair</button>
          </LogOutBox>
        </LogOutAndSwitch>
      </HeaderContent>
    </Container>
  </>
);

export default Header;
