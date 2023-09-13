import React from 'react';
import blog1 from '../../../assets/images/blog/blog1.jpg'
import blog2 from '../../../assets/images/blog/blog2.jpg'
import blog3 from '../../../assets/images/blog/blog3.jpg'
import profile from '../../../assets/images/blog/profile.png'

const Blog = () => {
    return (
        <div className='px-3 lg:px-5 py-20 bg-[#f2fff7]'>
            <div className='text-center mb-10'>
            <h6 className='font-semibold text-[#513de8] font-koho mb-3'>OUR BLOG</h6>
                <h1 className='font-koho text-[26px] leading-[48px] lg:text-[40px] font-extrabold text-[#323f7c]'>Latest Tips &Tricks</h1>
                <p className='text-gray-500 mt-5 text-lg'>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber <br /> Fully customizable templates the gioun</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='bg-[#e9f6ee] w-full shadow rounded-xl'>
                    
                        <div className='relative mb-10'>
                        <div className='w-full relative font-semibold text-sm text-[#513de8]'>
                            <div className='flex items-center gap-2 px-5 py-1 bg-white w-32 rounded-full absolute left-5 bottom-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg>
                            <p>Technology</p>
                            </div>
                        <img className='rounded-xl' src={blog1} alt="" />
                        </div>
                            <div className='px-10 absolute -bottom-10 left-5 py-3 bg-white rounded-xl w-[90%] text-[#323f7c] text-2xl text-center font-koho font-semibold'>
                                <h1>10 Top Machine Learning Platforms In 2023</h1>
                            </div>
                        </div>
                        <div className=' text-gray-500  text-center w-full mt-16 mb-6'>
                            <div className='flex gap-3 justify-center'>
                                <p>Mar 15, 2023</p>
                                <p className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg> 8 min read</p>
                            </div>
                            <p className='mt-3 text-lg'>Podcasting operational change management <br /> inside of workflows to establish a...</p>
                        </div>
                        <div className='px-10 pb-10 flex gap-10'>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <img className='rounded-full' src={profile} alt="" />
                                <p>by Tekone</p>
                            </div>
                            <button className='px-7 flex items-center gap-2 text-sm text-[#513DE8] font-medium rounded-full py-[6px] border border-[#d9d4f2]'>Read Post <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g clip-path="url(#clip0_878_887)"><path d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z" fill="#513DE8"></path></g><defs><clipPath id="clip0_878_887"><rect width="15" height="15" fill="white"></rect></clipPath></defs></svg></button>
                        </div>
                </div>
                <div className='bg-[#e9f6ee] w-full shadow rounded-xl'>
                    
                        <div className='relative mb-10'>
                        <div className='w-full relative font-semibold text-sm text-[#513de8]'>
                            <div className='flex items-center gap-2 px-5 py-1 bg-white w-32 rounded-full absolute left-5 bottom-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg>
                            <p>Technology</p>
                            </div>
                        <img className='rounded-xl' src={blog2} alt="" />
                        </div>
                            <div className='px-10 absolute -bottom-10 left-5 py-3 bg-white rounded-xl w-[90%] text-[#323f7c] text-2xl text-center font-koho font-semibold'>
                                <h1>Tekone App Development Complete Guide</h1>
                            </div>
                        </div>
                        <div className=' text-gray-500  text-center w-full mt-16 mb-6'>
                            <div className='flex gap-3 justify-center'>
                                <p>Mar 15, 2023</p>
                                <p className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg> 8 min read</p>
                            </div>
                            <p className='mt-3 text-lg'>Podcasting operational change management <br /> inside of workflows to establish a...</p>
                        </div>
                        <div className='px-10 pb-10 flex gap-10'>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <img className='rounded-full' src={profile} alt="" />
                                <p>by Tekone</p>
                            </div>
                            <button className='px-7 flex items-center gap-2 text-sm text-[#513DE8] font-medium rounded-full py-[6px] border border-[#d9d4f2]'>Read Post <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g clip-path="url(#clip0_878_887)"><path d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z" fill="#513DE8"></path></g><defs><clipPath id="clip0_878_887"><rect width="15" height="15" fill="white"></rect></clipPath></defs></svg></button>
                        </div>
                </div>
                <div className='bg-[#e9f6ee] w-full shadow rounded-xl'>
                    
                        <div className='relative mb-10'>
                        <div className='w-full relative font-semibold text-sm text-[#513de8]'>
                            <div className='flex items-center gap-2 px-5 py-1 bg-white cursor-pointer w-32 rounded-full absolute left-5 bottom-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg>
                            <p>Application</p>
                            </div>
                        <img className='rounded-xl' src={blog3} alt="" />
                        </div>
                            <div className='px-10 absolute -bottom-10 left-5 py-3 bg-white rounded-xl w-[90%] text-[#323f7c] text-2xl text-center font-koho font-semibold'>
                                <h1>Tips to help you build your social media</h1>
                            </div>
                        </div>
                        <div className=' text-gray-500  text-center w-full mt-16 mb-6'>
                            <div className='flex gap-3 justify-center'>
                                <p>Mar 15, 2023</p>
                                <p className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 6 6" fill="none"><path d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z" fill="url(#paint0_linear_878_836)"></path><defs><linearGradient id="paint0_linear_878_836" x1="-3.93273e-08" y1="0.803572" x2="6.33755" y2="1.30989" gradientUnits="userSpaceOnUse"><stop stop-color="#513DE8"></stop><stop offset="1" stop-color="#8366E3"></stop></linearGradient></defs></svg> 8 min read</p>
                            </div>
                            <p className='mt-3 text-lg'>Podcasting operational change management <br /> inside of workflows to establish a...</p>
                        </div>
                        <div className='px-10 pb-10 flex gap-10'>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <img className='rounded-full' src={profile} alt="" />
                                <p>by Tekone</p>
                            </div>
                            <button className='px-7 flex items-center gap-2 text-sm text-[#513DE8] font-medium rounded-full py-[6px] border border-[#d9d4f2]'>Read Post <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g clip-path="url(#clip0_878_887)"><path d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z" fill="#513DE8"></path></g><defs><clipPath id="clip0_878_887"><rect width="15" height="15" fill="white"></rect></clipPath></defs></svg></button>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;