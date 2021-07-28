import React, { useEffect } from "react";

function WebinarPopup({ name, iframe, onLoad, onClose }) {
	useEffect(() => {
		onLoad("" + document.querySelector(".paperPopup")?.clientHeight + "px");
		document.querySelector(".wrapper").scrollIntoView({ behavior: "smooth" });
		let frame = document.querySelector(".iframe");
		frame.innerHTML = iframe;
		frame.querySelector("iframe").style.width = "100%";
		frame.querySelector("iframe").style.height = "400px";
		frame.querySelector("iframe").style.margin = "50px 0";
	});

	return (
		<section className="paperPopup">
			<div className="container">
				<section className="title">
					<section className="info">
						<h2>{name}</h2>
					</section>
					<button onClick={onClose}>✕</button>
				</section>
				<section className="iframe">
					{/* {iframe} */}
				</section>
			</div>
		</section>
	);
}

export default WebinarPopup;