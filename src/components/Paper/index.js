import styles from "./Paper.module.scss";

function Paper({ name, img, text, time, author, onClickPaper }) {
	return (
		<article onClick={onClickPaper} className={styles.article}>
			<section className={styles.body}>
				<section className={styles.bodyLeft}>
					<section className={styles.title}>
						<h3>{name}</h3>
					</section>
					<img src={img} alt="articleimg" />
				</section>
				<section className={styles.bodyRight}>
					<span className={styles.author} style={{ backgroundImage: "url('icons/user.svg')" }}>{author}</span>
					<span className={styles.time} style={{ backgroundImage: "url('icons/timer-dark.svg')" }}>{time}</span>
					<p><pre>{text}</pre></p>
				</section>
			</section>
		</article>
	)
}

export default Paper;