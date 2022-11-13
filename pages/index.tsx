import Link from 'next/link'

var contactLinkStyle = ' bg-teal-700 md:leading-relaxed text-xl md:text-2xl text-white rounded-2xl hover:bg-teal-500 ml-0 transform transition duration-200 ease-in-out'

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
              Get Started
            </div>
            <div className="bg-teal-600 px-2 py-0.5 mx-3 rounded-xl text-xl">
              ➜
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
}
