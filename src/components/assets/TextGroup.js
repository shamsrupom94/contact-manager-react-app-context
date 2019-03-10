import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classnames("form-control", { "is-invalid": error })}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

TextGroup.defaultProps = {
  type: "text"
};

export default TextGroup;
