import React from 'react'
import profileImage from '../../assets/profile.png';
import { IoMdArrowRoundBack } from "react-icons/io";


const Header = () => {
  return (
    <nav className='px-4 flex justify-between my-8'>
        <div className="back-btn w-[60px] h-[60px] bg-gray-100 rounded-full flex justify-center items-center">
            <div className="">
            <IoMdArrowRoundBack size={20}/>
            </div>
        </div>
        <div className="profile">
            <div className="">
                <img className='w-[70px] h-[70px] ' src={profileImage} alt="profile image" />
            </div>
        </div>
    </nav>
  )
}

export default Header