import * as React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import './ReusableDropDown.css';

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function ReusableDropDown({value}) {
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <FormControl sx={{ m: 1, width: 'auto' }} size="small" className="dropdown-form-control">
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          className="dropdown-select"
        >
          <MenuItem value="" className="dropdown-menu-item">
            All
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} className="dropdown-menu-item">
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
