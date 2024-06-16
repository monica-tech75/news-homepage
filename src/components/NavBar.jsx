import menuLogo from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
  <ul className="hidden md:flex justify-end gap-10 text-[0.938rem] md:w-[55vw] md:items-center">
      <li className='hover:text-myred-400'><a href="#">Home</a></li>
      <li className='hover:text-myred-400'><a href="#">New</a></li>
      <li className='hover:text-myred-400'><a href="#">Popular</a></li>
      <li className='hover:text-myred-400'><a href="#">Trending</a></li>
      <li className='hover:text-myred-400'><a href="#">Categories</a></li>
    </ul>
    <img className="md:hidden" src={menuLogo} alt="logo for menu burger"/>
    </>
    
  )
}

