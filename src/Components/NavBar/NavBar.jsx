import { useState } from "react";
import logo from "../../Assets/images/logo.svg";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const ThemeSwitcher = () => {
    // document.body.classList.contains("dark")
    //   ? document.body.classList.remove("dark", "dark:bg-bg-dark", "dark:*:text-lavender-blush")
    //   : document.body.classList.add("dark", "dark:bg-bg-dark", "dark:*:text-lavender-blush");
  };
  const LangSwitcher = () => {
    // if (document.documentElement.lang == "en") {
    //   document.documentElement.dir = "rtl";
    //   document.documentElement.lang = "ar";
    // } else {
    //   document.documentElement.dir = "ltr";
    //   document.documentElement.lang = "en";
    // }
  };
  return (
    <header className="NavBar">
      <nav className="w-full relative flex justify-between items-center px-4 py-8 shadow-lg z-50 bg-white">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={`MenuLinks lg:w-3/4 lg:flex lg:justify-between lg:items-center hidden
          ${show ? "Links" : ""}`}
        >
          <div className="links">
            <ul
              className={`lg:*:p-0 *:p-4 lg:*:inline-block lg:*:mx-8 lg:*:pb-0 *:pb-4 text-center`}
            >
              <li>
                <a
                  className="hover:text-light-coral hover:underline hover:underline-offset-4 hover:decoration-wavy hover:decoration-light-coral customTransition3"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-light-coral hover:underline hover:underline-offset-4 hover:decoration-wavy hover:decoration-light-coral customTransition3"
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="hover:text-light-coral hover:underline hover:underline-offset-4 hover:decoration-wavy hover:decoration-light-coral customTransition3"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-light-coral hover:underline hover:underline-offset-4 hover:decoration-wavy hover:decoration-light-coral customTransition3"
                  href="#exp"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="hover:text-light-coral hover:underline hover:underline-offset-4 hover:decoration-wavy hover:decoration-light-coral customTransition3"
                  href="#destination"
                >
                  Destination
                </a>
              </li>
            </ul>
          </div>
          <div className={`*:mx-3 lg:block hidden`}>
            {/* ${show ? "switchers" : ""} */}
            <button className="" onClick={ThemeSwitcher}>
              Theme
            </button>
            <button className="" onClick={LangSwitcher}>
              Lang
            </button>
          </div>
        </div>
        <div className="menu lg:hidden" onClick={() => setShow((prv) => !prv)}>
          <span className={!show ? "block" : "hidden"}>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </span>
          <span className={show ? "block" : "hidden"}>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
