import React from 'react';

const NavBar3Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-4'>
            <a href={path}> {name} </a>
        </li>
    );
};

export default NavBar3Link;