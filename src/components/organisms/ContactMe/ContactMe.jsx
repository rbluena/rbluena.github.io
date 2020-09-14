import React, { useState } from "react";
import styled from "styled-components";
import { SectionBox, ContactForm, Text } from "@app-components";

const FormSection = styled(SectionBox)``;

const FormContainer = styled.div`
  /* min-width: 550px; */
  max-width: 600px;
`;

const Message = styled(Text).attrs({ size: "large", success: true })`
  color: ${props =>
    props.type === "success"
      ? props.theme.color.monochrome[100]
      : props.theme.color.red[200]};

  text-align: center;
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.medium}px;
`;

const ContactMe = () => {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  /**
   * Submitting form to the API endpoint
   *
   * @param {Object} data
   */
  async function handleSubmit(data) {
    setSuccess(false);
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch(
        `https://getform.io/f/3c5f58f9-0634-490a-b293-0e5b76a8692c`,
        {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const { status } = await response;

      if (status === 200) {
        setSuccess(true);
      }

      setIsSubmitting(false);

      return success;
    } catch (error) {
      setIsSubmitting(false);
      setApiError(
        "There was un error submitting you request, can you try again again!"
      );
      return false;
    }
  }

  return (
    <FormSection title="Write Direct">
      <FormContainer>
        <Message type={success ? "success" : "error"}>
          {success &&
            "Thank you for reaching me out, will get back to you soon."}
          {apiError && apiError.length && apiError}
        </Message>

        <br />
        <ContactForm
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          disableSubmit={isSubmitting}
        />
      </FormContainer>
    </FormSection>
  );
};

export default ContactMe;
