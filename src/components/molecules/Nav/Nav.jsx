import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "@app-components/atoms/Link";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
`;

const Nav = ({ navList }) => {
  return (
    <>
      {navList.map(item => (
        <Link key={item.label} data={item}>
          {item.label}
        </Link>
      ))}
    </>
  );
};

Nav.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ),
};

export default Nav;
