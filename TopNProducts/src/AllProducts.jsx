import React, { useState } from 'react';
import { registerCompany, authCompany } from './api';

const AllProducts = () => {
    const [register, setRegister] = useState('');

    //For First Registration

    // const handleRegister = async () => {
    //     try {
    //         const res = await registerCompany(
    //             'goMart',
    //             'Pratishtha',
    //             '21052683',
    //             '21052683@kiit.ac.in',
    //             'mjPQGJ'
    //         );
    //         setRegister('Registration successful');
    //         console.log(res);
    //     } catch (error) {
    //         setRegister('Registration failed');
    //         console.error(error);
    //     }
    // };

    const handleAuth = async () => {
        try {
            const res = await authCompany(
                'goMart',
                "3b95b4a6-b37a-4921-a87a-d3885fa8d8d1",
                "rTMYPQVRhwNGlyEP",
                'Pratishtha',
                '21052683@kiit.ac.in',
                '21052683',
            );
            setRegister('Registration successful');
            console.log(res);
        } catch (error) {
            setRegister('Registration failed');
            console.error(error);
        }
    };

    return (
        <div>
            {/* <button onClick={handleRegister}>Register</button> */}
            <p>{register}</p>
            <button onClick={handleAuth}>Register</button>

        </div>
    );
};

export default AllProducts;
