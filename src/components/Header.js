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
		href: "#",
		text: "Вебинары"
	},
	{
		href: "#",
		text: "Видеокурсы"
	},
]

function Header() {
	const [isBurgerActive, changeBurgerActive] = useState(false);

	const onClickBurger = () => {
		changeBurgerActive(!isBurgerActive);
	}

	return (
		<header className="header">
			<div className="container">
				<section className="headerLeft">
					<img src="logo.svg" alt="logo" width={90} />
					<span>Professional<br />Trade</span>
				</section>
				<section className="headerRight">
					<ul>
						{arr.map(obj => {
							return <li><a href={obj.href}>{obj.text}</a></li>
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
							return <li><a href={obj.href}>{obj.text}</a></li>
						})}
					</ul>
				</section>
			}
		</header>
	)
}

export default Header;