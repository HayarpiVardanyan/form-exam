import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h4>Welcome to My Website!</h4>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button as={Link} to="/login" variant="success" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button as={Link} to="/registration" variant="success">
          Registration
        </Button>
        <Link to="/userList"></Link>
      </div>
    </Container>
  );
}

export default Home;