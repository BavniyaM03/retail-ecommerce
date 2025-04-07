import Box from '@mui/material/Box';
// import { category } from '../../../assets/category-images/category-images';
import './Hero.css';
import HeroSectionSlider from './HeroSectionSlider';
import { useSelector } from 'react-redux';

export const Hero = () => {
    const category = useSelector((state)=>state.products.categories);
    console.log(category);
    return (
        <div>
            <Box className="custom-box-container ">
                {category.map((product, index) => (
                    <section key={index}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                    </section>
                ))}
            </Box>
            <Box sx={{marginTop : 1.5}}>
                <HeroSectionSlider/>
            </Box>
        </div>
    );
};
