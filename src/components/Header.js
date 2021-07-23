import React, { useState } from 'react';

const arr = [
	{
		href: "#about",
		text: "О нас"
	},
	{
		href: "#articles",
		text: "Статьи"
	},
	{
		href: "#webinars",
		text: "Вебинары"
	},
	{
		href: "",
		text: "Видеокурсы"
	},
]

function Header() {
	const [isBurgerActive, changeBurgerActive] = useState(false);

	const scroll = (href) => {
		if (href !== "") {
			document.querySelector(href).scrollIntoView({ behavior: "smooth" });
		}
	}

	const onClickBurger = () => {
		changeBurgerActive(!isBurgerActive);
	}

	return (
		<header className="header">
			<div className="container">
				<section className="headerLeft">
					<a href="#top">
						<img src="logo.svg" alt="logo" width={80} />
						<span>Professional<br />Trade</span>
					</a>
				</section>
				<section className="headerRight">
					<ul>
						{arr.map(obj => {
							return <li key={obj.href} onClick={() => scroll(obj.href)}>{obj.text}</li>
						})}
					</ul>
				</section>
				<section className={isBurgerActive ? "burger burgerActive" : "burger"} onClick={onClickBurger}>
					<span></span>
					<span></span>
					<span></span>
				</section>
			</div>
			{isBurgerActive &&
				<section className="burgerMenu">
					<ul>
						{arr.map(obj => {
							return <li key={obj.href} onClick={() => { scroll(obj.href); onClickBurger() }}>{obj.text}</li>
						})}
					</ul>
				</section>
			}
		</header>
	)
}

export default Header;