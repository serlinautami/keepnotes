import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={6} className="pt-5">
          {children}
        </Col>
      </Row>
    </Container>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any
};
AuthLayout.defaultProps = {
  children: null
};

export default React.memo(AuthLayout);