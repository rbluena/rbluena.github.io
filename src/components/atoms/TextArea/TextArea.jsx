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
  padding-left: ${props => props.theme.spacing.sm}px;
  width: calc(100% - ${props => props.theme.spacing.sm}px);
  padding-top: ${props => props.theme.spacing.sm}px;
`;

const Error = styled.div`
  display: block;
  font-size: ${props => props.theme.typography.size.sm}px;
  padding: ${props =>
    `${props.theme.spacing.xs}px ${props.theme.spacing.sm}px`};
  color: ${props => props.theme.color.red[100]};
`;

const Wrapper = styled.div`
  position: relative;
  border: ${props => props.theme.border.width.medium}px solid;
  border-color: ${props => props.theme.color.monochrome[200]};
`;

const TextArea = ({ id, label, value, error, onChange, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const errorId = `${id}-error`;
  const errorMessage = error;

  return (
    <>
      <Wrapper>
        <Label
          htmlFor={id}
          focused={focused}
          notEmpty={value && value.length > 0}
        >
          {label}
        </Label>
        <StyledTextArea
          id={id}
          name={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          aria-describedby={errorId}
        >
          {value}
        </StyledTextArea>
      </Wrapper>
      {errorMessage && errorMessage.length && (
        <Error id={errorId}>{errorMessage}</Error>
      )}
    </>
  );
};

export default TextArea;
