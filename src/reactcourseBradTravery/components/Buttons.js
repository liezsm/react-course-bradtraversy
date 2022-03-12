import PropTypes from "prop-types";

const Buttons = ({ color, text }) => {
  return (
    <button className='btn' style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Buttons.defaultProps = {
  color: "steelblue",
};

Buttons.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Buttons;
