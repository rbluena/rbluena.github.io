import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const Details = styled.div``;
const Heading = styled.h2``;
const Subheading = styled.h3``;
const Description = styled.p``;

const Item = ({ data }) => {
  return (
    <Wrapper>
      <a href={data.companyUrl}>
        <img className="" alt="company" />
      </a>
      <Details>
        <Heading>{data.company}</Heading>
        <Subheading>
          {data.from}-{data.to}
        </Subheading>
        <Description>{data.description && data.description}</Description>
      </Details>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Item;
