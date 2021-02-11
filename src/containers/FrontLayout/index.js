import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { FrontNavbar } from '../../components';

const FrontLayout = ({ children }) => {
  return (
    <Container className="px-0">
      <FrontNavbar />
      {children}
    </Container>
  )
}

FrontLayout.propTypes = {
  children: PropTypes.any
}

export default React.memo(FrontLayout);