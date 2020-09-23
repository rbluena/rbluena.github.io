import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  font-size: 110%;
  color: ${props => props.theme.color.monochrome[300]};
  padding-top: ${props => props.theme.spacing.sm}px;
  padding-left: ${props => props.theme.spacing.sm}px;
  transition: all 0.2s;

  ${props =>
    (props.focused || props.notEmpty) &&
    `
    font-size: 75%;
    padding-top: ${props.theme.spacing.xxs}px;
  `}
`;

const StyledTextArea = styled.textarea.attrs({ rows: 10 })`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  resize: none;
  background: transparent;
  padding-left: ${props => props.theme.spacing.sm}px;
  width: calc(100% - ${props => props.theme.spacing.sm}px);
  padding-top: ${props => props.theme.spacing.sm}px;
`;

const Error = styled.div`
  display: block;
  font-size: ${props => props.theme.typography.size.sm}px;
  padding: ${props => `${props.theme.spacing.xs}px 0`};
  color: ${props => props.theme.color.red[100]};
`;

const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border: ${props => props.theme.border.width.medium}px solid;
  border-color: ${props => props.theme.color.monochrome[200]};
`;

const TextArea = ({ name, label, value, error, onChange, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const errorId = `${name}-error`;
  const errorMessage = error;

  return (
    <>
      <Wrapper>
        <Label
          htmlFor={name}
          focused={focused}
          notEmpty={value && value.length > 0}
        >
          {label}
        </Label>
        <StyledTextArea
          id={name}
          name={name}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          aria-describedby={errorId}
          value={value}
        />
      </Wrapper>
      <Error id={errorId}>{errorMessage}</Error>
    </>
  );
};

TextArea.defaultProps = {
  value: "",
  error: null,
  onChange: () => {},
};

TextArea.propTypes = {
  /** Unique identifier for a form input.  */
  name: PropTypes.string.isRequired,

  /** Label for a form input. */
  label: PropTypes.string.isRequired,

  /** Value of a form input. */
  value: PropTypes.string,

  /** Error message from user. */
  error: PropTypes.string,

  /** Change handler of a form input. */
  onChange: PropTypes.func,
};

export default TextArea;
