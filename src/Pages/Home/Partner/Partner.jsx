import React from 'react';
import partner1 from '../../../assets/images/partner/partner1.png'
import partner2 from '../../../assets/images/partner/partner2.png'
import partner3 from '../../../assets/images/partner/partner3.png'
import partner4 from '../../../assets/images/partner/partner4.png'
import partner5 from '../../../assets/images/partner/partner7.png'
const Partner = () => {
    return (
        <div className='px-3 lg:px-10 grid grid-cols-2 lg:grid-cols-5 pb-10 lg:gap-24 gap-5'>
            
            <img className='w-44 lg:w-full' src={partner1} alt="" />
            <img className='w-44 lg:w-full' src={partner2} alt="" />
            <img className='w-full hidden lg:block' src={partner3} alt="" />
            <img className='w-full hidden lg:block' src={partner4} alt="" />
            <img className='w-full hidden lg:block' src={partner5} alt="" />
            
            
            
            
        </div>
    );
};

export default Partner;