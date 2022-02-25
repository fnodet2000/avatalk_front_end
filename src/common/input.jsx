import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-floating form-group mb-3">
      <input
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        placeholder={name}
        className="form-control"
      />
      <label htmlFor={name}>{label}</label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;