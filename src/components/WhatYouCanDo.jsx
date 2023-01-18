import React from "react";
import Graph from "../assets/images/graph.svg";
import Lightbulb from "../assets/images/lightbulb.svg";
import Magnify from "../assets/images/magnify.svg";

export default function WhatYouCanDo() {
	return (
		<div className="container">
			<div className="w-full flex flex-col items-center">
				<h3 className="text-4xl text-[#515151] font-semibold">
					What you
					<span className="text-secondary"> can do?</span>
				</h3>
				<div className="grid grid-cols-3 justify-between mt-16 gap-12">
					<ActionItem
						src={Graph}
						bgColor="#FED369"
						title="Business Planning"
						desc="Our Business Plan is a written document describing a company’s core business activities."
					/>
					<ActionItem
						src={Lightbulb}
						bgColor="#3ADAD9"
						title="Financial Planning"
						desc="Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan."
					/>
					<ActionItem
						src={Magnify}
						bgColor="#FD9B79"
						title="Market Analysis"
						desc="A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market"
					/>
				</div>
			</div>
		</div>
	);
}

function ActionItem({ src, bgColor, title, desc }) {
	return (
		<div className="flex flex-col space-y-8 items-center">
			<span className="p-4 rounded-lg w-max" style={{ background: bgColor }}>
				<img src={src} className="w-8 h-8" />
			</span>
			<span className="text-[#2B3377] text-lg font-semibold">{title}</span>
			<span className="text-lightgray text-center">{desc}</span>
		</div>
	);
}
