import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const PriceOption = ({option}) => {
    const {plan, price, features} = option;
    const [buy, setBuy] = useState(false);
    return (
        <div className='bg-blue-500 text-white rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center my-8'>{plan}</h4>
           <div className='p-4 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature = {feature}></Feature>)
                }
           </div>
           <button className='mt-10 w-full bg-blue-700 p-3 rounded-lg hover:bg-blue-950 font-bold' 
           onClick={()=>setBuy(!buy)}>
                {
                    buy == true ? <div className='flex items-center justify-between'> <p>Added</p> <AiOutlineClose className='text-2xl'></AiOutlineClose></div> : "Buy Now"
                }
            </button>
        </div>
    );
};

PriceOption.PropTypes = {
    option:PropTypes.object
}

export default PriceOption;``