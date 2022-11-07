import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='shadow-sm  py-4 px-5 grid grid-cols-3 mb-5 bg-white items-center static bottom-0'>
            <div>
                <h1>Hulhumale Academic Center</h1>
                <p>Goalhi 34543</p>
                <p>Hulhumale'</p>
            </div>
            <div className="block h-full bg-slate-400">
                <Link href='/'>aa</Link>
            </div>
            <div className="flex h-full items-start justify-end">
                <Link href='/' className="px-4 py-2 bg-gray-800 text-white rounded-lg">Contact</Link>
            </div>
        </div>
    )
}