import { FunctionComponent } from "react";
import { Container } from "components/content/styles";

const Content: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
