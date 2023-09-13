import React from 'react';
import atom from '../../../assets/images/work/atom.png';
import diamond from '../../../assets/images/work/diamond.png';
import dollar from '../../../assets/images/work/dollar-bag.png';
import film from '../../../assets/images/work/film-reel.png';
import idea from '../../../assets/images/work/idea.png';
import medkit from '../../../assets/images/work/medkit.png';
import strategy from '../../../assets/images/work/strategy.png';
import target from '../../../assets/images/work/target.png';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/images/work/logo-layer1.png'
import logo2 from '../../../assets/images/work/logo-layer2.png'
import logo3 from '../../../assets/images/work/logo-layer3.png'
import logo4 from '../../../assets/images/work/logo-layer4.png'
import logo5 from '../../../assets/images/work/logo-layer5.png'
import logo6 from '../../../assets/images/work/logo-layer6.png'
import logo7 from '../../../assets/images/work/logo-layer7.png'
import logo8 from '../../../assets/images/work/logo-layer8.png'
import logo9 from '../../../assets/images/work/logo-layer9.png'
import logo10 from '../../../assets/images/work/logo-layer10.png'
import logo11 from '../../../assets/images/work/logo-layer11.png'
import logo12 from '../../../assets/images/work/logo-layer12.png'
import heart from '../../../assets/images/work/heart_beat_graph_dark.svg'


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
            <div className='pt-5 pb-10'>
                <div className='flex mb-10 items-center justify-center text-[#323f7c] text-2xl font-bold font-koho'>
                    <img src={heart} alt="" />
                    <h5>What Technology We Are Using For Our Valued Customers</h5>
                    <img src={heart} alt="" />
                </div>
                <Marquee className='mb-10'>
                    <div className='flex gap-5'>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                        <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo1} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo2} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo3} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo4} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo5} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo6} alt="" />
                        </div>
                    </div>
                    
                    </div>
                </Marquee>
                <Marquee direction={"right"}>
                    <div className='flex gap-5'>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo7} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo8} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo9} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo10} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo11} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f2fff7] px-6 border-t border-b rounded-sm flex items-center justify-center py-4'>
                    <div className='lg:w-44 w-36'>
                        <img className='w-full object-cover' src={logo12} alt="" />
                        </div>
                    </div>
                    
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default Work;