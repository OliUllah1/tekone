import React from 'react';
import atom from '../../../assets/images/work/atom.png';
import diamond from '../../../assets/images/work/diamond.png';
import dollar from '../../../assets/images/work/dollar-bag.png';
import film from '../../../assets/images/work/film-reel.png';
import idea from '../../../assets/images/work/idea.png';
import medkit from '../../../assets/images/work/medkit.png';
import strategy from '../../../assets/images/work/strategy.png';
import target from '../../../assets/images/work/target.png';
const Work = () => {
    return (
        <>
            <div className='px-3 lg:px-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-5 py-20'>
                <div className='col-span-2 my-auto'>
                <h6 className='text-lg font-semibold text-[#513de8] font-koho mb-3'>WORK FOR ANY INDUSTRY</h6>
                <h1 className='font-koho text-[26px] lg:text-4xl font-extrabold text-[#323f7c]'>Best Solutions, For All Organizations</h1>
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={atom} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={diamond} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={dollar} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={film} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={idea} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={medkit} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={strategy} alt="" />
                </div>
                <div className='bg-white shadow-lg py-14 rounded-md'>
                    <img className='w-20 mx-auto' src={target} alt="" />
                </div>
            </div>
        </>
    );
};

export default Work;