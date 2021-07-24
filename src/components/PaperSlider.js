import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PartnerSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
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
					{this.props.value.map((item) => {
						return (item);
					})}
				</Slider>
			</div>
		);
	}
}