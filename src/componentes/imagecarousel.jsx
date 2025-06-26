import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import headimg from '../img/logo.jpg';

const images = [
    headimg,
    headimg,
    headimg
];

export const ImageCarousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Ocultamos flechas por defecto
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden' }}>
            <Slider ref={sliderRef} {...settings}>
                {images.map((img, index) => (
                    <Box key={index}>
                        <img
                            src={img}
                            alt={`banner-${index}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </Slider>

            {/* Botón anterior */}
            <IconButton
                onClick={() => sliderRef.current?.slickPrev()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 10,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            {/* Botón siguiente */}
            <IconButton
                onClick={() => sliderRef.current?.slickNext()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 10,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};
