import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { ReusableButton } from '../../common/ui/ReusableButton'
import ReusableDropDown from '../../common/ui/ReusableDropDown'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import './FilterBox.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cashOnDeliveryFilter, filterProductsWithRatingFourAndAbove, priceSortingHighToLow, priceSortingLowToHigh, setChecked, trackValueOfFilters } from '../../../Redux/productSlice';
import { CheckBox } from '@mui/icons-material';


export const FilterBox = () => {
    // const [checked, setChecked] = useState(false);
    const category = useParams();
    // const products = useSelector((state) => state.product[category])
    // console.log(22, products);
    const dispatch = useDispatch();
    const checked = useSelector((state) => state.products.checked)
    const filterSelections = useSelector((state) => state.products.filterSelections)
    const navigate = useNavigate();
    // const payOnDelivery = useSelector((state) => state.products.payOnDelivery)
    // const category = product.category;
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

    // const handlerPayOnDelivery = (e) => {
    //     setChecked(e.target.checked)
    //     console.log(checked);
    //     dispatch(cashOnDeliveryFilter({ product, checked }))
    // }

    // const handlerPayOnDelivery = (e) => {
    //     setChecked(e.target.checked)
    //     if (checked) {
    //         const payOnDeliveryProducts = products.filter((item) => item.pay_on_delivery === true);
    //         console.log(payOnDeliveryProducts);
    //     } else{
    //         products;
    //     }
    // }

    const handleCategoryValue = (category) =>{
        console.log(category);
        navigate(`/productlist/${category}`)
    }

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
                            <FormControlLabel value="low_to_high" name="low_to_high" control={<Radio onClick={(event) => dispatch(trackValueOfFilters({ name, event }))} />} label="Price : Low to High" />
                            <FormControlLabel value="high_to_low" name='high_to_low' onClick={(event) => dispatch(trackValueOfFilters({ name, event }))} control={<Radio />} label="Price : High to Low" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="category-filter filter-types">
                    <Typography>Category</Typography>
                    <ReusableDropDown value="Category" onChange={(event)=>handleCategoryValue(event.target.value)} item={['mobile', 'laptop', 'fashion', 'home', 'electronic', 'toys', 'beauty', 'furniture', 'sports']} />
                </div>
<div className="price-filter filter-types">
                    <Box sx={{ width: 250 }}>
                        <Typography gutterBottom>
                            Price Range
                        </Typography>
                        <Slider
                            track="inverted"
                            getAriaValueText={valuetext}
                            defaultValue={[0, 10000]}
                            marks={marks}
                        />
                    </Box>
                </div>
                <div className='pay-on-delivery filter-types'>
                    <Typography>Payment</Typography>
                    {/* <Checkbox type="checkbox" checked={} onChange={(event) => dispatch(cashOnDeliveryFilter({ category, event }))}/> */}
                    <Checkbox type="checkbox" name='pay_on_delivery' checked={filterSelections.pay_on_delivery} onChange={(event) => dispatch(trackValueOfFilters({ name, event }))} />

                    {/* <CheckBox checked={payOnDelivery} onChange={(event) => dispatch(cashOnDeliveryFilter({ category, event }))}></CheckBox> */}
                    {/* <FormGroup>
                        <FormControlLabel control={<Checkbox checked={payOnDelivery} onChange={(event) => dispatch(cashOnDeliveryFilter({ category, event }))} />} label="Pay on delivery" />
                    </FormGroup> */}
                </div>
                <div className='discounts filter-types'>
                    <Typography>Discounts</Typography>
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="10% off or more" name="discount" onClick={() => dispatch(trackValueOfFilters(10))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="25% off or more"  name="discount"  onClick={() => dispatch(trackValueOfFilters(25))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="35% off or more"  name="discount"  onClick={() => dispatch(trackValueOfFilters(35))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="50% off or more"  name="discount"  onClick={() => dispatch(trackValueOfFilters(50))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="70% off or more"  name="discount"  onClick={() => dispatch(trackValueOfFilters(70))} />
                </div>
                <div className='availabilitiy filter-types'>
                    <Typography>Availabilitiy</Typography>
                    <FormControlLabel control={<Checkbox name='stock' onChange={(event) => dispatch(trackValueOfFilters({ name, event }))}/>} label="Exclude out of stock" />
                </div>

                <div className='customer-rating filter-types'>
                    <Typography>Ratings</Typography>
                    <FormControlLabel

                        control={<Checkbox name="rating" onChange={(event) => dispatch(trackValueOfFilters({ name, event , rating : 4 }))} />}
                        label="4 Star & Above" />

                    <FormControlLabel control={<Checkbox name="rating" onChange={(event) => dispatch(trackValueOfFilters({ name, event , rating : 3 }))} />} label="3 Star & Above" />
                </div>
            </div>
        </>
    )
}