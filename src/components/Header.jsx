
import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'


export const Header = () => {
  return (

    <header className="bg-white flex justify-between py-4">
      <img src={logo} alt="logo with the letter M" />
      <NavBar />
    </header>
    
  )
}

