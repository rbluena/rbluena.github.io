import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InputText, TextArea, Button } from "@app-components";
import { useState } from "react";

/**
 *
 * @param {String} email
 */
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.sm}px;
`;

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  /**
   * Form submitted
   *
   * @param {Object} evt
   */
  function onSubmit(evt) {
    evt.preventDefault();
    setError("");

    // Handling errors
    if (name.length === 0) {
      setError({ name: "Name cannot be empty." });
      return;
    }

    if (email.length === 0) {
      setError({ email: "Email cannot be empty." });
      return;
    }

    if (!validateEmail(email)) {
      setError({ email: "You have entered invalid email." });
      return;
    }

    if (description.length === 0) {
      setError({ description: "Description cannot be empty." });
      return;
    }

    // Submiting data
    handleSubmit({
      name,
      email,
      description,
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <InputText
          id="name"
          label="Enter Fullname"
          value={name}
          onChange={evt => setName(evt.target.value)}
          error={(error && error.name && error.name) || ""}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          id="email"
          label="Enter Email"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          error={(error && error.email && error.email) || ""}
        />
      </FormGroup>
      <FormGroup>
        <TextArea
          id="description"
          label="Tell me some good news!"
          value={description}
          onChange={evt => setDescription(evt.target.value)}
          error={(error && error.description && error.description) || ""}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" dark large wide>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
