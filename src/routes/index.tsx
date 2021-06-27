import useAuthContext from "hooks/UseAuthContext";
import { BrowserRouter } from "react-router-dom";
import SignRoutes from "./auth.router";
import AppRoutes from "./app.router";

const Routes = () => {
  const { signed } = useAuthContext();
  return (
    <BrowserRouter>{!signed ? <SignRoutes /> : <AppRoutes />}</BrowserRouter>
  );
};
export default Routes;
