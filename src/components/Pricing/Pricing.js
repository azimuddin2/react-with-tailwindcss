import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import illustrator1 from '../../Images/illustrator-1.png';
import illustrator2 from '../../Images/illustrator-2.png';
import illustrator3 from '../../Images/illustrator-3.png';

const Pricing = () => {

    const pricingOptions = [
        {
            id: 1,
            image: illustrator1,
            name: 'Free',
            price: 0,
            benefits: [
                'Lifetime free',
                'Limited space access',
                'Secuirty facility',
                'Event support',
                'Decoration design',
                'Per day bill'
            ]
        },
        {
            id: 2,
            image: illustrator2,
            name: 'Regular',
            price: 9.99,
            benefits: [
                'Everything on free',
                'Food arrangement',
                'Full space access',
                'Mangement support',
                'Decoration design',
                'Billed as shift'
            ]
        },
        {
            id: 3,
            image: illustrator3,
            name: 'Premium',
            price: 19.99,
            benefits: [
                'Everything on regular',
                'Limited space access',
                'Dedicated team',
                'Buffet food',
                'Premium Decoration',
                'Pay as plan'
            ]
        },
    ]

    return (
        <div className='container mx-auto my-14'>
            <h1 className='text-4xl text-center mt-8 mb-4 font-semibold'>My Pricing Club</h1>
            <p className='text-center text-zinc-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, totam.</p>
            <div className='p-10  md:rounded-3xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;