import menuLogo from '../assets/images/icon-menu.svg'
import menuX from '../assets/images/icon-menu-close.svg'

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
    <div>
    <img className="sm:hidden hover:hidden " src={menuLogo} alt="logo for menu burger"/>
    <img className="hidden hover:visible" src={menuX} alt="logo for menu burger in form of an X when hover"/>
    </div>
    </>
    
    
    
  )
}

