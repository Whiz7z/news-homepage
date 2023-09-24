import React from "react";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <a href="/">Home</a>
      </li>
      <li className={style.listItem}>
        <a href="/">New</a>
      </li>
      <li className={style.listItem}>
        <a href="/">Popular</a>
      </li>
      <li className={style.listItem}>
        <a href="/">Trending</a>
      </li>
      <li className={style.listItem}>
        <a href="/">Categories</a>
      </li>
    </ul>
  );
};

export default Menu;
