import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h3 className="text-center">React Tutorial Notes</h3>
      <Container className="p-5 d-flex gap-3">
        <span>
          <Link to={"/api"} target="_blank">
            <Button variant="dark">API</Button>
          </Link>
        </span>
        <span>
          <Link to={"/useState-useEffect"} target="_blank">
            <Button variant="dark">Hooks uS/uE</Button>
          </Link>
        </span>
        <span>
          <Link to={"/transition"} target="_blank">
            <Button variant="dark">Transition</Button>
          </Link>
        </span>
        <span>
          <Link to={"/animation"} target="_blank">
            <Button variant="dark">Animation</Button>
          </Link>
        </span>
        <span>
          <Link to={"/event-handling"} target="_blank">
            <Button variant="dark">Event Handling</Button>
          </Link>
        </span>
      </Container>
    </div>
  );
};

export default Home;
