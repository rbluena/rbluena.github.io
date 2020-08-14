import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Section = styled.section``;

const Heading = styled.h1``;
const Content = styled.div``;

const ContentSection = ({ title, children }) => {
  return (
    <Section>
      {title && <Heading>{title}</Heading>}
      <Content>{children}</Content>
    </Section>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ContentSection;
