import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';


const InputComponent = ({ type, placeholder, icon, value, onChange, onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
    if (onToggle) onToggle();
  };

  return (
    <div className="flex items-center w-full gap-3 py-2 mb-4 text-base text-black border-black border-b-[3px]">
      <Icon icon={icon} style={{ color: 'black' }} width="64" height="64" className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 text-sm text-black outline-none sm:text-base"
        required
      />
      {type === 'password' && (
        <button
          type="button"
          className="ml-3 focus:outline-none"
          onClick={handleToggle}
        >
          <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} width="24" height="24" style={{ color: 'black' }} className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
        </button>
      )}
    </div>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputComponent;