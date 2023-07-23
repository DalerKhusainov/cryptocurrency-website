// DATA
import { navData } from "../data";

// ICONS
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="top-0 bottom-0 flex items-center justify-center h-full lg:hidden bg-violet w-80">
      {/* CLOSE BTN */}
      <div
        onClick={() => setNavMobile(false)}
        className="absolute cursor-pointer top-2 left-2"
      >
        <CgClose className="text-3xl" />
      </div>
      {/* MENU LIST */}
      <ul className="flex flex-col text-xl gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
