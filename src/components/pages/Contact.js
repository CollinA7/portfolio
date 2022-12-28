import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbeizld",
        "template_mrznn1t",
        form.current,
        "8_q8L_dIDniQB3HBn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="container">
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="col-md-9">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="from_name" />
        </Form.Group>
        <Form.Group className="col-md-9">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="reply_to" />
        </Form.Group>
        <Form.Group className="col-md-9">
          <Form.Label>Message:</Form.Label>
          <Form.Label name="message" />
          <Form.Control type="test" name="message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </section>
  );
};

export default ContactMe;
