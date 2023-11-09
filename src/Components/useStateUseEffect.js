import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function useStateUseEffect() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Data, setData] = useState([]);
  console.log("Data: ", Data);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email,
      Password
    };
    setData(data);
  };

  useEffect(() => {
    console.log("Test");
    setTimeout(() => {
      if (Data) {
        if (Data.Email === "ezhil@gmail.com") {
          console.log("Test 1");
          alert("Welcome Admin ");
        } else if (Data.Email) {
          console.log("Test 2");
          alert(`Welcome ${Data.Email}`);
        }
      }
    }, 3000);
  }, [Data]);

  return (
    <div className=" position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-center align-items-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>

      <div className="p-5">
        <p>{Email}</p>
        <p>{Password}</p>
      </div>
    </div>
  );
}

export default useStateUseEffect;