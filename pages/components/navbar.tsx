import Link from 'next/link'

var link = "text-l py-1 px-2 m-3 tracking-wide subpixel-antialiased text-base nav-bar font rounded-md hover:bg-stone-100 hover:text-green-600"
export default function navbar() {
    return <nav className='py-4 px-5 flex justify-between mb-5 '>
        <h1>TITLE</h1>
        <ul className='flex'>
            <li>
                <Link className={link} href="/">Home</Link>
            </li>
            <li>
                <Link className={link} href="/about">About Us</Link>
            </li>
            <li>
                <Link className={link} href="/blog/hello-world">Blog Post</Link>
            </li>
        </ul>

    </nav>
}