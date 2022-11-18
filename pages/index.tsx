import Link from 'next/link'
import hac from './assets/hac/hac.png'
import ucmas from './assets/ucmas.png'
import Image from 'next/image'

var contactLinkStyle = ' bg-teal-700 text-xl md:text-2xl text-white rounded-2xl hover:bg-teal-500 ml-0 transform transition duration-200 ease-in-out'

var viewMoreButton = ' bg-cyan-700 px-5 py-2 text-md md:text-lg text-white rounded-xl hover:bg-cyan-600 ml-0 flex justify-center items-center transform transition duration-200 ease-in-out'


export default function Home() {
  return <div className=" block max-w-5xl mx-auto">
    <div className=" bg-white rounded-2xl shadow-xl border-gray-300 flex-columns items-center justify-center md:flex space-y-5 md:space-y-0 md:mt-20 mb-20">
      <div className=" md:flex-grow md:w-8/12 tracking-wide p-5 md:py-10 md:px-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none ">
        <p className=" leading-relaxed text-xl text-white text-shadow-lg">
          <span className=" font-semibold ">HAC</span> is the first private education institution established in Hulhumale’. We place a heavy focus on teaching excellence and providing a place where your children can feel at home while learning the skills that will help them thrive long after their school years are over. 
          As a parent, what more can you ask for?
        </p>
      </div>
      <div className=" flex-rows items-center justify-center md:w-5/12 pb-8 md:px-10 md:pb-0 ">
        <div className=' flex-columns justify-center mb-5 '>
          <div className=' flex justify-center'>
            <p className=" md:leading-relaxed text-2xl md:text-3xl text-center text-gray-800 "> Registrations Open for </p>
          </div>
          <div className=' flex justify-center'>
            <p className=" md:leading-relaxed text-2xl md:text-3xl font-bold text-gray-800 "> 2022-2023 </p>
          </div>
        </div>
        <div className=' flex justify-center'>
          <Link href='/register' className={contactLinkStyle + " flex justify-center items-center "}>
            <div className='pl-5 py-3 '>
              Get Enrolled
            </div>
            <div className="bg-teal-600 px-2 py-0.5 mx-3 rounded-xl text-xl">
              ➜
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className=' flex-columns items-center justify-center md:flex space-x-0 md:space-x-5 space-y-10 md:space-y-0 mb-20'>
      <div className=' bg-white rounded-2xl shadow-xl basis-1/2 '>
        <div className=' p-5 md:p-10 pb-0 md:pb-0 flex justify-between items-center'>
          <h1 className=' text-2xl font-bold mr-4'>Cambridge English</h1>
          <div className=' bg-gray-100 p-4 rounded-2xl'><Image className='w-ucmas ' src={hac} alt='user profile picture'/> </div>
        </div>
        <p className=' text-xl p-5 md:p-10'>We offer a number of programs for students from ages 4 through 12 and above, up to Cambridge IGCSE O’level English, as well as classes for adults.</p>
        <div className='bg-gray-50 flex p-5 md:px-10 justify-between rounded-b-2xl items-center'>
          <h1 className=' text-lg font-bold'> 13 Courses</h1>
          <Link href='/register' className={viewMoreButton}>
            <div className=' text-lg'> View All </div>
          </Link>
        </div>
      </div>
      <div className=' bg-white rounded-2xl shadow-xl basis-1/2'>
        <div className=' p-5 md:p-10 pb-0 md:pb-0 flex justify-between items-center'>
          <h1 className=' text-2xl font-bold mr-4'>UCMAS Mental Math</h1>
          <div className=' bg-gray-100 p-4 rounded-2xl'><Image className='w-ucmas ' src={ucmas} alt='user profile picture'/> </div>
        </div>
          <p className=' text-xl p-5 md:p-10'>This is a mind developing program where students improve different skills that will help in learning other subjects too. This program is for ages 4 to 14</p>
        <div className='bg-gray-50 flex p-5 md:px-10 justify-between rounded-b-2xl items-center'>
          <h1 className=' text-lg font-bold'> 13 Courses</h1>
          <Link href='/register' className={viewMoreButton}>
            <div className=' text-lg'> View All  </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
}
