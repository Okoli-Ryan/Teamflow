import React, { useEffect, useRef, useState } from "react";
import Map from "../assets/images/Map.svg";
import { FaQuoteLeft } from "react-icons/fa";
import User1 from "../assets/images/User1.png";
import User2 from "../assets/images/User2.png";
import User3 from "../assets/images/User3.png";
import User4 from "../assets/images/User4.png";
import User5 from "../assets/images/User5.png";
import Fade from "react-reveal/Fade";

export default function Testimonials() {
	const activeTestimonial = useRef(0);
	const [testimonials, setTestimonials] = useState(testimonialsList);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTestimonials((prev) => {
	// 			const newTestimonials = [...prev];
	// 			newTestimonials[activeTestimonial.current].isActive = false;
	// 			activeTestimonial.current = (activeTestimonial.current + 1) % testimonials.length;
	// 			newTestimonials[activeTestimonial.current].isActive = true;
	// 			return newTestimonials;
	// 		});

	// 		return () => clearInterval(interval);
	// 	}, 4000);
	// }, []);

	return (
		<div className="hidden lg:block w-full bg-white mt-24  space-y-12 py-12">
			<h3 className="text-4xl text-[#515151] font-semibold text-center">
				Client
				<span className="text-secondary"> Testimonials</span>
			</h3>
			<div className="padding-container">
				<div className="w-full flex flex-col items-center">
					<div className="w-full relative">
						<img className="w-full h-auto" src={Map} />
						{testimonials.map((testimonial) => (
							<Testimonial {...testimonial} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function Testimonial({ isActive, name, quote, src, className }) {
	return (
		<div className={`absolute w-full max-w-xs  ${className}`}>
			<span
				className={`z-10 flex justify-center relative items-center transition-all duration-300  ${
					isActive ? "w-24 h-24" : "w-16 h-16"
				} bg-[transparent] left-[50%] -translate-x-[50%]`}>
				<img src={src} alt="" className="w-full h-full z-10 relative top-[50%]" />
			</span>
			<Fade bottom duration={500} when={isActive}>
				<div
					className={`flex flex-col absolute items-center p-8  bg-white shadow-md max-w-xs rounded-lg`}>
					<span className="absolute top-4 left-4">
						<FaQuoteLeft size={20} className="text-lightgray opacity-50" />
					</span>
					<div className="flex flex-col space-y-4">
						<p className="text-[#2D3150] font-semibold text-md text-center">{name}</p>
						<p className="text-[#3C405F] text-sm text-center">{quote}</p>
					</div>
				</div>
			</Fade>
		</div>
	);
}

const testimonialsList = [
	{
		src: User1,
		className: "top-[22%] left-[38%]",
		isActive: false,
		name: "Michael Oxlong",
		quote: "Ever since i moved to teamFlow, life has gotten o much easier.",
	},
	{
		src: User2,
		className: "top-[12%] left-[58%]",
		isActive: false,
		name: "Jenna Stevens",
		quote: "I never start any job without setting up TeamFlow first. Optimization at it's finest",
	},
	{
		src: User3,
		className: "top-[10%] left-[8%]",
		isActive: false,
		name: "Samuel Long",
		quote: "They really did a nice work with this software. 10/10",
	},
	{
		src: User4,
		className: "top-[70%] left-[70%]",
		isActive: false,
		name: "Denise Evans",
		quote: "The possibilities are endless when you switch to TeamFlow",
	},
	{
		src: User5,
		className: "top-[58%] left-[20%]",
		isActive: false,
		name: "Matthew Shwimmer",
		quote: "Random words by a user, but it's a nice product",
	},
];
