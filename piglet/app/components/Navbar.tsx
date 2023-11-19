import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return(
        <div className='w-screen h-[80px] z-10 bg-cream fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>PIGLET</h1>
                    <ul className='hidden md:flex'>
                    <li><Link href='/flashcards'>Flashcards</Link></li>
                    <li><Link href='/checklist'>Checklist</Link></li>
                    <li><Link href='/music'>Music</Link></li>
                    <li><Link href='/usefulLinks'>Resources</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar