import React from 'react';

const NavLink = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-4'>
            <a href={path}>{name}</a> 
        </li>
    );
};

export default NavLink;