import Header from "./components/Header";
import Paper from "./components/Paper";
import Webinar from "./components/Webinar";

const features = [
  {
    title: "Кто мы",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Нам доверяют",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Что мы делаем ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Зачем вам это нужно",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
]

function App() {
  return (
    <div className="wrapper">
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

        <section className="about" name="about">
          <div className="container">
            <h3 className="titleSection">О нас</h3>
            <div className="body">
              {features.map(obj => {
                return (
                  <section className="item">
                    <h3>{obj.title}</h3>
                    <span>{obj.text}</span>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="articles" name="articles">
          <h3 className="titleSection">Статьи</h3>
          <Paper />
        </section>
        <section className="webinars" name="webinars">
          <h3 className="titleSection">Вебинары</h3>
          <div className="container">
            <Webinar />
            <Webinar />
            <Webinar />
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;
