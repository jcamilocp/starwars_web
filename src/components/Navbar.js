import NavItem from "./NavItem"

const Navbar = () => {

  const classNameFunc = ({ isActive }) => (isActive ? "underline font-bold" : "")

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8">
      <ul className="flex items-center gap-3">
        <li>
          <NavItem to="/" classNameFunc={classNameFunc}> StarWars </NavItem>
        </li>
        <li>
          <NavItem to="/planets" classNameFunc={classNameFunc}> Planets </NavItem>
        </li>
        <li>
          <NavItem to="/people" classNameFunc={classNameFunc}> People </NavItem>
        </li>
        <li>
          <NavItem to="/films" classNameFunc={classNameFunc}> Films </NavItem>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          user@starwars.com
        </li>
        <li>
          <NavItem to="/login" classNameFunc={undefined}> Login </NavItem>
        </li>
        <li>
          👤
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;