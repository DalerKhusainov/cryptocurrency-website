/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// FROM ASSETS
import Logo from "../assets/img/logo.svg";
import VisaImg from "../assets/img/visa.png";
import MastercardImg from "../assets/img/mastercard.png";
import BitcoinImg from "../assets/img/bitcoin.png";

// ICONS
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

// REACT-SCROLL
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pt-0 lg:pt-24" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* LOGO */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px] cursor-pointer">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <img src={Logo} alt="" />
            </Link>
          </div>
          {/* LINK GROUPS */}
          <div className="flex flex-col flex-1 gap-16 lg:flex-row">
            {/* LINK GROUP 1 */}
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <Link
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="transition hover:text-blue"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="transition hover:text-blue"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="transition hover:text-blue"
                    href="#"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="transition hover:text-blue"
                    href="#"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="transition hover:text-blue"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* LINK GROUP 2 */}
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Resources Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="transition hover:text-blue" href="#">
                    Download Whitepaper
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#">
                    Smart Token
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#">
                    Interest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* PAYMENT */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="mb-10 font-medium text-center h3 lg:text-left">
                We accept following payment systems
              </h3>
              <div className="flex items-center justify-center gap-6">
                <img src={VisaImg} alt="Visacard" />
                <img src={MastercardImg} alt="Mastercard" />
                <img src={BitcoinImg} alt="Bitcoin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPY & SOCIAL */}
      <div className="py-12">
        <div className="container flex flex-col items-center mx-auto gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* COPY TEXT */}
          <div>&copy; 2023 CRAPPO. All rights reserved.</div>
          {/* SOCIAL ICONS */}
          <div className="flex text-2xl gap-x-8">
            <a className="transition hover:text-blue" href="#">
              <IoLogoYoutube />
            </a>
            <a className="transition hover:text-blue" href="#">
              <IoLogoInstagram />
            </a>
            <a className="transition hover:text-blue" href="#">
              <IoLogoTwitter />
            </a>
            <a className="transition hover:text-blue" href="#">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
