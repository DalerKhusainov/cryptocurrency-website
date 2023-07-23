// DATA
import { navData } from "../data";

// REACT-SCROLL
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li
              className="transition-all duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue"
              key={index}
            >
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
