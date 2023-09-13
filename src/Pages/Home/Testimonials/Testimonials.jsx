import React from 'react';
import bgImg from '../../../assets/images/testimonials/testimonial-left5.png'
import quote from '../../../assets/images/testimonials/quote-ico5.png'
import test from '../../../assets/images/testimonials/testi5.jpg'

const Testimonials = () => {
    return (
        <div className='px-3 lg:px-5 pt-0 lg:pt-20 pb-10 lg:pb-20 lg:flex'>
            <div className='w-full'>
                <img src={bgImg} alt="" />
            </div>
            <div className='w-full my-auto'>
                <h6 className='font-semibold text-[#513de8] font-koho mb-3'>TESTIMONIALS</h6>
                <h1 className='font-koho lg:text-4xl font-extrabold text-[#323f7c]'>What Customer Saying</h1>
                <p className=' text-gray-500 mt-5'>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber Fully customizable templates the gioun</p>
                <div className='mx-3 bg-white px-5 py-7 shadow mt-10 relative'>
                    <img className='absolute left-5 top-5' src={quote} alt="" />
                    <p className='text-[#323F7C] ml-5 text-[22px] italic font-koho font-medium mt-4 tracking-[1px]'>Worldwide engage phosfluorescently methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.</p>
                    <div className='mt-7 flex items-center gap-5 ml-5'>
                        <img className='w-20 rounded-full' src={test} alt="" />
                        <div className=' font-koho'>
                            <h6 className='text-[#183760] mb-2 font-bold text-xl' >Oli Ullah</h6>
                            <h4 className='text-gray-500'>SEO & Founder, Facebook</h4>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-3 items-center justify-end mr-10'>
                        <button className='text-[1px] border-4 border-[#8164e3]'>1</button>
                        <button className='text-[1px] border-4 border-[#B3C5EB]'>2</button>
                        <button className='text-[1px] border-4 border-[#B3C5EB]'>3</button>
                        <button className='text-[1px] border-4 border-[#B3C5EB]'>4</button>
                        <button className='text-[1px] border-4 border-[#B3C5EB]'>5</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;