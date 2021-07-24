import styles from "./Paper.module.scss";

function Paper(props) {
	return (
		<article className={styles.article}>
			<section className={styles.body}>
				<section className={styles.bodyLeft}>
					<section className={styles.title}>
						<h3>mauris vitae ultricies leo integer</h3>
					</section>
					<img src="img/webinar.png" alt="articleimg" />
				</section>
				<section className={styles.bodyRight}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<span className={styles.time} style={{ backgroundImage: "url('icons/timer-dark.svg')" }}>1 сентября, 09:00</span>
					<span className={styles.author} style={{ backgroundImage: "url('icons/user.svg')" }}>Екатерина Саблева</span>
				</section>
			</section>
		</article>
	)
}

export default Paper;