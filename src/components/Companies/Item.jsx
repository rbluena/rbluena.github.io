import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/assets/Typography";

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.div`
  img {
    max-width: 140px;
  }
`;

const Details = styled.div``;

const Item = ({ data }) => {
  const image = require(`../../images/${data.image}`);

  return (
    <Wrapper>
      <Image>
        <a href={data.companyUrl}>
          <img src={image} className="" alt={`${data.company}`} />
        </a>
      </Image>
      <Details>
        <Text size="heading">{data.company}</Text>
        <Text size="subheading">
          {data.from}-{data.to}
        </Text>
      </Details>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Item;
