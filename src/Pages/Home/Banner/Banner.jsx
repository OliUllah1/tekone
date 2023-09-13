import React from 'react';
import bannerBg from '../../../assets/images/banner/banner-ly-h5.png'
import bannerLogo from '../../../assets/images/banner/banner-ly5-h5.png'
import customer from '../../../assets/images/banner/customer-avatar.png'
import { FaCaretRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='px-3 lg:px-5 py-10 lg:py-20 bg-gradient-to-b from-[#dcffeb] to-[#ffffff] flex gap-10 flex-col lg:flex-row'>
            <div className='w-full order-2 lg:order-1'>
                <h6 className='text-lg font-semibold text-[#513de8] font-koho mb-3'>TECHNOLOGY SOLUTIONS</h6>
                <h1 className='font-koho text-[26px] lg:text-6xl lg:leading-[74px] font-extrabold text-[#323f7c]'>Digital Technology IT Solution Services Around the World</h1>
                <p className='lg:text-xl text-lg text-gray-700 mt-5'>Our process that relies on methods and techniques to taking raw data - mining for insights and years of experience will help you become the industry leader.</p>
                <div className='flex items-center gap-10 my-16'>
                    <button className='px-12 py-[18px] text-white font-medium text-lg bg-gradient-to-r from-[#5843e8] to-[#7e62e4] hover:from-[#7e62e4] hover:to-[#5843e8] rounded-full'>Start Free Trial</button>
                    <button className='w-[68px] h-[68px] flex justify-center items-center text-3xl text-white font-medium bg-gradient-to-r from-[#5843e8] to-[#7e62e4] hover:from-[#7e62e4] hover:to-[#5843e8] rounded-full '><FaCaretRight></FaCaretRight></button>
                </div>
                <div className='lg:flex items-center gap-5'>
                    <img src={customer} alt="" />
                    <p className='font-koho font-semibold text-xl text-[#323f7c]'>Trusted By 5000+ Worldwide <br /> Brand & Customers</p>
                </div>
            </div>
            <div className='w-full lg:relative order-1 lg:order-2'>
                <img src={bannerBg} alt="" />
                <img className='absolute hidden lg:block animate-bounce top-[30%] w-32 left-64' src={bannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;