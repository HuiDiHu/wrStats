import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";
import logo from 'assets/logo.png'
import { navItems } from 'src/constants'

const Navbar = ({ props }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className={`${mobileDrawerOpen && 'sticky '}top-0 z-20 py-3 backdrop-blur-lg ${!mobileDrawerOpen && 'border-b '} border-neutral-700/80`}>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <Link to={'/'}>
                        <div className='flex items-center flex-shrink-0 w-[200px]'>
                            <img className='h-10 w-10 mr-2' src={logo} alt='' />
                            <h1 className={`${props.titleHidden ? 'hidden' : ''} flex h-10 items-center font-bold text-2xl tracking-tight`}>
                                <span>stats</span>
                                <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>
                                    WR
                                </span>
                            </h1>
                        </div>
                    </Link>
                    <div className='w-1/16' />
                    <ul className='hidden lg:flex ml-14 space-x-2'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.to}>
                                    <div className={item.label === props.label ? 'p-4 bg-neutral-700 rounded-lg cursor-default' : 'p-4'}>
                                        <span>
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items.center'>
                        <button 
                            className="py-2 px-3 border rounded-md"
                            onClick={() => {props.setLoginModal(true); props.setSignupModal(false)}}
                        >
                            Log In
                        </button>
                        <button 
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                            onClick={() => {props.setLoginModal(false); props.setSignupModal(true)}}
                        >
                            Create an account
                        </button>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? (<X />) : (<Menu />)}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && !props.loginModal && !props.signupModal && (
                    <div className="right-0 z-20 p-5 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link to={item.to}>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 mt-5">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar