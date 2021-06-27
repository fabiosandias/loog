import { useContext } from "react";

import { AuthContextType } from "contexts/AuthContext/AuthContextTypes";
import { AuthContext } from "contexts/AuthContext/AuthContext";

const useAuthContext = () => {
  return useContext<AuthContextType>(AuthContext);
};

export default useAuthContext;
