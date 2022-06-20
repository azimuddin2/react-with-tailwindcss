import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import illustrator1 from '../../Images/illustrator-1.png';
import illustrator2 from '../../Images/illustrator-2.png';
import illustrator3 from '../../Images/illustrator-3.png';

const Pricing = () => {

    const pricingOption = [
        {
            id: 1, image: illustrator1, name: 'Free', price: 0, benefits: [
                'Lifetime free',
                'Limited space access',
                'Secuirty facility',
                'Event support',
                'Decoration design',
                'Per day bill'
            ]
        },
        {
            id: 2, image: illustrator2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'Food arrangement',
                'Full space access',
                'Mangement support',
                'Decoration design',
                'Billed as shift'
            ]
        },
        {
            id: 3, image: illustrator3, name: 'Premium', price: 19.99, benefits: [
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
        <div className='md:container mx-auto'>
            <h1 className='text-4xl text-center mt-8 mb-4 font-semibold'>My Pricing Club</h1>
            <p className='text-center text-zinc-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, totam.</p>
            <div className='p-10  md:rounded-3xl grid-cols-1 grid md:grid-cols-3 gap-8'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;