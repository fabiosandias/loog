import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { IUser } from "interfaces/IUser";
import { lightTheme } from "styles/themes/light.theme";
import { darkTheme } from "styles/themes/dark.theme";
import { IUserForm } from "interfaces/IUserForm";
import { IDefaultTheme } from "interfaces/IDefaultTheme";

interface AuthContextProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [theme, setTheme] = useState<IDefaultTheme>(
    sessionStorage.getItem("@App:theme") === "light" ? lightTheme : darkTheme
  );
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = async (user: IUserForm): Promise<void> => {
    if (
      user.email === process.env.REACT_APP_EMAIL &&
      user.password === process.env.REACT_APP_PASSWORD
    ) {
      const userLogged = {
        name: "Fabio Santos",
        email: "teste@teste.com.br",
      };
      setUser(userLogged);
      sessionStorage.setItem("@App:user", JSON.stringify(userLogged));
      setIsLogged(true);
    }
  };

  const logOut = async () => {
    sessionStorage.removeItem("@App:user");
    setIsLogged(false);
    window.location.href = `/`;
  };

  const toggleTheme = () => {
    sessionStorage.setItem(
      "@App:theme",
      theme.title === "dark" ? "light" : "dark"
    );
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  useEffect(() => {
    const storageUser = sessionStorage.getItem("@App:user");

    if (storageUser) {
      setIsLogged(true);
      setUser(JSON.parse(storageUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: isLogged,
        user,
        theme,
        login,
        logOut,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
