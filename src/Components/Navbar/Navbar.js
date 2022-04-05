import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Navbar = () => {
    return (
        <div className='flex justify-between bg-[#454a4d] p-5'>
           <div className='ml-20'>
               <h2 className='text-2xl font-bold font-sans text-orange-500'>The MealDB</h2>
           </div>
           <div className='mr-20 text-white'>
              <CustomLink className='mr-10' to='/'>Home</CustomLink>
              <CustomLink className='mr-10' to='/shops'>Shops</CustomLink>
              <CustomLink className='mr-10' to='/contact'>Contact</CustomLink>
           </div>
        </div>
    );
};

export default Navbar;