import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({ benefit }) => {
    return (
        <div>
            <p className='flex items-center'>
                <CheckCircleIcon className='w-4 h-4 text-green-500 mr-1'></CheckCircleIcon>
                <span>{benefit}</span>
            </p>
        </div>
    );
};

export default Benefit;