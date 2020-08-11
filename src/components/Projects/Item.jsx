import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const Heading = styled.h3``;
const Details = styled.div``;
const Description = styled.p``;

const Item = ({ data }) => {
  return (
    <Wrapper>
      <img className="" alt="some" />
      <Details>
        <Heading>{data.title}</Heading>
        <Description>{data.description}</Description>
      </Details>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Item;
