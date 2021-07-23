import React, { Component } from "react";
import Slider from "react-slick";
import Partner from "./Partner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arr = ["partners/partner1.svg", "partners/partner2.png", "partners/partner3.jpg"];

export default class PartnerSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<div>
				<Slider {...settings}>
					{arr.map((item) => {
						return (<Partner url={item} />);
					})}
				</Slider>
			</div>
		);
	}
}