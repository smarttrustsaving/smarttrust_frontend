import axios from "../client/axios";
import { useState } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { loggedIn } from "../client/hocs/redirects";
import Joi from "joi";

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const Admin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /*
    
    
    
    
    
   
   
  */
  const inputHandler = ({ target: { name, value } }) => {
    let newState = { ...state };
    newState[name] = value;

    setState(newState);
  };

  /**
   *
   *
   */
  const loginHandler = () => {
    setLoading(true);

    const { error } = schema.validate(state);
    if (error) {
      setError(error.details[0].message);
      setLoading(false);
      return;
    }

    axios
      .post(`/auth/login`, { ...state }, { withCredentials: true })
      .then((_) => {
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  /*
    
    
    
    
    
   
   
  */
  return (
    <Container className="py-5 my-5">
      {error ? <Alert variant="warning">{error}</Alert> : null}

      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={inputHandler}
          type="text"
          placeholder="Enter username"
          name="username"
        />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={inputHandler}
          type="password"
          placeholder="Password"
          name="password"
        />
      </Form.Group>

      <Button onClick={loginHandler} variant="primary" type="submit">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div>Login</div>
        )}
      </Button>
    </Container>
  );
};

export default loggedIn(Admin);
