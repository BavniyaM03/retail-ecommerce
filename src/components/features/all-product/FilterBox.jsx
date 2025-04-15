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
    const [range, setRange] = useState([0, 10000]);
    // const payOnDelivery = useSelector((state) => state.products.payOnDelivery)
    // const category = product.category;




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

    const handleCategoryValue = (category) => {
        console.log(category);
        navigate(`/productlist/${category}`)
    }


    const handleRange = (e) => {
        setRange(e.target.value);
        dispatch(trackValueOfFilters(e.target.value));
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
                    <ReusableDropDown value="Category" onChange={(event) => handleCategoryValue(event.target.value)} item={['mobile', 'laptop', 'fashion', 'home', 'electronic', 'toys', 'beauty', 'furniture', 'sports']} />
                </div>
                <div className="price-filter filter-types">
                    <Box sx={{ width: 250 }}>
                        <Typography gutterBottom>
                            Price Range
                        </Typography>
                        <Slider defaultValue={500} min={0} max={10000} value={range} onChange={(e) => handleRange(e)} valueLabelDisplay='auto' disableSwap />
                        <Typography>Min : {range[0]} - Max : {range[1]}</Typography>
                    </Box>
                    {/* <Slider
                            track="inverted"
                            getAriaValueText={valuetext}
                            defaultValue={[0, 10000]}
                            step={10}
                            marks={marks}
                            min={0}
                            max={10000}
                        /> */}

                    {/* <div class="price-input">
                        <div class="field">
                            <span>Min</span>
                            <input type="number" class="input-min" value="2500" />
                        </div>
                        <div class="separator">-</div>
                        <div class="field">
                            <span>Max</span>
                            <input type="number" class="input-max" value="7500" />
                        </div>
                    </div>


                    <div class="slider">
                        <div class="progress"></div>
                    </div>
                    <div class="range-input">
                        <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
                        <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
                    </div> */}

                    {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}

                    {/* <input type='range'></input> */}
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
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="25% off or more" name="discount" onClick={() => dispatch(trackValueOfFilters(25))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="35% off or more" name="discount" onClick={() => dispatch(trackValueOfFilters(35))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="50% off or more" name="discount" onClick={() => dispatch(trackValueOfFilters(50))} />
                    <ReusableButton sx={{ color: 'black' }} variant="text" value="70% off or more" name="discount" onClick={() => dispatch(trackValueOfFilters(70))} />
                </div>
                <div className='availabilitiy filter-types'>
                    <Typography>Availabilitiy</Typography>
                    <FormControlLabel control={<Checkbox name='stock' onChange={(event) => dispatch(trackValueOfFilters({ name, event }))} />} label="Exclude out of stock" />
                </div>

                <div className='customer-rating filter-types'>
                    <Typography>Ratings</Typography>
                    <FormControlLabel

                        control={<Checkbox name="rating" onChange={(event) => dispatch(trackValueOfFilters({ name, event, rating: 4 }))} />}
                        label="4 Star & Above" />

                    <FormControlLabel control={<Checkbox name="rating" onChange={(event) => dispatch(trackValueOfFilters({ name, event, rating: 3 }))} />} label="3 Star & Above" />
                </div>
            </div >
        </>
    )
}