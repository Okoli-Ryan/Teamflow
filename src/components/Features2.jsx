import React from "react";
import Description from "./Description";
import Feature3 from "../assets/images/Feature3.webp";
import Feature3Rotate from "../assets/images/Figure3Rotate.svg";
import Feature4 from "../assets/images/Feature4.svg"
import Feature4Hover1 from "../assets/images/tangerine.svg"
import Feature4Hover2 from "../assets/images/Yellow.svg"
import Feature4Hover3 from "../assets/images/Green.svg"
import Feature5 from "../assets/images/Feature5.webp";
import Feature5Hover from "../assets/images/Feature5Hover.svg"

export default function Features2() {
	return (
		<div className="w-full flex flex-col items-center space-y-12 mt-24">
			{features.map((feature) => (
				<Description {...feature} />
			))}
		</div>
	);
}

const features = [
	{
		reverse: false,
		src: Feature3,
		HoverElement: () => (
			<img
				src={Feature3Rotate}
				className="p-8 w-full h-full absolute top-0 right-0 rotating"
			/>
		),
		title: "Save time with Automations",
		desc: "Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily.",
	},
	{
		reverse: true,
		src: Feature4,
		HoverElement: () => (
			<>
				<img
					src={Feature4Hover1}
					className="w-auto h-16 md:h-24 bounce-far absolute right-[35%] bottom-2"
				/>
				<img
					src={Feature4Hover2}
					className="w-auto h-20 md:h-28 bounce-far bounce-delay absolute left-0 top-[45%]"
				/>
				<img
					src={Feature4Hover3}
					className="w-auto h-24 md:h-36 bounce-far bounce-delay absolute right-0 top-0"
				/>
			</>
		),
		title: "Visualize work with Views",
		desc: "View data as a map, calendar, timeline, kanban, and more. The easy-to-use, visual interface lets any team member jump in and get started, no training required.",
	},
	{
		reverse: false,
		src: Feature5,
		HoverElement: () => (
			<>
				<img
					src={Feature5Hover}
					className="w-auto h-24 md:h-36 bounce-far absolute right-0 bottom-[10%]"
				/>
			</>
		),
		title: "24/7 Customer Support",
		desc: "Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge base",
		Footer: () => (
			<div className="flex">
				<button className="btn btn-secondary">Learn more</button>
			</div>
		),
	},
];
