import React, { useState } from "react";
import styled from "styled-components";
import { SectionBox, ContactForm, Text } from "@app-components";

const FormSection = styled(SectionBox)`
  /* position: relative; */
`;

const FormContainer = styled.div`
  /* min-width: 550px; */
  max-width: 600px;
`;

const SuccessMessage = styled(Text).attrs({ size: "large", success: true })`
  color: ${props => props.theme.color.monochrome[800]};
`;

const ContactMe = () => {
  const [success, setSuccess] = useState(false);

  /**
   * Submitting form to the API endpoint
   *
   * @param {Object} data
   */
  async function handleSubmit(data) {
    setSuccess(false);

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
    } catch (error) {}
  }

  return (
    <FormSection title="Write Direct">
      <FormContainer>
        {success && (
          <SuccessMessage>
            Thank you for reaching me out, will get back to you soon.
          </SuccessMessage>
        )}
        <br />
        <ContactForm handleSubmit={handleSubmit} />
      </FormContainer>
    </FormSection>
  );
};

export default ContactMe;
