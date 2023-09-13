import React from 'react';
import logo from '../../../assets/images/navbar/tekone_logo_home.png'
import arrow from '../../../assets/images/navbar/arrow-right.png'
import { FaSearch,FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='px-3 lg:px-5 py-8 bg-[#dcffeb] flex items-center justify-between'>
            <img className='w-32 lg:w-40' src={logo} alt="" />
            <div className='hidden lg:flex gap-20 items-center'>
                <ul className='flex gap-2 items-center text-[17px] text-[#47568a] font-medium'>
                    <li className='text-[#513de8] px-5 py-2 rounded bg-[#cce5e9]'><a href="">Home <sup>11</sup> </a></li>
                    <li className='hover:text-[#513de8] px-5 py-2 rounded hover:bg-[#cce5e9]'><a href="">About</a></li>
                    <li className='hover:text-[#513de8] px-5 py-2 rounded hover:bg-[#cce5e9]'><a href="">Services <sup>08</sup></a></li>
                    <li className='hover:text-[#513de8] px-5 py-2 rounded hover:bg-[#cce5e9]'><a href="">Pages <sup>14</sup></a></li>
                    <li className='hover:text-[#513de8] px-5 py-2 rounded hover:bg-[#cce5e9]'><a href="">Blog <sup>04</sup></a></li>
                    <li className='hover:text-[#513de8] px-5 py-2 rounded hover:bg-[#cce5e9]'><a href="">Contact</a></li>
                </ul>
                <div className='flex gap-10 items-center'>
                    <button className='text-[#323f7c] text-xl hover:text-[#513de8]'><FaSearch></FaSearch></button>
                    <button className='flex items-center text-white gap-3 px-7 py-4 bg-[#323f7c] rounded font-semibold text-[17px] hover:bg-[#513de8]'>Get a Quote <svg fill='#ffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg> </button>
                </div>
            </div>
            <button className='block lg:hidden text-2xl text-[#513de8]'><FaBars></FaBars></button>
        </div>
    );
};

export default Navbar;