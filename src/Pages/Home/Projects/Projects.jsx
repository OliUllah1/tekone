import React from 'react';
import project1 from '../../../assets/images/projects/project1.jpg'
import project2 from '../../../assets/images/projects/project2.jpg'
import project3 from '../../../assets/images/projects/project3.jpg'
import project4 from '../../../assets/images/projects/project4.jpg'
const Projects = () => {
    return (
        <div className='px-3 lg:px-5 pt-20 lg:pb-28 pb-16'>
            <div className='text-center mb-10'>
            <h6 className='font-semibold text-[#513de8] font-koho mb-3'>OUR PROJECTS</h6>
                <h1 className='font-koho text-[26px] leading-[48px] lg:text-[40px] font-extrabold text-[#323f7c]'>Our Recent Launched Projects <br /> Available Into Market</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='relative mb-20 lg:mb-0'>
                    <div className='overflow-hidden rounded-lg '>
                    <img className='rounded-lg hover:-translate-y-1 hover:scale-110 duration-300' src={project1} alt="" />
                    </div>
                    <div className='absolute w-4/5 -bottom-14 left-8 bg-white rounded-lg p-5'>
                        <p className='text-gray-600 mb-3'>Illustration</p>
                        <h1 className='text-[#032e42] font-semibold text-2xl font-koho'>Infrastructure Upgrade</h1>
                    </div>
                </div>
                <div className='relative mb-20 lg:mb-0'>
                    <div className='overflow-hidden rounded-lg '>
                    <img className='rounded-lg hover:-translate-y-1 hover:scale-110 duration-300' src={project2} alt="" />
                    </div>
                    <div className='absolute w-4/5 -bottom-14 left-8 bg-white rounded-lg p-5'>
                        <p className='text-gray-600 mb-3'>Illustration</p>
                        <h1 className='text-[#032e42] font-semibold text-2xl font-koho'>Innovation Technology</h1>
                    </div>
                </div>
                <div className='relative mb-20 lg:mb-0'>
                    <div className='overflow-hidden rounded-lg '>
                    <img className='rounded-lg hover:-translate-y-1 hover:scale-110 duration-300' src={project3} alt="" />
                    </div>
                    <div className='absolute w-4/5 -bottom-14 left-8 bg-white rounded-lg p-5'>
                        <p className='text-gray-600 mb-3'>Illustration</p>
                        <h1 className='text-[#032e42] font-semibold text-2xl font-koho'>Analys & Backup Blockchain</h1>
                    </div>
                </div>
                <div className='relative mb-20 lg:mb-0'>
                    <div className='overflow-hidden rounded-lg '>
                    <img className='rounded-lg hover:-translate-y-1 hover:scale-110 duration-300' src={project4} alt="" />
                    </div>
                    <div className='absolute w-4/5 -bottom-14 left-8 bg-white rounded-lg px-5 py-9'>
                        <p className='text-gray-600 mb-3'>Illustration</p>
                        <h1 className='text-[#032e42] font-semibold text-2xl font-koho'>Data Visualization</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;