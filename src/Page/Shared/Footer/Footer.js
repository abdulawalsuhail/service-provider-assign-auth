import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { Card, Col, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <div className='bg-success'>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <h2>Contact Us</h2>
                    </Col>
                    <Col>
                        <h2>Terms and Condition</h2>
                    </Col>
                    <Col>
                        <h2>Address</h2>
                    </Col>
                    <Col>
                        <img className='w-25 rounded' src="https://76617cf2ab22b5b6df93.b-cdn.net/wp-content/uploads/2013/09/online-booking-payment-meth.gif" alt="" />
                    </Col>
                </Row>
                <p> <small className='text-white'>tassuh.com copyright &copy; {year} </small></p>
            </div>
        </footer>
    );
};

export default Footer;