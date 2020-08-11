import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Item from "./Item";

import tags from "@app-data/tags";

const Wrapper = styled.section``;
const Heading = styled.h2``;
const Content = styled.div``;

const GoodAt = () => {
  const { data } = tags;
  return (
    <Wrapper>
      <Heading>Good At</Heading>
      <Content>
        {Object.keys(data).map(key => {
          return <Item key={key} data={data[key]} />;
        })}
      </Content>
    </Wrapper>
  );
};

export default GoodAt;
