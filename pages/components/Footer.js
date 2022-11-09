import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/insta.svg'

var buttonStyle = 'p-2 bg-gray-600 hover:bg-gray-800 hover:cursor-pointer rounded-full'

export default function Footer() {
    return (
        <div className=' static bottom-0'>
            <div className=' border-b-4 border-gray-200 flex-rows items-center justify-center md:flex md:justify-start bg-white static bottom-0 '>
                <div className=' md:w-2/6 py-4 px-5 md:mr-2 block text-center md:text-start'>
                    <h1 className="text-lg font-bold">Hulhumale&apos; Academic Center</h1>
                    <p>Hithigas Magu, Goalhi #3</p>
                    <p>Hulhumale&apos;, Male&apos; 23000</p>
                </div>
                <div className="md:w-3/6 flex-rows">
                    <div className=' grid justify-center md:justify-start '> 
                        <Link href='Tel: +9609948882' className="px-2 py-1 bg-gray-100 text-gray-800 rounded-lg">hulhumale.academiccentre@gmail.com</Link>
                    </div>   
                    <div className=' flex space-x-3 justify-center md:justify-start items-center pt-3 '> 
                        <Link href='Tel: +9609948882' className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-lg">+960 335-5715</Link>
                        <Link href='Tel: +9609948882' className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-lg">793-5717</Link>
                    </div>                         
                </div>
                <div className=' md:w-2/6 flex justify-center md:justify-end md:items-end '>
                    <div className=' flex justify-center items-center mt-5 md:mt-0 p-5 rounded-t-3xl border-x-4 md:border-r-0 md:ml-5 md:p-3 md:pr-5 md:rounded-l-full gap-x-6 bg-gray-50 border-t-4 border-l-4 md:border-b-4 border-dashed border-gray-200 '>
                        <a className={buttonStyle}><Image width={30} src={facebook} alt='user profile picture'/></a>
                        <a className={buttonStyle}><Image width={30} src={instagram} alt='user profile picture'/></a>
                        <a className={buttonStyle}><Image width={30} src={twitter} alt='user profile picture'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}