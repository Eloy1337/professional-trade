import styles from "./Webinar.module.scss";

function Webinar({ name, img, text, time, author, onClickWebinar }) {
	return (
		<article onClick={onClickWebinar} className={styles.article}>
			<img src={img} alt="webinar-img" />
			<h3>{name}</h3>
			<span style={{ backgroundImage: "url('icons/user.svg')" }}>{author}</span>
			<p>{text}</p>
		</article>
	)
}

export default Webinar;