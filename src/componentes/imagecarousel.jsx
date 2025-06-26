import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import bannerimg2 from '../img/banner2.jpg';
import bannerimg from '../img/banner.jpg';

const images = [bannerimg, bannerimg2];

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
    arrows: false,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '90%',
        maxWidth: 1200,
        margin: '20px auto',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Carrusel */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={img}
              alt={`banner-${index}`}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
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
          zIndex: 1,
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
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
