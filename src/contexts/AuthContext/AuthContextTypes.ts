import { IDefaultTheme } from "interfaces/IDefaultTheme";
import { IUser } from "interfaces/IUser";
import { IUserForm } from "interfaces/IUserForm";

export interface AuthContextType {
  signed: boolean;
  user: IUser;
  theme: IDefaultTheme;
  login(user: IUserForm): Promise<void>;
  logOut: () => void;
  toggleTheme: () => void;
}
