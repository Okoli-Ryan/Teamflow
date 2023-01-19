import React from "react";
import Description from "./Description";
import Feature1 from "../assets/images/Feature-1.png";
import FeatureHover1 from "../assets/images/Feature-1-hover.svg";
import Feature2 from "../assets/images/Feature-2.png";
import Feature2Hover1 from "../assets/images/Feature2-hover-1.svg";
import Feature2Hover2 from "../assets/images/Feature2-hover-2.svg";

export default function Features() {
	return (
		<div className="w-full flex flex-col items-center gap-4 md:gap-12 mt-24">
			<h3 className="text-2xl md:text-4xl text-[#515151] font-semibold">
				Our
				<span className="text-secondary"> Features</span>
			</h3>
			<div className="mt-12 flex flex-col gap-8">
				{features.map((feature) => (
					<Description {...feature} />
				))}
			</div>
		</div>
	);
}

const features = [
	{
		reverse: false,
		src: Feature1,
		HoverElement: () => (
			<div className="px-4 py-2 shadow-md absolute bottom-[20%] right-[20%] bg-white bounce-far">
				<img src={FeatureHover1} className="w-auto md:h-8 h-4" />
			</div>
		),
		title: "Manage everything in one workspace",
		desc: "Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.",
	},
	{
		reverse: true,
		src: Feature2,
		HoverElement: () => (
			<>
				<img
					src={Feature2Hover1}
					className="w-auto h-6 md:h-12 bounce-far absolute left-[20%] top-2"
				/>
				<img
					src={Feature2Hover2}
					className="w-auto h-8 md:h-16 bounce-far bounce-delay absolute right-0 top-[10%]"
				/>
			</>
		),
		title: "Set up in minutes",
		desc: "Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes. Choose from hundreds of pre-made templates and tell stories with data with our easy drag-and-drop infographic creator.",
	},
];
