import React from "react";
import { InputWrapper } from "./style";
import PropTypes from "prop-types";
const Input = ({
  value,
  type,
  onChange,
  placeholder,
  id,
  name,
  checked,
  className,
  onKeyPress,
}) => {
  return (
    <InputWrapper htmlFor={id}>
      {id}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        checked={checked}
        className={className}
        onKeyPress={onKeyPress}
      />
    </InputWrapper>
  );
};
export default Input;
Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
};
