import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../containers';

const Register = () => {
  return (
    <AuthLayout>
      <Card>
        <Card.Header>Welcome to KeepNotes World's</Card.Header>
        <Card.Body>
          <Form>
            <Card.Title>Register</Card.Title>
            <Card.Text>
              Fill your register form and become a member of KeepNotes today!
            </Card.Text>
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="your@mail.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Verify password</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="dark">Submit</Button>
            </Form.Group>
            <small className="text-muted">By creating an account, you agree to the Terms of Service. For more information about KeepNotes's privacy practices, see the KeepNotes Privacy Statement. We'll occasionally send you account-related emails.</small>
          </Form>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">You're member? Please login <Link to="/login">here</Link>!</small>
        </Card.Footer>
      </Card>
    </AuthLayout>
  )
}

export default Register;