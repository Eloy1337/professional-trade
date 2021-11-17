import Header from './components/Header';
import WebinarSlider from './components/WebinarSlider';
import PartnerSlider from './components/PartnerSlider';
import PaperSlider from './components/PaperSlider';
import PaperPopup from './components/PaperPopup';
import Paper from './components/Paper';
import Webinar from './components/Webinar';
import WebinarPopup from './components/WebinarPopup';
import React, { useState } from 'react';
import papers from './texts/papers.json';

const about = [
  {
    title: 'Кто мы',
    src: 'icons/about1.svg',
    text: 'Школа финансовой грамотности в современном цифровом мире «Professional  trade» — это информационно-просветительский проект в финансовой области реализуемый при поддержке Федерального агентства по делам молодежи. Мы рассказываем про финансовые инструменты, как их использовать и как на них зарабатывать. Для этого мы приглашаем лучших экспертов финансового рынка.',
  },
  {
    title: 'Нам доверяют',
    src: 'icons/about2.svg',
    text: 'Школа финансовой грамотности в современном цифровом мире «Professional  trade» - это проект который выиграл Всероссийский конкурс молодежных проектов в 2020 году и реализовывается при грантовой поддержке Федерального агентства по делам молодежи.',
  },
  {
    title: 'Что мы делаем ',
    src: 'icons/about3.svg',
    text: 'Мы делаем короткие практические вебинары по инвестированию, трейдингу и финансовым инструментам различных бирж. Всего будет организовано 48 часов образовательного блока, в рамках которого пройдут обучения более 90 человек. Информацию, которую вы получаете на вебинарах, можно сразу использовать на практике.',
  },
  {
    title: 'Зачем вам это нужно',
    src: 'icons/about4.svg',
    text: 'После курсов вы обретете финансовую свободу и независимость. Вы будете чувствовать себя уверенно при покупке акций, облигаций, валюты или фьючерсов. Сможете сами формировать свой финансовый портфель и учитывать различные риски.',
  },
];

