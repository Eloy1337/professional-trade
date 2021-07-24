import React, { useEffect } from "react";

function PaperPopup({ name, text, onLoad, onClose }) {
	useEffect(() => {
		onLoad("" + document.querySelector(".paperPopup")?.clientHeight + "px");
		document.querySelector(".wrapper").scrollIntoView({ behavior: "smooth" });
	});

	return (
		<section className="paperPopup">
			<div className="container">
				<section className="title">
					<section className="info">
						<h2>{name}</h2>
						{/* <span>author</span> */}
					</section>
					<button onClick={onClose}>✕</button>
				</section>
				<section className="text">
					<pre>{text}</pre>
				</section>
			</div>
		</section>
	);
}

export default PaperPopup;