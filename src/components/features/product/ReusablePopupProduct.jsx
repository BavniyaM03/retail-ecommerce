import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IconButton, Typography } from '@mui/material';
import { ReusableButton } from '../../common/ui/ReusableButton';
import CloseIcon from '@mui/icons-material/Close';
import './ReusablePopupProduct.css'
import { CurrencyRupee } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToCart } from '../../../Redux/cartSlice';


export default function ReusablePopupProduct({ handleClose, open, images, videos }) {
    const [isActive, setIsActive] = React.useState(true);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);
    const product = useSelector((state) => state.products.productDetails);
    const dispatch = useDispatch();

    console.log(videos);


    const handlerPreviewImage = (index) => {
        setSelectedImage(images[index]);
    }

    

    const handlerAddToCart = (product, event) => {
        dispatch(addToCart(product, event))
        // enqueueSnackbar('Product Added to Cart');
    }

    const handlerSelectedVideo = (index) => {
        console.log(index)
        console.log(selectedVideo);
        setSelectedVideo(videos[index])
    }

    useEffect(() => {
    }, [selectedVideo])

    console.log("selectedVideo", selectedVideo);

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button> */}
            <Dialog
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <IconButton
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        left: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <div className='dialog-box-container'>

                    <div className='product-mainimage-container'>
                        {isActive ? (<img src={selectedImage}></img>) : (
                            <video controls>
                                <source src={selectedVideo} type="video/mp4"></source> */
                            </video>
)}
                    </div>


                    <div className='product-small-images'>

                        <div>
                            <ReusableButton className={isActive ? "image-button" : "video-button"} variant="text" value="Image" onClick={() => setIsActive(true)} />
                            <ReusableButton className={isActive ? "video-button" : "image-button"} variant="text" value="Video" onClick={() => setIsActive(false)} />
                        </div>

                        {isActive ? (<div className='small-images-container'>
                            {images.map((image, index) => (
                                <section key={index} onClick={() => handlerPreviewImage(index)}><img className='small-view-of-images' src={image}></img></section>
                            ))}

                        </div>) : (
                            videos?.map((video, index) => (
                                <div className='small-video-container' key={index} onClick={() => handlerSelectedVideo(index)}>
                                    <div className='small-video'>

                                        <img src='https://sm.mashable.com/mashable_in/seo/default/14649-samsung-s23-ultra-1-2-2023-1200x675_52eh.jpg'>
                                        </img>


                                        <div className='video-playing-label'>Now Playing</div>
                                    </div>
                                    <div className='video-timer'>
                                        <Typography>VD </Typography>
                                        <Typography>00:11</Typography>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className='popup-product-details-container'>
                            {product?.features?.map((item) => (
                                <Typography variant='captions'>
                                    {item}
                                </Typography>
                            ))}
                            <div className='popup-product-mrp'>
                                <Typography>
                                    <CurrencyRupee />
                                </Typography> <Typography>{product.price}/-</Typography>
                            </div>

                            <ReusableButton onClick={(event) => handlerAddToCart(product, event)} className="add-to-bag" variant="contained" value="Add to Bag" />

                        </div>


                    </div>
                </div>

            </Dialog >
        </React.Fragment >
    );
}
