import React from 'react';
import NavLink from '../NavLink/NavLink';

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/profile/:id", name: "Profile" },
        { id: 4, path: "/service", name: "Service" },
        { id: 5, path: "*", name: "Not Found" }
      ];
      

    return (
        <nav>
            <ul className='md:flex p-4'>
                {
                    routes.map(route => <NavLink route = {route}></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;