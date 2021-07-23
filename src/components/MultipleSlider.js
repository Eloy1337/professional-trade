import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webinar from "./Webinar";

export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
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
					<Webinar />
					<Webinar />
					<Webinar />
					<Webinar />
				</Slider>
			</div>
		);
	}
}