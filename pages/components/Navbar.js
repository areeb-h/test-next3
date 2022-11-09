import Link from 'next/link'
import logo from '../assets/hac/hac.png'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';

var link = ' px-6 py-4 md:px-4 md:py-2 text-lg md:text-base text-gray-500 rounded-lg md:m-0 md:ml-4 hover:text-gray-900 md:hover:bg-gray-50 md:focus:bg-gray-100 border-4 hover:button-blur border-transparent hover:border-white md:border-none transform transition duration-200 ease-in-out '
var button = ' text-teal-600 px-6 py-3 md:py-2 md:px-4 border-2 border-dashed border-teal-600 mt-2 text-lg md:text-base rounded-lg md:ml-4 md:hover:bg-gray-600 hover:text-white transform transition duration-100 ease-in-out '
var linkActive = link + ' md:bg-gray-100 text-gray-900 border-gray-200 hover:border-gray-200 '
var buttonActive = ' px-6 py-3 md:py-2 md:px-4 border-2 border-dashed border-teal-600 mt-2 text-lg md:text-base rounded-lg md:ml-4 hover:bg-gray-600 hover:text-white text-white focus:text-white bg-gray-700 hover:bg-gray-700'
var primaryNav = ' fixed md:static w-4/6 md:block md:w-auto text-2xl md:text-base py-40 md:py-0 inset-y-0 right-0 bg-blur z-40 shadow-xl md:shadow-none transform transition duration-300 ease-in-out md:transition-none'
var hamburger = ' block absolute rounded-lg h-0.5 w-4 bg-gray-500 transform transition duration-200 ease-in-out '

//backdrop-blur-3xl	 md:backdrop-blur-none

const links = {
    home : "/",
    about : "/about",
    programs : "/programs",
    blog : "/blog",
    register : "/register",
}

export default function Navbar() {

    const [isActive, setActive] = useState(false);
    const Toggle = () => {
        setActive(!isActive); 
    };

    const router = useRouter();

    return (
        <nav className='shadow-sm flex px-5 py-5 justify-between mb-5 bg-white items-center'>
            <Link href="/" className='flex pr-5 '>
                <Image className='w-20 object-contain ' src={logo} alt='user profile picture'/>
                <h1 className='hidden lg:block ml-6 text-lg text-gray-700 uppercase hover:cursor-pointer transition duration-200 ease-in-out' href="/">Hulhumale&apos; Academic Center</h1>
            </Link>
            <button onClick={Toggle} className="z-50 text-gray-500 rounded-lg w-9 h-9 fixed md:hidden bg focus:outline-none bg-white border-2 right-4">
                <span className="sr-only">Open main menu</span>
                <div className="flex justify-center items-center w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={isActive ? 'rotate-45' + hamburger : ' -translate-y-1.5' + hamburger}></span>
                    <span aria-hidden="true" className={isActive ? 'opacity-0' + hamburger : hamburger}></span>
                    <span aria-hidden="true" className={isActive ? '-rotate-45' + hamburger : ' translate-y-1.5' + hamburger}></span>
                </div>
            </button>
            <div className={isActive ? primaryNav : primaryNav + " translate-x-full md:translate-x-0 md:transition-none"}>
                <ul className="flex flex-col justify-around items-center h-full md:h-auto md:flex-row md:space-y-0 py-1.5">
                    <li onClick={Toggle}>
                        <Link href="/" className={router.pathname == links.home ? linkActive : link}>Home</Link>
                    </li>
                    <li onClick={Toggle}>
                        <Link className={router.pathname == links.about ? linkActive : link} href ={links.about}>About</Link>
                    </li>
                    <li onClick={Toggle}>
                        <Link className={router.pathname == links.programs ? linkActive : link} href={links.programs}>Programs</Link>
                    </li>
                    <li onClick={Toggle}>
                        <Link className={router.pathname == links.blog ? linkActive : link} href={links.blog}>Blog</Link>
                    </li>
                    <li onClick={Toggle}>
                        <Link className={router.pathname == links.register ? buttonActive : button} href={links.register}>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}