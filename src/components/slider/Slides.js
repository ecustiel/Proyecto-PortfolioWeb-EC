import React from 'react';
import Slide1 from '../../media/slide1.jpg';
import Slide2 from '../../media/slide2.jpg';
import Slide3 from '../../media/slide3.jpg';
import './Slider.css';

const slidesInformation = [
    {
        src: Slide1,
        alt: 'Project 1',
        desc: 'Mercadolibre',
        web: 'https://github.com/ecustiel/ML-income-test'
    },
    {
        src: Slide2,
        alt: 'Project 2',
        desc: 'Project 2'
    },
    {
        src: Slide3,
        alt: 'Project 3',
        desc: 'Project 3'
    },
]





const slides = slidesInformation.map(slide => (
   
    <div   className='slide-container'  >
        <a href={slide.web} target='_blank'>
        <img src={slide.src} alt={slide.alt} />
        </a>
        <div className='slide-desc' >
            <span >{slide.desc}</span>
        </div>
    </div>
    
))


export default slides;