const webinars = [
  {
    key: 1,
    name: 'Справедливая доходность облигации',
    img: 'img/webinar1.png',
    text: `Кто-то умный однажды сказал: «В мире нет справедливости!», и возможно, был прав. Но лишь частично. В мире финансов справедливость как раз есть. «Справедливой» считается та цена, которая отражает весь будущий доход или всю будущую полезность, которую вы получите, купив актив на финансовом рынке. Но как определить, какая доходность по облигации является справедливой или рыночной? Для этого нужно немножечко пошаманить с калькулятором, и сегодня мы вам расскажем, как именно это сделать. Приятного просмотра!`,
    author: 'Yango',
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/1DZWK2zbfYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    key: 2,
    name: 'Выручка, прибыль, доход и EBITDA / Анализ отчетности и оценка бизнеса',
    img: 'img/webinar2.png',
    text: `Как анализировать финансовую отчетность компаний, чтобы провести оценку бизнеса и выбрать недооцененные акции в свой инвестиционный портфель? В этом видео рассказываю, чем отличаются основные финансовые показатели из отчетности компаний: выручка, доход, чистая и операционная прибыль, EBIT и EBITDA.`,
    author: 'InvestFuture',
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/gkD91ij6FCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    key: 3,
    name: 'Акции и облигации на бирже',
    img: 'img/webinar3.png',
    text: `Торговля акциями в 2021 году: инвестиции в акции и облигации на фондовом рынке для начинающих - пошаговая инструкция. Как стать инвестором в 2021 году, торговать на бирже ценными бумагами и получать пассивный доход в интернете? Куда вложить деньги, какие акции купить и где купить акции? Объясняем инвестиции для чайников, с нуля, с пошаговым планом действий. Прежде чем покупать акции, облигации, ETF на Московской бирже или других фондовых рынках, убедитесь, что вы понимаете логику инвестирования.`,
    author: 'InvestFuture',
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lTRcnAjNg3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    key: 4,
    name: 'Технический анализ что это? С точки зрения классики',
    img: 'img/webinar4.png',
    text: `В классическом представлении технический анализ - это анализ индикаторов. Однако, с точки зрения современности, под технический анализ притянули всё, что не относится к фундаментальному анализу. Если трейдер анализирует объёмы, или, например, просто цену - это уже технический анализ. Хотя с точки зрения классики - тех.анализ это анализ индикаторов. Ещё тех. анализ называют "компьютерный анализ графиков". Какие виды технического анализа бывают? Об этом мы сегодня поговорим. `,
    author: 'Артём Звёздин',
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8iDmeJ6fjck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    key: 5,
    name: 'Когда лопнет фондовый рынок?',
    img: 'img/webinar5.png',
    text: `Участники финансовых рынков по своей природе делятся на 2 типа: есть те, кто спешат заработать здесь и сейчас (жадность и излишняя самоуверенность), и те, кто боятся долго держать финансовые инструменты в своем портфеле (страх и неприятие риска). Значительно реже встречаются прагматичные инвесторы, которые находятся где-то посередине.`,
    author: 'VSAtrader',
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JZG1aB1sl3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

const getPaperFromKey = (key) => {
  if (!key) {
    return;
  }
  return papers.find((paper) => paper.key === key);
};

function App() {
  const [paperIndex, changePaperIndex] = useState(0);
  const [popupHeight, setPopupHeight] = useState('auto');
  const [webinarIndex, changeWebinarIndex] = useState(0);

  return (
    <div className='wrapper' style={{ maxHeight: `${popupHeight}` }}>
      <Header />
      <main className='main'>
        <section className='news'>
          <div
            className='container'
            style={{ backgroundImage: "url('img/news-img.png')" }}
          >
            <section className='body'>
              <h3>Посмотрите новый видеокурс</h3>
              <h2>“{webinars[0].name}”</h2>
              <span
                className='time'
                style={{
                  backgroundImage: "url('icons/user.svg')",
                }}
              >
                {webinars[0].author}
              </span>
              <button onClick={() => changeWebinarIndex(webinars[0].key)}>
                Открыть
              </button>
            </section>
          </div>
        </section>
        <section className='about' id='about'>
          <div className='container'>
            <h3 className='titleSection'>О нас</h3>
            <div className='body'>
              {about.map((obj) => {
                return (
                  <section key={obj.title} className='item'>
                    <h3 style={{ backgroundImage: `url('${obj.src}')` }}>
                      {obj.title}
                    </h3>
                    <span>{obj.text}</span>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
        <section className='articles' id='articles'>
          <h3 className='titleSection'>Статьи</h3>
          <div className='container'>
            <PaperSlider
              value={[
                papers.map((obj) => {
                  return (
                    <Paper
                      onClickPaper={() => changePaperIndex(obj.key)}
                      name={obj.name}
                      img={obj.img[0]}
                      text={obj.text}
                      time={obj.time}
                      author={obj.author}
                    />
                  );
                }),
              ]}
            />
          </div>
        </section>
        <section className='webinars' id='webinars'>
          <h3 className='titleSection'>Видеокурсы</h3>
          <div className='container'>
            {/* <WebinarSlider /> */}
            <WebinarSlider
              value={[
                webinars.map((obj) => {
                  return (
                    <Webinar
                      onClickWebinar={() => changeWebinarIndex(obj.key)}
                      name={obj.name}
                      img={obj.img}
                      text={obj.text}
                      author={obj.author}
                      iframe={obj.iframe}
                    />
                  );
                }),
              ]}
            />
          </div>
        </section>
        <section className='partners' id='partners'>
          <h3 className='titleSection'>Партнеры</h3>
          <div className='container'>
            <PartnerSlider />
          </div>
        </section>
      </main>
      {paperIndex && (
        <PaperPopup
          name={getPaperFromKey(paperIndex).name}
          text={getPaperFromKey(paperIndex).text}
          img={getPaperFromKey(paperIndex).img}
          onClose={() => {
            setPopupHeight('100%');
            changePaperIndex(0);
          }}
          onLoad={setPopupHeight}
        />
      )}

      {webinarIndex && (
        <WebinarPopup
          name={webinars[webinarIndex - 1].name}
          iframe={webinars[webinarIndex - 1].iframe}
          onClose={() => {
            setPopupHeight('100%');
            changeWebinarIndex(0);
          }}
          onLoad={setPopupHeight}
        />
      )}
    </div>
  );
}

export default App;
