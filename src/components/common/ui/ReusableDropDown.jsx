import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ReusableDropDown({ onChange, item }) {

  return (
    <Select
      onChange={onChange}
      displayEmpty
    >
      <MenuItem >Select Category</MenuItem>
      {item.map((type) => (
        <MenuItem value={type}>{type}</MenuItem>
      ))}

    </Select>
  );
}
