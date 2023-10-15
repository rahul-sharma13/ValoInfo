import React, { useContext, useState } from 'react';
import { navLinks, UserInfo } from '../constants';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom"; 
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
      setNav(!nav);
    };
  
    const hideTab = () => {
      setNav(false);
    };
    
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
      <nav>
        <div className="max-w-screen-xl flex font-poppins flex-wrap items-center justify-between mx-auto p-4">
          {/* left */}
          <div>
            <a href="/" className="flex items-center">
            { theme === "dark" ? (<img src="./logos/logo2.png" className="h-9 mr-1" alt="ValoInfo" />) : (<img src="./logos/logo1.png" className="h-9 mr-1" alt="ValoInfo" />) } 
              <span className="self-center text-2xl tracking-wide font-bold whitespace-nowrap">
                ValoInfo
              </span>
            </a>
          </div>
  
          {/* right */}
          <div className="flex items-center gap-3">
            <div>
              <ul className="list-none flex flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className="font-normal cursor-pointer font-poppins text-[16px] mr-8"
                  >
                    <a href={nav.id}>{nav.title}</a>
                  </li>
                ))}
                <li
                  className="font-normal cursor-pointer font-poppins text-[17px] flex items-center mr-1"
                  onClick={handleClick}
                >
                  User
                  {nav ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                </li>
              </ul>
              <div
                className={`bg-accent h-24 rounded-xl w-24 absolute top-14 right-48 text-[14px] shadow-xl ${
                  nav ? "" : "hidden"
                }`}
              >
                <ul className="list-none ml-4 mt-3">
                  {UserInfo.map((user, index) => (
                    <Link to={`/${user}`} key={index}>
                      <li
                        className={`cursor-pointer ${
                          index == 0 ? "mt-0" : "mt-1"
                        } hover:text-gray-600`}
                        onClick={hideTab}
                      >
                        {user}
                      </li>
                   </Link>
                  ))}
                </ul>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    );
}

export default Header
