import Layout from "components/layout";
import Home from "pages/Home";
import { Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>
);

export default AppRouter;
