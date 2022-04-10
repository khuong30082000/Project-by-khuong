import "./header.css";

import HeaderMenus from "./HeaderMenus";
import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";

function Header() {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus />
        </div>
      </div>
    </header>
  );
}

export default Header;
