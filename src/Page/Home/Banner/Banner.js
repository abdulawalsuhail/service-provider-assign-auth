import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Image/Banner/banner1.jpg'
import banner2 from '../../../Image/Banner/banner2.jpg'
import banner3 from '../../../Image/Banner/banner3.jpg'

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Office Meeting hours</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Client Meeting Time</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Personal <span className='text-success'> Project Time</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;