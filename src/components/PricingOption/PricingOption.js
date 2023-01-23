import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = ({ option }) => {
    const { image, name, price, benefits } = option;

    return (
        <div className='bg-white text-center p-6 rounded-md  shadow-xl'>
            <div>
                <img className='w-36 h-36 mx-auto' src={image} alt="" />
                <h1 className='bg-slate-700 text-white p-2 text-2xl font-medium rounded-sm'>{name}</h1>
                <p>
                    <span className='text-4xl font-bold'>{price}</span>
                    <span className='text-md text-gray-600 font-bold'>/mc</span>
                </p>
            </div>
            <div>
                <h1 className='text-xl text-left'>Benefits</h1>
                {
                    benefits.map((benefit, index) => <Benefit
                        key={index}
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='flex items-center justify-center w-full bg-indigo-100 py-2 font-semibold mt-6 rounded-full hover:bg-gray-700 hover:text-white'>
                <span>Buy Now</span>
                <ArrowRightIcon className='w-4 h-4 ml-1'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;