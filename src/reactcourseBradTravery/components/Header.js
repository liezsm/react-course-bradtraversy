import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Buttons color='green' text='Add' />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
