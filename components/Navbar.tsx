import Image from 'next/image'
import React, { useState } from 'react'

interface NavbarProps {
    links?: string[]
}

export default function Navbar({ links = ['About', 'Features', 'Contact'] }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => setIsOpen(c => !c)

    return (
        <nav className="bg-gray-800 shadow-lg text-gray-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7 justify-between w-full">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2 gap-x-4">
                                <Image src="/vercel.svg" alt="Logo" className="h-8 w-8 mr-2" width={64} height={64} />
                                <span className="font-semibold text-gray-200 text-lg">Seshuri</span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            {links.map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300">{link}</a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleNavbar}>
                            <svg className=" w-6 h-6 hover:text-blue-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "" : "hidden"} md:hidden mobile-menu`}>
                <ul className="">
                    {links.map(link => (
                        <li key={link}><a href="#" className="block text-md px-2 py-4 hover:bg-blue-500 transition duration-300 font-semibold">{link}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
