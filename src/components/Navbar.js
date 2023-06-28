import NavItem from "./NavItem"
import { useAuth } from "./auth"
import logo from "../assets/images/logo.svg"

const Navbar = () => {

  const classNameFunc = ({ isActive }) => (isActive ? "underline font-bold" : "")

  const auth = useAuth()

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 bg-white">
      <ul className="flex items-center gap-3">
        <li>
          <NavItem to="/" classNameFunc={classNameFunc}>
            <img className="w-36 h-14 bg-transparent" src={logo} alt="StarWars" />
          </NavItem>
        </li>
        <li>
          { auth.user &&
            <NavItem to="/planets" classNameFunc={classNameFunc}> Planets </NavItem>
          }
        </li>
        <li>
          { auth.user &&
            <NavItem to="/people" classNameFunc={classNameFunc}> People </NavItem>
          }
        </li>
        <li>
          { auth.user &&
            <NavItem to="/films" classNameFunc={classNameFunc}> Films </NavItem>
          }
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          {auth.user ? auth.user.email : ""}
        </li>
        <li>
          {auth.user ? "👤" : ""}
        </li>
          {!auth.user &&
            <li className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded">
              <NavItem to="/signup"> Sign Up </NavItem>
            </li>
          }
        <li className="hover:underline hover:font-bold">
          {auth.user ?
            <button className="hover:underline" onClick={() => {auth.logoutUser()}}>Logout</button> :
            <NavItem to="/login" classNameFunc={undefined}> Login </NavItem>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
