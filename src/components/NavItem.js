import { NavLink } from "react-router-dom"

const NavItem = ({to, children, classNameFunc}) => {
  return(
    <NavLink to={to} className={classNameFunc}>
      {children}
    </NavLink>
  );
};

export default NavItem
