import React from 'react';
import aboutBg from '../../../assets/images/about/about-main-img-h5.png'
import aboutDrone from '../../../assets/images/about/about-drone-img-h5.png'
import tick from '../../../assets/images/about/blue-tick.png'
const About = () => {
    return (
        <div className='px-3 lg:px-5 lg:flex relative py-20 bg-[#dcffeb]'>
            <img className='lg:w-32 w-20 absolute lg:top-72 top-44 left-48 z-10 lg:left-[350px] animate-bounce' src={aboutDrone} alt="" />
            <div className='lg:absolute top-20 left-1 z-0'>
                <img className='w-[750px]' src={aboutBg} alt="" />
            </div>
            <div className='w-full hidden lg:block'></div>
            <div className='w-full'>
                <h6 className='text-lg font-semibold text-[#513de8] font-koho mb-3'>ABOUT US</h6>
                <h1 className='font-koho text-[26px] lg:text-4xl font-extrabold text-[#323f7c]'>We Are Increasing Business Success With Technology</h1>
                <p className='text-gray-600 text-[17px] mt-7 mb-10'>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.</p>
                <h3 className='font-semibold text-[#112437] text-xl underline'>Top Features</h3>
                <div className='text-[#929693] text-lg mt-8 grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                            <img className='w-4' src={tick} alt="" />
                        </div>
                        <p>Drag & Drop Newsletter Editor</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                            <img className='w-4' src={tick} alt="" />
                        </div>
                        <p>Content A/B Testing</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                            <img className='w-4' src={tick} alt="" />
                        </div>
                        <p>Subject Line A/B Testing</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                            <img className='w-4' src={tick} alt="" />
                        </div>
                        <p>List Segmentation</p>
                    </div>
                </div>
                <button className='px-12 mt-8 py-[18px] text-white font-medium text-lg bg-gradient-to-r from-[#5843e8] to-[#7e62e4] hover:from-[#7e62e4] hover:to-[#5843e8] rounded-full'>Get Started Now</button>
            </div>
        </div>
    );
};

export default About;