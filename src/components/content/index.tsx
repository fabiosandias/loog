import React, { FunctionComponent } from 'react';

import { Container } from './styles';

const Content: FunctionComponent = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Content;