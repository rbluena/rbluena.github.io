import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InputText, Button } from "@app-components";

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.sm}px;
`;

const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <InputText id="fullname" label="Fullname" />
      </FormGroup>
      <FormGroup>
        <InputText id="email" label="Your Email" />
      </FormGroup>
      <FormGroup>
        <Button type="submit" dark large wide>
          Send
        </Button>
      </FormGroup>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
