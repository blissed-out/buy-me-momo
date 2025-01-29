"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"



const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <nav className='flex px-4 justify-between items-center bg-gray-900 text-neutral-200 h-20 font-extrabold'>
            <Link href={"/"}>
                <div className="logo gap-2 flex items-center text-xl px-8">
                    Buy me<img src="/icons/momo.png" alt="" width={30} typeof='png' />Mo:mo
                </div>
            </Link>
            {/* <div className='flex gap-12'>
                <a href="/" className='hover:text-orange-400'>Home</a>
                <a href="/" className='hover:text-orange-400'>About</a>
                <a href="/" className='hover:text-orange-400'>Projects</a>
                <a href="/" className='hover:text-orange-400'>Signup</a>
                <a href="/" className='hover:text-orange-400'>Login</a>
            </div> */}

            <div className='flex gap-8'>
                {session && <div className="dropdown"><button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => setTimeout(() => {
                    setshowdropdown(false)
                }, 100)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Weclome {session?.user?.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 absolute top-16`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                            </li>
                            <li onClick={() => { signOut() }}>
                                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div></div>}

                {/* {session && <Link href={"/dashboard"}>
                    <button type="button" className="text-neutral-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-full text-sm px-5 py-2.5 text-center">Dashboard</button>
                </Link>}

                {session && <button type="button" className="text-neutral-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-full text-sm px-5 py-2.5 text-center" onClick={() => { signOut() }}>Signout</button>} */}

                {!session && <Link href={"/login"}>
                    <button type="button" className="text-neutral-500 my-7 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-full text-sm px-5 py-2.5 text-center">LOGIN</button>
                </Link>}
            </div>

        </nav>
    )
}

export default Navbar
