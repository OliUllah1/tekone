import React from 'react';
import service1 from '../../../assets/images/mainservices/dart-icon.png'
import service2 from '../../../assets/images/mainservices/globe-icon.png'
import service3 from '../../../assets/images/mainservices/search-icon.png'
import shapeBottom from '../../../assets/images/mainservices/shape.png'
import shapeTop from '../../../assets/images/mainservices/shape-2.png'

const MainServices = () => {
    
    return (
        <div className='px-3 lg:px-5 pt-10 pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='lg:shadow-2xl shadow-xl rounded-md relative text-center'>
                <img className='absolute bottom-0 left-0' src={shapeBottom} alt="" />
                <img className='absolute top-0 right-0' src={shapeTop} alt="" />
                <img className='w-[90px] mb-10 mt-16 mx-auto' src={service1} alt="" />
                <h1 className=' text-[#323f7c] font-bold font-koho text-3xl mb-5'>Cloud Services</h1>
                <p className='px-10 mb-20 text-gray-500'>We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.</p>
            </div>
            <div className='lg:shadow-2xl shadow-xl rounded-md relative text-center'>
                <img className='absolute bottom-0 left-0' src={shapeBottom} alt="" />
                <img className='absolute top-0 right-0' src={shapeTop} alt="" />
                <img className='w-[90px] mb-10 mt-16 mx-auto' src={service2} alt="" />
                <h1 className=' text-[#323f7c] font-bold font-koho text-3xl mb-5'>Cyber Security</h1>
                <p className='px-10 mb-20 text-gray-500'>We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.</p>
            </div>
            <div className='lg:shadow-2xl shadow-xl rounded-md relative text-center'>
                <img className='absolute bottom-0 left-0' src={shapeBottom} alt="" />
                <img className='absolute top-0 right-0' src={shapeTop} alt="" />
                <img className='w-[72px] mb-10 mt-16 mx-auto' src={service3} alt="" />
                <h1 className=' text-[#323f7c] font-bold font-koho text-3xl mb-5'>Data Analytics</h1>
                <p className='px-10 mb-20 text-gray-500'>We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.</p>
            </div>
        </div>
    );
};

export default MainServices;