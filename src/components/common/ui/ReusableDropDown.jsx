import * as React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import './ReusableDropDown.css';

// const ITEM_HEIGHT = 60;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 200,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

export default function ReusableDropDown({ value}) {


  // const [personName, setPersonName] = React.useState('');

  // const handleChange = (event) => {
  //   setPersonName(event.target.value);
  // };
  // const data = Object.key(loginSignup);

  // console.log(loginSignup);

  return (
    <div className="dropdown-container">
      <FormControl sx={{ m: 1, width: 'auto' }} size="small" className="dropdown-form-control">
        <Select
          // displayEmpty
          // label={label}
          // value={value}
          // onChange={onChange}
          // MenuProps={MenuProps}
          className="dropdown-select"
        >

          {/* {value.map((e, index) => ( */}
           {/* <MenuItem value={e} className="dropdown-menu-item">{e}</MenuItem> */}
          {/* ))} */}

          {/* {value.map((element, index)=>(
            
            ))} */}

        </Select>
      </FormControl>
    </div>
  );
}
