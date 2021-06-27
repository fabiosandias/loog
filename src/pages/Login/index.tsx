import { logoImageBase64 } from "utils/constants";
import { Container, BoxLogin, BoxImg } from "pages/Login/styles";
import React, { useState } from "react";
import useAuthContext from "hooks/UseAuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState<string>("teste@teste.com.br");
  const [password, setPassword] = useState<string>("123");

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <BoxLogin>
        <BoxImg>
          <img src={logoImageBase64} alt="" />
        </BoxImg>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              onChange={handleChangeEmail}
              value={email}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              onChange={handleChangePassword}
              value={password}
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </BoxLogin>
    </Container>
  );
};

export default Login;
