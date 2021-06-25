import { FunctionComponent } from "react";
import Header from "components/Header";
import { Grid } from "components/layout/Styles";
import Content from "components/content";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Grid>
        <Header />
        <Content>{children}</Content>
      </Grid>
    </>
  );
};

export default Layout;
