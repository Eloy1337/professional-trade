import styles from "./Webinar.module.scss";

function Webinar(props) {
	return (
		<article className={styles.article}>
			<img src="img/webinar.png" alt="webinar-img" />
			<h3>mauris vitae ultricies leo integer</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis. Nisl condimentum id venenatis a condimentum.
			</p>
			<span style={{ backgroundImage: "url('icons/user.svg')" }}>Александра Александрова</span>
		</article>
	)
}

export default Webinar;