import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../containers';

const Login = () => {
  return (
    <AuthLayout>
      <Card>
        <Card.Header>Welcome to KeepNotes World's</Card.Header>
        <Card.Body>
          <Form>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              Ensure your account is exist before!
            </Card.Text>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="your@mail.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <Button type="submit" variant="dark">Submit</Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">You're new member? Please register <Link to="/register">here</Link>!</small>
        </Card.Footer>
      </Card>
    </AuthLayout>
  )
}

export default Login;