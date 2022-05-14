import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, about, picture, button, price } = service
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate('/checkout');
    }
    return (
        <div className='service'>
            <img className='w-100' src={picture} alt="" />
            <h2 className='text-dark'>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{about}</small></p>
            <button onClick={navigateToServiceDetail} className='btn btn-success'>{button}</button>
        </div>
    );
};

export default Service;