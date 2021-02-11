import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { FrontLayout } from '../../containers';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <FrontLayout>
      <Jumbotron>
        <h1>Problem With Notes?</h1>
        <p>
          Keep your notes, make your sigthly with <strong>KeepNotes</strong> by Serlina Utami
        </p>
        <p>
          <Link to="/login">
            <Button variant="dark">Try out!</Button>
          </Link>
        </p>
      </Jumbotron>
    </FrontLayout>
  )
}

export default Home;