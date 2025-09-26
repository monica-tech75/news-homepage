import { useState } from 'react';

import menuLogo from '../assets/images/icon-menu.svg';

export const NavBar = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleMenu = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };
  return (
    <>
      <ul
        className={`md:flex justify-end gap-10 text-[0.938rem] md:w-[55vw] md:items-center ${
          isHeaderOpen ? 'block' : 'hidden'
        } md:block`}>
        <li className='hover:text-myred-400'>
          <a href='#'>Home</a>
        </li>
        <li className='hover:text-myred-400'>
          <a href='#'>New</a>
        </li>
        <li className='hover:text-myred-400'>
          <a href='#'>Popular</a>
        </li>
        <li className='hover:text-myred-400'>
          <a href='#'>Trending</a>
        </li>
        <li className='hover:text-myred-400'>
          <a href='#'>Categories</a>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className='md:hidden'>
        {' '}
        <img
          src={menuLogo}
          alt='logo for menu burger'
        />{' '}
      </button>
    </>
  );
};
