import Link from 'next/link'
import logo from '../assets/hac/hac.png'
import Image from 'next/image'
import { useState } from 'react';

var link = ' px-4 py-2 mt-2 text-sm text-gray-500 font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline '
var primaryNav = ' w-full md:block md:w-auto '
var mobileNav = ' absolute text-2xl md:text-base md:static inset-y-0 right-0 backdrop-blur-md shadow-xl md:shadow-none pt-20 md:pt-0 px-10 md:px-0 md:pt-0 md:bg-white '
var hamburger = ' block absolute h-0.5 w-4 bg-gray-600 transform transition duration-200 ease-in-out '

export default function Navbar() {

    const [isActive, setActive] = useState(false);
    const Toggle = () => {
        setActive(!isActive); 
    };

    return (
        <nav className='shadow-sm py-4 px-5 flex justify-between mb-5 bg-white items-center'>
            <div className='flex'>
                <Image className='w-20 object-contain mr-3' src={logo} alt='user profile picture'/>
                <Link className='hidden lg:block bg-gray-50 p-0.5 px-2 rounded-md hover:bg-green-50 hover:cursor-pointer hover:text-green-800'  href="/">Hulhumale&apos; Academic Center</Link>
            </div>
            <button onClick={Toggle} className="z-50 text-gray-500 rounded-lg w-9 h-9 fixed md:hidden focus:outline-none bg-gray-100 right-4">
                <span className="sr-only">Open main menu</span>
                <div className="flex justify-center items-center w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={isActive ? 'rotate-45' + hamburger : ' -translate-y-1.5' + hamburger}></span>
                    <span aria-hidden="true" className={isActive ? 'opacity-0' + hamburger : hamburger}></span>
                    <span aria-hidden="true" className={isActive ? '-rotate-45' + hamburger : ' translate-y-1.5' + hamburger}></span>
                </div>
            </button>
            <div className={isActive ? mobileNav : "hidden " + primaryNav}>
                <ul className="flex flex-col space-y-10 items-center h-full md:h-auto md:flex-row md:space-y-0 py-1.5">
                    <li>
                        <Link className={link} href="/">Home</Link>
                    </li>
                    <li>
                        <Link className={link} href="/about">About</Link>
                    </li>
                    <li>
                        <Link className={link} href="/programs">Programs</Link>
                    </li>
                    <li>
                        <Link className={link} href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={link + 'text-gray-800 bg-green-200 hover:bg-green-300'} href="/registration">Regiser</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}