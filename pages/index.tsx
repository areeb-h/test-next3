import Link from 'next/link'

var contactLinkStyle = ' bg-teal-700 text-2xl text-white rounded-2xl hover:bg-teal-500 ml-0 transform transition duration-200 ease-in-out'

export default function Home() {
  return <div className=" block max-w-5xl mx-auto">
    <div className=" flex-columns items-center justify-center md:flex space-y-5 md:space-y-0 gap-y-5 md:gap-x-5	">
      <div className=" md:flex-grow md:w-8/12 tracking-wide bg-green-100 border-4 border-green-200 p-5 rounded-xl">
        <p className=" leading-relaxed text-xl text-gray-800">
          <span className=" font-semibold ">HAC</span> is the first private education institution established in Hulhumale’. We place a heavy focus on teaching excellence and providing a place where your children can feel at home while learning the skills that will help them thrive long after their school years are over. 
          As a parent, what more can you ask for?
        </p>
      </div>
      <div className=" flex-rows items-center justify-center md:w-5/12 ">
        <div className=' flex-columns justify-center mb-5'>
          <div className=' flex justify-center'>
            <p className=" leading-relaxed text-3xl text-center text-gray-800 "> Registrations Open for </p>
          </div>
          <div className=' flex justify-center'>
            <p className=" leading-relaxed text-3xl font-bold text-gray-800 "> 2022-2023 </p>
          </div>
        </div>
        <div className=' flex justify-center'>
          <Link href='/register' className={contactLinkStyle + " flex justify-center items-center "}>
            <div className='px-5 pt-3 pb-4'>
              Get Started
            </div>
            <div className="bg-teal-600 px-2 py-2 mr-2 rounded-xl text-xl">
              ➜
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
}
