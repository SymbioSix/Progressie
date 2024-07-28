import PropTypes from "prop-types";

const ButtonComponent = ({ type, text, onClick, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default ButtonComponent;