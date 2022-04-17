import React from 'react';
import Accounted from '../Accounted/Accounted';
import showOf1 from '../../Image/showOf/showOf1.jpg';
import showOf2 from '../../Image/showOf/showOf2.jpg';
import showOf3 from '../../Image/showOf/showOf3.jpg';
import showOf4 from '../../Image/showOf/showOf4.jpg';



const accounteds = [
    { id: 1, name: 'Will Smith', img: showOf1 },
    { id: 2, name: 'Chris Rock', img: showOf2 },
    { id: 3, name: 'Dwayne Rock', img: showOf3 },
    { id: 4, name: 'Messy Vai', img: showOf4 },
]
const Accounteds = () => {

    return (
        <div id="accounteds" className='container'>
            <h2 className='text-success text-center mt-5'>My Create some Accounted web</h2>
            <div className="row">
                {
                    accounteds.map(accounted => <Accounted
                        key={accounted.id}
                        accounted={accounted}
                    >
                    </Accounted>)
                }
            </div>
        </div>
    );
};

export default Accounteds;