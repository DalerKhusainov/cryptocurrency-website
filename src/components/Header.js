/* eslint-disable jsx-a11y/anchor-is-valid */
// COMPONENTS
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

// FROM ASSETS
import Logo from "../assets/img/logo.svg";

// ICONS
import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      id="header"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container flex items-center justify-between mx-auto">
        {/* LOGO */}
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        {/* NAV & BTNS */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* OPEN NAV BTN */}
        <div
          onClick={() => setNavMobile(true)}
          className="cursor-pointer lg:hidden"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
