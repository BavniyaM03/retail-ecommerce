import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Hero } from '../components/features/home/Hero';
const ProductCard = React.lazy(() => import('../components/features/home-card/ProductCard'))
const ProductCardWithCaptions = React.lazy(() => import('../components/features/home-card/CategoryCard'))
const ProductCardWithDifferentViews = React.lazy(() => import('../components/features/home-card/ProductCardWithDifferentViews'))
const ProductCardSingleProduct = React.lazy(() => import('../components/features/home-card/ProductCardSingleProduct'))
import { ReusableLoadingSymbol } from '../components/common/ReusableLoadingSymbol';
import { useSelector } from 'react-redux';

export const Home = () => {
    const books = useSelector((state) => state.products.books);
    const firstFourProducts = books.slice(0, 4);
    const secondFourProducts = books.slice(4, 8);
    const electronicProducts = useSelector((state)=>state.products.electronic.electronics)
    const firstFourElecProducts = electronicProducts.slice(0, 4);
    const secondFourElecProducts = electronicProducts.slice(4, 8);
    const bags = useSelector((state)=>state.products.bags.bags)
    const firstFourBagsProduct = bags.slice(0, 4);
    const secondFourBagsProduct = bags.slice(4, 8);
    // const thirdFourBagsProduct = bags.slice(8, 12);
    // const fourthFourBagsProduct = bags.slice(12, 16);
    console.log('electronic', electronicProducts);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100%', marginTop: 1 }} >
                    <Hero />
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCard products={firstFourProducts}  />
                        <ProductCard products={secondFourProducts}  />
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardWithCaptions products={firstFourElecProducts}  />
                        <ProductCardWithCaptions products={secondFourElecProducts} />
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardWithDifferentViews products={firstFourBagsProduct} idx={0} />
                        <ProductCardWithDifferentViews products={secondFourBagsProduct} idx={1}/>
                        {/* <ProductCardWithDifferentViews products={thirdFourBagsProduct} />
                        <ProductCardWithDifferentViews products={fourthFourBagsProduct} /> */}
                    </Suspense>
                    <Suspense fallback={<ReusableLoadingSymbol />}>
                        <ProductCardSingleProduct />
                    </Suspense>

                </Box>

            </Container>
        </React.Fragment>

    )
}

