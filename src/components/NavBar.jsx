import menuLogo from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
  <ul className="hidden sm:flex sm:justify-around text-[0.938rem] sm:w-[55vw] sm:items-center">
      <li><a href="#">Home</a></li>
      <li><a href="#">New</a></li>
      <li><a href="#">Popular</a></li>
      <li><a href="#">Trending</a></li>
      <li><a href="#">Categories</a></li>
    </ul>
    <img className="sm:hidden" src={menuLogo} alt="logo for menu burger"/>
    </>
    
  )
}

