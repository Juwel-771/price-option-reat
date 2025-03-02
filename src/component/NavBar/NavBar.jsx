import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const NavBar = () => {
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
        <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
            {
                open === true ? <AiOutlineClose /> : <AiOutlineMenu /> 
            }  
    
        </div>
        <ul className={`md:flex p-4 duration-1000 absolute ${open ? 'top-10': '-top-56'}`}>
            {
                routes.map((route) => (<NavLink route={route}></NavLink>))
            }
        </ul>
    </nav>
  );
};

export default NavBar;
