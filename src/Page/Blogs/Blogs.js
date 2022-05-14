import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='my-4 py-3'>
                <h2>1.Question: Difference between authorization and authentication ?</h2>
                <p><span className='fw-bold'>Answer:</span>
                    First Of All Authentication Means veryfying who some one is , i mean who are you whats your account is real or fake and you i mean user is real or fake and second of all authorization means veryfying whats specific applications, filses data and etc.
                </p>
            </div>
            <div className='my-4 py-3'>
                <h2>2.Question: Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p><span className='fw-bold'>Answer:</span>i'm Using Firebase For Multipurposes First of all i'm using firebase for Authorised user and also i can build Authentication systeam using firebase Second Of all i'm Hosting Website Using Firebase and firebase is a data base thats why i can used firebase for store data .At this moment i have lot of firebase alternative for implement authentication.</p>
            </div>
            <div>
                <h2>3.Question: What other services does firebase provide other than authentication?</h2>
                <p><span className='fw-bold'>Answer:</span> Firebase provide Lot of things First of all you can host website fully free in firebase and second of all firebase has real time database you can use firebase as a database and firebase provide cloud you can used cloud function And firbase provide lot of extenstion that you can used in your project</p>
            </div>
        </div>
    );
};

export default Blogs;