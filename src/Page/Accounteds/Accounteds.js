import React from 'react';
import Accounted from '../Accounted/Accounted';
import showOf1 from '../../Image/showOf/showOf1.jpg';
import showOf2 from '../../Image/showOf/showOf2.jpg';
import showOf3 from '../../Image/showOf/showOf3.jpg';
import showOf4 from '../../Image/showOf/showOf4.jpg';



const accounteds = [
    { id: 1, name: 'Chart Web', about: 'Accounting is the process of recording financial transactions pertaining to a business. ', img: showOf1 },
    {
        id: 2, name: 'Apple Web', about: `*Accounting Coach. ...

    *The Blunt Bean Counter. ...

    *Skoda Minotti Blog. ...

    *Accounting for Management. ...`, img: showOf2
    },
    { id: 3, name: 'Shopping Accounting Web', about: 'Rise in Data Breaches Has Consumers More Cautious about Shopping Habits.Accounting for Management.', img: showOf3 },
    { id: 4, name: 'IT Office Accounted Web', about: 'Charts are visually appealing and make it easy for users to see comparisons, patterns, and trends in data.', img: showOf4 },
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