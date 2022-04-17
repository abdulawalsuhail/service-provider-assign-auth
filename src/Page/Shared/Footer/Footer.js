import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <div className='w-100 bg-success '>
                <div className='footer-container'>
                    <div>
                        <h1 className='text-white'>Follow me</h1>
                        <p className='fw-bold text-info'>Facebook</p>
                        <p className='fw-bold'>Instagram</p>
                    </div>
                    <div>
                        <h1 className='text-white'>Address</h1>
                        <p>104/3, Jafrabad, Pulper <br /> Mohammadpur, Dhaka-1207</p>
                        <a className='text-danger py-2' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>abdullahsuhail43@gmail.com</a>
                    </div>
                    <div>
                        <h1 className='text-white'>Information</h1>
                        <p>About Me</p>
                        <p>My Resume</p>
                        <p>Contact Me</p>
                    </div>
                    <div>
                        <h1 className='text-white'>Legal</h1>
                        <p>Refund Policy</p>
                        <p>Terms and Condition</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <p> <small className='text-white'>tassuh.com copyright &copy; {year} </small></p>
            </div>
        </footer>
    );
};

export default Footer;