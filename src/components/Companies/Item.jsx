import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@app-components/Text";

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
        <Text.Heading>{data.company}</Text.Heading>
        <Text.Subheading>
          {data.from}-{data.to}
        </Text.Subheading>
        {/* <Text>{data.type}</Text> */}
      </Details>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Item;
