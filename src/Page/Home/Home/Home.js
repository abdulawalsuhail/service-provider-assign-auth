import React from 'react';
import Accounteds from '../../Accounteds/Accounteds';
import PageTitle from '../../Shared/PageTItle/PageTitle';
import Services from '../Services/Services';

const Home = () => {
    return (

        <>
            {/* <PageTitle title="Home"></PageTitle> */}
            <Services></Services>
            <Accounteds></Accounteds>
        </>

    );
};

export default Home;