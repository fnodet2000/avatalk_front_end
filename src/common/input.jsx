// import React from "react";

// const Input = ({ name, label, value, error, onChange, ...rest }) => {
//   return (
//     <div className="form-floating form-group mb-3">
//       <input
//         {...rest}
//         name={name}
//         value={value}
//         onChange={onChange}
//         id={name}
//         placeholder={name}
//         className="form-control"
//       />
//       <label htmlFor={name}>{label}</label>
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

// export default Input;

import { Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

export default function RenderInput({ name, label, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      validate
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={12}>
          <TextField
            {...rest}
            label={label}
            variant="filled"
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        </Grid>
      )}
    />
  );
}
