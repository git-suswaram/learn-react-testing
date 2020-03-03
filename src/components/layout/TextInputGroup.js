import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control form-control-lg"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text"
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
