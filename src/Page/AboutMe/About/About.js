import React from 'react';
import './About.css'
import suhail from '../../../Image/myPhoto/suhail.png'

const About = () => {
    return (
        <div>
            <div className='about container'>
                <img className='w-25' src={suhail} alt="My Photo" />
                <h2>Md. Abdul Awal Suhail</h2>
                <p className='container'>I am a junior developer. I do work font-end developer. I am an intermediate pass. My feature pack plan now is to be a good incompetent web developer. I have to do a lot of hard work so I am working hard with your blessings so that I can become a good quality web developer. I hope I can. My first flame from you is this web developing in shaa allah I am trying to go further I will continue this effort.</p>

            </div>
        </div>
    );
};

export default About;