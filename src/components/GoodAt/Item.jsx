import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const Heading = styled.h3``;
const Description = styled.p``;

const Item = ({ data }) => {
  return (
    <Wrapper>
      <Heading>{data.title && data.title}</Heading>
      <Description>{data.description && data.description}</Description>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Item;
