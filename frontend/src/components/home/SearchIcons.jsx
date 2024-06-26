import React from 'react'
import logo from 'assets/logo.png'

const SearchIcons = () => {
    return (
        <div className='flex justify-center items-center mb-5 mt-10'>
            <img className='h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px] mt-3' src={logo} alt=''/>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                stats
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    WR
                </span>
            </h1>
        </div>
    )
}

export default SearchIcons