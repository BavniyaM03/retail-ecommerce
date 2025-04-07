import { Typography } from '@mui/material'
import './ReusableReviewRatingBox.css'
import { ReusableButton } from '../../../common/ui/ReusableButton'
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export const ReusableReviewRatingBox = () => {
    return (
        <>
            <div className="review-rating-box">
                <div className='first-box' >
                    <div className='review-rating-main-box sub-box'>
                        <Typography variant='h5' >Reviews & Ratings</Typography>
                        <ReusableButton variant="text" value="Write Review" />
                    </div>

                    <div className='review-rating-main-box sub-box'>
                        <div className='total-rating'>
                            <div className='star-icon'>
                                <Typography variant='h5'>4.4
                                </Typography>
                                <StarIcon color='disabled' />
                            </div>
                            <Typography variant='caption'>
                                10,473 Ratings & 853 Reviews
                            </Typography>
                        </div>
                        <div className='overall-reating'>
                            <div className='overall-sub-rating'>
                                <Typography variant='body2'>5</Typography>
                                <StarIcon fontSize='string' />
                                <progress className="rating-bar"  value="4.5" max="5"></progress>
                                <Typography variant='caption'>17,857</Typography>
                            </div>

                            <div className='overall-sub-rating'>
                                <Typography variant='body2'>4</Typography>
                                <StarIcon fontSize='string' />
                                <progress className="rating-bar"  value="3.5" max="5"></progress>
                                <Typography variant='caption'>6,857</Typography>
                            </div>

                            <div className='overall-sub-rating'>
                                <Typography variant='body2'>3</Typography>
                                <StarIcon fontSize='string' />
                                <progress className="rating-bar"  value="4.5" max="5"></progress>
                                <Typography variant='caption'>857</Typography>
                            </div>

                            <div className='overall-sub-rating'>
                                <Typography variant='body2'>2</Typography>
                                <StarIcon fontSize='string' />
                                <progress className="rating-bar"  value="3.1" max="5"></progress>
                                <Typography variant='caption'>17,857</Typography>
                            </div>

                            <div className='overall-sub-rating'>
                                <Typography variant='body2'>1</Typography>
                                <StarIcon fontSize='string' />
                                <progress className="rating-bar overall-one-rating"  value="2.75" max="5"></progress>
                                <Typography variant='caption'>57</Typography>
                            </div>

                        </div>
                    </div>

                    <div className='review-rating-images sub-box'>
                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                        <div className='review-image-container'>
                            <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                        </div>

                    </div>

                </div>

                <div className='all-users-reviews-rating-second-box'>
                    <div className='user-review-title-box'>
                        <section className='rating-section'>
                            <Typography variant='p'>5</Typography><StarIcon fontSize="string" />
                        </section>
                        <Typography className='user-review-title' variant='p'>Wonderfull</Typography>
                    </div>
                    <div className='user-review-description-box'>
                        <Typography className='user-review-description' variant='caption'>Good mobile very good I have buy this mobile in 12/256 very beautiful mobile but camera quality is ok ok medium 🔉 spekar is very good battery 🔋 drain fast I have power charger issue face this mobile but mobile is 10/08 rating ok ok mobile over all bast and nice mobile happy 😊😊 happy diwali 🎇🪔🪔🪔🪔</Typography>
                    </div>
                    <div className='user-review-images'>
                        <div className='indivisual-user-review-rating-images sub-box'>
                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>
                        </div>


                    </div>

                    <div className='user-details'>
                        <div>
                            <Typography variant='caption'>
                                Aarti Yadav
                            </Typography>
                            <VerifiedUserOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>
                                Certified Buyer, Kolkata
                            </Typography>
                            <Typography variant='caption'>
                                16 days ago
                            </Typography>
                        </div>
                        <div className='like-dislike-container'>
                            <ThumbUpAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>16</Typography>
                            <ThumbDownOffAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>8</Typography>
                        </div>
                    </div>




                </div>

                <div className='all-users-reviews-rating-second-box'>
                    <div className='user-review-title-box'>
                        <section className='rating-section'>
                            <Typography variant='p'>5</Typography><StarIcon fontSize="string" />
                        </section>
                        <Typography className='user-review-title' variant='p'>Wonderfull</Typography>
                    </div>
                    <div className='user-review-description-box'>
                        <Typography className='user-review-description' variant='caption'>Good mobile very good I have buy this mobile in 12/256 very beautiful mobile but camera quality is ok ok medium 🔉 spekar is very good battery 🔋 drain fast I have power charger issue face this mobile but mobile is 10/08 rating ok ok mobile over all bast and nice mobile happy 😊😊 happy diwali 🎇🪔🪔🪔🪔</Typography>
                    </div>
                    <div className='user-review-images'>
                        <div className='indivisual-user-review-rating-images sub-box'>
                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>
                        </div>


                    </div>

                    <div className='user-details'>
                        <div>
                            <Typography variant='caption'>
                                Aarti Yadav
                            </Typography>
                            <VerifiedUserOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>
                                Certified Buyer, Kolkata
                            </Typography>
                            <Typography variant='caption'>
                                16 days ago
                            </Typography>
                        </div>
                        <div className='like-dislike-container'>
                            <ThumbUpAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>16</Typography>
                            <ThumbDownOffAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>8</Typography>
                        </div>
                    </div>




                </div>

                <div className='all-users-reviews-rating-second-box'>
                    <div className='user-review-title-box'>
                        <section className='rating-section'>
                            <Typography variant='p'>5</Typography><StarIcon fontSize="string" />
                        </section>
                        <Typography className='user-review-title' variant='p'>Wonderfull</Typography>
                    </div>
                    <div className='user-review-description-box'>
                        <Typography className='user-review-description' variant='caption'>Good mobile very good </Typography>
                    </div>
                    <div className='user-review-images'>
                        <div className='indivisual-user-review-rating-images sub-box'>
                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>

                            <div className='review-image-container'>
                                <img src='https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83b1a8cf3451407ebcfb789c89d5dc7f.jpg?q=90'></img>
                            </div>
                        </div>


                    </div>

                    <div className='user-details'>
                        <div>
                            <Typography variant='caption'>
                                Priya Thakur
                            </Typography>
                            <VerifiedUserOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>
                                Certified Buyer, Indore
                            </Typography>
                            <Typography variant='caption'>
                                1 Year ago
                            </Typography>
                        </div>
                        <div className='like-dislike-container'>
                            <ThumbUpAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>16</Typography>
                            <ThumbDownOffAltOutlinedIcon fontSize='string' />
                            <Typography variant='caption'>8</Typography>
                        </div>
                    </div>

                </div>

                <div className='all-reviews-button'>
                    <ReusableButton sx={{ fontWeight: 700, fontSize: '18px' }} variant="text" value="All 700 reviews" />
                    <KeyboardArrowRightIcon color='primary' />
                </div>

            </div>
        </>
    )
}