import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/insta.svg'

import phone from '../assets/phone.png'
import email from '../assets/email.png'

var buttonStyle = 'p-2 bg-gray-600 hover:bg-gray-800 hover:cursor-pointer rounded-full'
var contactLinkStyle = 'px-2 py-1 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 ml-0 hover:text_black transform transition duration-200 ease-in-out'

export default function Footer() {
    return (
        <div className=' flex-rows items-center justify-center md:flex md:justify-between bg-white static bottom-0 '>
            <div className=' md:pl-5 py-4 block text-center md:text-start'>
                <a className='text-gray-800 flex-rows hover:text-black' target="_blank" href='https://g.page/hulhumale-academic-centre?share' rel="noopener noreferrer">
                    <h1 className="text-md font-bold">Hulhumale&apos; Academic Center</h1>
                    <p>Hithigas Magu, Goalhi 3</p>
                    <p>Hulhumale&apos;, Male&apos; 23000</p>
                </a>
            </div>
            <div className=" flex-rows md:ml-4 ">
                <div className=' flex gap-x-3 justify-center md:justify-start '> 
                    <Image width={30} height={2} className="hidden lg:block " src={email} alt='phone icon'/>
                    <Link href='mailto: hulhumale.academiccentre@gmail.com' className={contactLinkStyle}>hulhumale.academiccentre@gmail.com</Link>
                </div>   
                <div className=' flex gap-x-3 justify-center md:justify-start items-center pt-3 '> 
                    <Image width={30} src={phone} className="hidden lg:block " alt='phone icon'/>
                    <p className="">+960</p>
                    <Link href='Tel: +9609948882' className={contactLinkStyle}>335-5715</Link>
                    <Link href='Tel: +9609948882' className={contactLinkStyle}>793-5717</Link>
                </div>                         
            </div>
            <div className=' flex justify-center mt-5 md:my-5 md:justify-end md:items-end '>
                <div className=' flex justify-center items-center p-3 rounded-t-4xl border-x-4 md:border-r-0 md:ml-5 md:p-3 md:pr-5 md:rounded-l-full gap-x-3 md:gap-x-6 bg-gray-50 border-t-4 border-l-4 md:border-b-4 border-dashed border-gray-200 '>
                    <a className={buttonStyle}><Image width={30} src={facebook} alt='user profile picture'/></a>
                    <a className={buttonStyle}><Image width={30} src={instagram} alt='user profile picture'/></a>
                    <a className={buttonStyle}><Image width={30} src={twitter} alt='user profile picture'/></a>
                </div>
            </div>
        </div>
    )
}