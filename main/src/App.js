import React from "react";
import style from "./App.module.css";

import Wrapper from "./components/wrapper/Wrapper";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import NewsList from "./components/newsList/NewsList";

function App() {
  return (
    <div className={style.wrapper}>
      <Wrapper>
        <Header />
        <MainContent />
        <NewsList />
      </Wrapper>
    </div>
  );
}

export default App;
