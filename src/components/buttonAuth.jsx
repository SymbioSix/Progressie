import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonComponent = ({ text, link, className }) => {
  return (
    <Link to={link}>
      <button className={className}>
        {text}
      </button>
    </Link>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default ButtonComponent;
