import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  /* background-color: white; */
  width: 36px;
  height: 48px;

  .bar {
    width: 100%;
    position: absolute;
    height: 4px;
    background-color: black;
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bar1 {
    top: 0px;

    ${props =>
      props.toggle &&
      `
      top: 10px;
    transform: rotate(45deg);
    
    `}
  }

  .bar2 {
    top: 10px;
    opacity: 1;

    ${props =>
      props.toggle &&
      `
    opacity: 0;
    
    `};
  }

  .bar3 {
    top: 20px;

    ${props =>
      props.toggle &&
      `
    top: 10px;
    transform: rotate(-45deg);
    
    `}
  }
`;

const MenuIcon = ({ toggle }) => {
  return (
    <Wrapper toggle={toggle}>
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </Wrapper>
  );
};

MenuIcon.propTypes = {};

export default MenuIcon;
