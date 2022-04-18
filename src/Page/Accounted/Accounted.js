import React from 'react';
import { GiEternalLove } from 'react-icons/gi';

const Accounted = ({ accounted }) => {
    const { name, img, about } = accounted;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card rounded-3" style={{ width: "20rem" }}>
                <img src={img} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about}</p>
                    <a href="#" className="btn btn-success"><GiEternalLove /> Favorite</a>
                </div>
            </div>
        </div>
    );
};

export default Accounted;