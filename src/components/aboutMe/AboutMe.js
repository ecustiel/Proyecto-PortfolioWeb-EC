import React from 'react'
import './AboutMe.css';
import AboutMe1 from '../../media/aboutMe1.jpg';
import AboutMe2 from '../../media/aboutMe2.jpg';

const AboutMe = () => {
    return (
        <div className='aboutMe-container'>
            <div className='aboutMe-description'>
                <h3>Let me tell you something about me...</h3>
                <p>My name is Eduardo Custiel, I am a young student of the Programmer Analyst / Information Technology Analyst career at the ORT University of Montevideo. I am also studying a Bachelor of Psychology at the University of Montevideo.
Self-taught fanatic of programming and technology, I have dedicated these last years to expanding my knowledge in the area of ​​programming, dedicating myself mainly to the front end. HTML, CSS, JavaScript, React and Node.js are some of the tools I have the most experience with. But also during my studies I have worked with C #, ASP.Net (Entity Framework), MVC and SQL.
My goal is to be able to develop at the professional level as a web developer contributing all my knowledge and enthusiasm to continue expanding my knowledge towards already known or new technologies.</p>
            </div>

            <div className='aboutMe-img'>
                <img src={AboutMe1} alt='aboutMe' className='aboutMe-img-resize' />
            </div>
        </div>
    )
}

export default AboutMe
