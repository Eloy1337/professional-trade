import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, background: "tranparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
			onClick={onClick}
		>
			<svg height="512px" id="Layer_1" style={{ enableBackground: "new 0 0 512 512", transform: "translateX(25px) rotate(180deg)" }} version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " /></svg>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, background: "tranparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
			onClick={onClick}
		>
			<svg height="512px" id="Layer_1" style={{ enableBackground: "new 0 0 512 512", transform: "translateX(-25px)" }} version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " /></svg>
		</div>
	);
}

export default class PartnerSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
						arrows: false
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]
		};
		return (
			<div>
				<Slider {...settings}>
					{this.props.value.map((item) => {
						return (item);
					})}
				</Slider>
			</div>
		);
	}
}