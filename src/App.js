import Header from "./components/Header";
import WebinarSlider from "./components/WebinarSlider";
import PartnerSlider from "./components/PartnerSlider";
import PaperSlider from "./components/PaperSlider";
import PaperPopup from "./components/PaperPopup";
import Paper from "./components/Paper";
import React, { useState } from "react";

const about = [
  {
    title: "Кто мы",
    src: "icons/about1.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Нам доверяют",
    src: "icons/about2.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Что мы делаем ",
    src: "icons/about3.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Зачем вам это нужно",
    src: "icons/about4.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
]

const papers = [
  {
    key: 1,
    name: "mauris vitae ultricies leo integer",
    img: "img/webinar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: "1 сентября, 09:00",
    author: "Екатерина Саблева"
  },
  {
    key: 2,
    name: "5342534523453245",
    img: "img/webinar.png",
    text: "5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 5342534523453245 ",
    time: "1 сентября, 09:00",
    author: "Анатолий Кузнецов"
  }
]


function App() {
  const [paperIndex, changePaperIndex] = useState(0);
  const [paperPopupHeight, setPaperPopupHeight] = useState("auto");

  return (
    <div className="wrapper" style={{ maxHeight: `${paperPopupHeight}` }}>
      <Header />
      <main className="main">
        <section className="news">
          <div className="container" style={{ backgroundImage: "url('img/news-img.png')" }}>
            <section className="body">
              <h3>Запишитесь на новый вебинар</h3>
              <h2>“Блаблабла”</h2>
              <span className="time" style={{
                backgroundImage: "url('icons/timer.svg')"
              }}>Начало 23 июля, 22:00</span>
              <button>Открыть</button>
            </section>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <h3 className="titleSection">О нас</h3>
            <div className="body">
              {about.map(obj => {
                return (
                  <section key={obj.title} className="item">
                    <h3 style={{ backgroundImage: `url('${obj.src}')` }}>{obj.title}</h3>
                    <span>{obj.text}</span>
                  </section>
                )
              })}
            </div>
          </div>
        </section>
        <section className="articles" id="articles">
          <h3 className="titleSection">Статьи</h3>
          <div className="container">
            <PaperSlider value={[papers.map((obj) => {
              return (<Paper onClickPaper={() => changePaperIndex(obj.key)} name={obj.name} img={obj.img} text={obj.text} time={obj.time} author={obj.author} />)
            })]} />
          </div>
        </section>
        <section className="webinars" id="webinars">
          <h3 className="titleSection">Видеокурсы</h3>
          <div className="container">
            <WebinarSlider />
          </div>
        </section>
        <section className="partners" id="partners">
          <h3 className="titleSection">Партнеры</h3>
          <div className="container">
            <PartnerSlider />
          </div>
        </section>
      </main>
      {paperIndex && <PaperPopup name={papers[paperIndex - 1].name} text={papers[paperIndex - 1].text} onClose={() => { setPaperPopupHeight("100%"); changePaperIndex(0) }} onLoad={setPaperPopupHeight} />}
    </div >
  );
}

export default App;