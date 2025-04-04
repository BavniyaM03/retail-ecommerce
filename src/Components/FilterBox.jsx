import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Checkbox, FormControlLabel } from '@mui/material';
import { ReusableButton } from '../Common-Components/ReusableButton'
import ReusableDropDown from '../Common-Components/ReusableDropDown'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import './FilterBox.css'


export const FilterBox = () => {
    const marks = [
        {
            value: 50,
            label: '50',
        },
        {
            value: 100,
            label: '100',
        },
        {
            value: 500,
            label: '500',
        },
        {
            value: 1000,
            label: '1000',
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="filter-container">
                <div className='sort-by filter-types'>
                    <Typography>Sort By</Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Price : Low to High" />
                            <FormControlLabel value="male" control={<Radio />} label="Price : High to Low" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="category-filter filter-types">
                    <Typography>Category</Typography>
                    <ReusableDropDown />
                </div>
                <div className="price-filter filter-types">
                    <Box sx={{ width: 250 }}>
                        <Typography gutterBottom>
                            Price Range
                        </Typography>
                        <Slider
                            track="inverted"
                            getAriaValueText={valuetext}
                            defaultValue={[200, 370]}
                            marks={marks}
                        />
                    </Box>
                </div>
                <div className='pay-on-delivery filter-types'>
                    <Typography>Payment</Typography>
                    <FormControlLabel control={<Checkbox />} label="Pay on delivery" />
                </div>
                <div className='discounts filter-types'>
                    <Typography>Discounts</Typography>
                    <ReusableButton sx={{color : 'black'}} variant="text" value="10% off or more" />
                    <ReusableButton sx={{color : 'black'}}  variant="text" value="25% off or more" />
                    <ReusableButton  sx={{color : 'black'}}  variant="text" value="35% off or more" />
                    <ReusableButton sx={{color : 'black'}}  variant="text" value="50% off or more" />
                    <ReusableButton sx={{color : 'black'}}  variant="text" value="70% off or more" />
                </div>
                <div className='availabilitiy filter-types'>
                    <Typography>Availabilitiy</Typography>
                    <FormControlLabel control={<Checkbox />} label="Include out of stock" />
                </div>

                <div className='customer-rating filter-types'>
                    <Typography>Ratings</Typography>
                    <FormControlLabel control={<Checkbox />} label="4 Star & Above" />
                    <FormControlLabel control={<Checkbox />} label="3 Star & Above" />
                </div>
            </div>
        </>
    )
}