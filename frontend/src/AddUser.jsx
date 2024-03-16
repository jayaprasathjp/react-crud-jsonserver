import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { ApiUrl2 } from "./ApiUrl.jsx";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
export default function AddUser({ userCall }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const handleSubmit = async () => {
    try{
    await axios.post(ApiUrl2, {
      name,
      roll,
    });

    alertify.success("Done bro");
    setName("");
    setRoll("");
    userCall();
  }catch(e){
    alertify.error("Failed bro");
  }
    setName("");
    setRoll("");
    userCall();
  };
  return (
    <div>
      <h2>ADD USER</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="form-control"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Roll</Form.Label>
          <input
            type="text"
            name="roll"
            onChange={(e) => {
              setRoll(e.target.value);
            }}
            value={roll}
            className="form-control"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="button">
          Submit
        </Button>
      </Form>
    </div>
  );
}
