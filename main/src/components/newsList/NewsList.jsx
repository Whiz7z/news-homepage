import React from "react";
import style from "./NewsList.module.css";
import img1 from "../../assets/images/image-retro-pcs.jpg";
import img2 from "../../assets/images/image-top-laptops.jpg";
import img3 from "../../assets/images/image-gaming-growth.jpg";

const NewsList = () => {
  return (
    <div className={style.container}>
      <ul>
        <li>
          <div className={style.newsItem}>
            <div className={style.newsItemImage}>
              <img src={img1} alt="img1"></img>
            </div>
            <div>
              <p className={style.number}>01</p>
              <h4>Reviving Retro PCs</h4>
              <p className={style.subTitle}>
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={style.newsItem}>
            <div className={style.newsItemImage}>
              <img src={img2} alt="img2"></img>
            </div>
            <div>
              <p className={style.number}>02</p>
              <h4>Top 10 Laptops of 2023</h4>
              <p className={style.subTitle}>
                Our best pick for various needs and budgets.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={style.newsItem}>
            <div className={style.newsItemImage}>
              <img src={img3} alt="img3"></img>
            </div>
            <div>
              <p className={style.number}>03</p>
              <h4>The Growth of Gaming</h4>
              <p className={style.subTitle}>
                How the pandemic has sparked fresh opportunities.{" "}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
