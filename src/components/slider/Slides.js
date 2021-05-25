import React from 'react';
import Slide1 from '../../media/slide1.jpg';
import Slide2 from '../../media/slide2.jpg';
import Slide3 from '../../media/slide3.jpg';
import Slide4 from '../../media/slide4.jpg';
import './Slider.css';

const slidesInformation = [
    {
        src: Slide1,
        alt: 'Project 1',
        desc: 'Mercadolibre (IT)',
        web: 'https://github.com/ecustiel/ML-income-test'
    },
    {
        src: Slide2,
        alt: 'Project 2',
        desc: 'Web Personal',
        web: 'https://github.com/ecustiel/Proyecto-PortfolioWeb-EC'
    },
    {
        src: Slide3,
        alt: 'Project 3',
        desc: 'Calendario Eventos',
        web: 'https://github.com/ecustiel/calendar-app-final'
    },
    {
        src: Slide4,
        alt: 'Project 2',
        desc: 'Movies App',
        web: 'https://github.com/ecustiel/movies-app-personal-project'
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