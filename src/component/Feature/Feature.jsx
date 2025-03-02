import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex text-center items-center my-2'> <AiFillCheckCircle className='mr-3 text-blue-900' /> {feature} </p>
        </div>
    );
};

export default Feature;