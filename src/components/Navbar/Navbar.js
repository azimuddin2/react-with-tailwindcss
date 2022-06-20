import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'About', link: '/about' },
        { id: 5, name: 'Contact', link: '/contact' }
    ]

    return (
        <nav className='bg-slate-800 text-white md:py-4'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-slate-800 w-full text-center duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;