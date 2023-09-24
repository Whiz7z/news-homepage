import React from "react";
import style from "./Header.module.css";
import Logo from "../icons/Logo";

import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <Logo />
      </div>
      <div className={style.menuContainer}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
