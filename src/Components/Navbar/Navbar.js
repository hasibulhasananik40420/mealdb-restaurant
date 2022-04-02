import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-sky-500 p-4'>
           <div className='ml-20'>
               logo
           </div>
           <div className='mr-20 '>
              <Link className='mr-10' to='/'>Home</Link>
              <Link className='mr-10' to='/shops'>Shops</Link>
              <Link className='mr-10' to='/contact'>Contact</Link>
           </div>
        </div>
    );
};

export default Navbar;