import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Heading = styled.h3``;
const Item = styled.p``;

function Skill({ data }) {
  return (
    <Wrapper>
      <Heading>{data.title}</Heading>

      {data.items.map(item => {
        return <Item key={item.name}>{item.name}</Item>;
      })}
    </Wrapper>
  );
}

export default Skill;
