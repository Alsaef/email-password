// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Link className='link'  to='/'>Home</Link>
            <Link className='link' to='/login'>Login</Link>
            <Link className='link' to='/register'>Register</Link>
            <Link className='link' to='/registerrbs'>Register</Link>
        </div>
    );
};

export default Header;