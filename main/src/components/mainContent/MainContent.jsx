import React from "react";
import style from "./MainContent.module.css";

import imageMain from "../../assets/images/image-web-3-desktop.jpg";

const MainContent = () => {
  return (
    <div className={style.container}>
      <div className={style.mainNewsBlock}>
        <img src={imageMain} alt="my"></img>
        <div className={style.mainNewsHeader}>
          <h1>The Bright Future of Web 3.0?</h1>
          <div className={style.mainNewsInfo}>
            <p>
              We're diving into the next evolution of the internet, which aims
              to put the power of platforms back in the hands of the people. But
              does he really deliver on his promise?
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className={style.newsListBlock}>
        <h2>New</h2>
        <ul>
          <li>
            <div>
              <a href="/">
                <h3>Hydrogen VS Electric Cars</h3>
              </a>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
          </li>
          <li className={style.borders}>
            <div>
              <a href="/">
                <h3>The Downsides of AI Artistry</h3>
              </a>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
          </li>
          <li>
            <div>
              <a href="/">
                <h3>Is VC Funding Drying Up?</h3>
              </a>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what means
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
