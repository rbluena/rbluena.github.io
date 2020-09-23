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

const Input = styled.input.attrs({ type: "text" })`
  border: 0px;
  appearance: none;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  padding: 0px;
  padding-top: ${props => props.theme.spacing.xxs}px;
  height: calc(100% - ${props => props.theme.spacing.xxs}px);
  padding-left: ${props => props.theme.spacing.sm}px;
  width: calc(100% - ${props => props.theme.spacing.sm}px);
  background-clip: padding-box;
  font-size: 110%;
`;

const Error = styled.div`
  display: block;
  font-size: ${props => props.theme.typography.size.sm}px;
  padding: ${props => props.theme.spacing.xs}px 0;
  color: ${props => props.theme.color.red[100]};
`;

const Wrapper = styled.div`
  background-color: white;
  position: relative;
  border: ${props => props.theme.border.width.medium}px solid;
  border-color: ${props => props.theme.color.monochrome[200]};
  height: 50px;
  padding: 0;
  margin: 0;

  ${Input} {
    &:focus {
    }
  }
`;

const InputText = ({ name, label, value, error, onChange, ...rest }) => {
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
        <Input
          id={name}
          name={name}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          aria-describedby={errorId}
          {...rest}
        />
      </Wrapper>
      <Error id={errorId}>{errorMessage}</Error>
    </>
  );
};

InputText.defaultProps = {
  value: "",
  error: null,
  onChange: () => {},
};

InputText.propTypes = {
  /** Unique identifier for a form input.  */
  name: PropTypes.string.isRequired,

  /** Label for a form input. */
  label: PropTypes.string.isRequired,

  /** Value for a form input. */
  value: PropTypes.string,

  /** Error message from user interacting with form input. */
  error: PropTypes.string,

  /** Change handler for a form input. */
  onChange: PropTypes.func,
};

export default InputText;
