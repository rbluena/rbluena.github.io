import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Paragraph = styled.p``;

const Heading = styled.h1``;

const Subheading = styled.h2`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fonts.size.h2};
`;

const Text = ({ children }) => <Paragraph>{children}</Paragraph>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Text.Heading = ({ children }) => <Heading>{children}</Heading>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Text.Subheading = ({ children }) => <Subheading>{children}</Subheading>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
