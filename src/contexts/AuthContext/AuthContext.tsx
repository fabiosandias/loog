import { createContext } from "react";
import { AuthContextType } from "./AuthContextTypes";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
