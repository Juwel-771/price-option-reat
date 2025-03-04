import React, { useState } from 'react';
import NavBar3Link from '../NavBar3Link/NavBar3Link';
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const NavBar3 = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About-3" },
        { id: 3, path: "/profile/:id", name: "Profile" },
        { id: 4, path: "/service", name: "Service" },
        { id: 5, path: "*", name: "Not Found" },
    ];
    return (
        <nav>
            <button onClick={()=>setOpen(!open)} className='md:hidden text-2xl'>
                {
                    open===true ? <AiOutlineClose> </AiOutlineClose>:<AiOutlineMenu></AiOutlineMenu>
                    
                }
            </button>
            <ul className='flex p-4'>
                {
                    routes.map(route=> <NavBar3Link key={route.id} route = {route}></NavBar3Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar3;