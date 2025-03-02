import React from 'react';
import PropTypes from 'prop-types'; 

const NavLink = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-4 mb-3 hover:bg-teal-900 p-2'>
            <a href={path}>{name}</a> 
        </li>
    );
};

NavLink.PropTypes = {
    route: PropTypes.object
}
export default NavLink;