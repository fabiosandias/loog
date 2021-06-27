import Login from "pages/Login";
import { Route, Switch } from "react-router-dom";

const AuthRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={Login} />
  </Switch>
);

export default AuthRouter;
