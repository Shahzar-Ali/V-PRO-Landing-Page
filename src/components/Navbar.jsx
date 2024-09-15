import { Menu, X } from "lucide-react";
import { useState } from 'react'
import logo from '../assets/v-pro.png'
import { navItems } from '../constants'


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const mobileToggle = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">V PRO</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="gradient-btn"
                        >
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={mobileToggle}>
                            {mobileMenu ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileMenu && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">


                        <ul >
                            {navItems.map((item, index) => (
                                <li className="py-4" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="gradient-btn"
                        >
                            Create an account
                        </a>
                    </div>
                    </div>
                )}
            </div>

     
        </nav >
    );
}

export default Navbar