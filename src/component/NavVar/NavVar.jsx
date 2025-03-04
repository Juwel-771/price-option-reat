import React, { useState } from 'react';
import NavVarLink from '../NavVarLink/NavVarLink';
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const NavVar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/profile/:id", name: "Profile" },
        { id: 4, path: "/service", name: "Service" },
        { id: 5, path: "*", name: "Not Found" },
    ];
    return (
        <nav>
            <button onClick={()=>setOpen(!open)} className = 'md:hidden text-2xl'>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu> 
                }
            </button>
            <ul className='flex'>
                {
                    routes.map(route => <NavVarLink route={route}></NavVarLink>)
                }
            </ul>      
        </nav>
    );
};

export default NavVar;